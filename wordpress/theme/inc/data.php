<?php
/**
 * Data access and URL helpers.
 */

function btw_data( $name ) {
	static $cache = array();
	if ( ! isset( $cache[ $name ] ) ) {
		$file           = BTW_DIR . '/data/' . $name . '.json';
		$cache[ $name ] = file_exists( $file ) ? json_decode( file_get_contents( $file ), true ) : array();
	}
	return $cache[ $name ];
}

function btw_config( $key = null ) {
	$config = btw_data( 'site' );
	return $key ? ( $config[ $key ] ?? null ) : $config;
}

function btw_services() {
	return btw_data( 'packages' )['services'] ?? array();
}

function btw_packages() {
	return btw_data( 'packages' )['packages'] ?? array();
}

function btw_stories() {
	return btw_data( 'portfolio' )['stories'] ?? array();
}

function btw_films() {
	return btw_data( 'portfolio' )['films'] ?? array();
}

function btw_service_by_slug( $slug ) {
	foreach ( btw_services() as $service ) {
		if ( $service['slug'] === $slug ) {
			return $service;
		}
	}
	return null;
}

function btw_package_by_slug( $slug ) {
	foreach ( btw_packages() as $pkg ) {
		if ( $pkg['slug'] === $slug ) {
			return $pkg;
		}
	}
	return null;
}

/** Story by id. Old location-named ids resolve through the aliases. */
function btw_story( $id ) {
	$stories = btw_stories();
	$aliases = btw_data( 'portfolio' )['aliases'] ?? array();
	$id      = $aliases[ $id ] ?? $id;
	return $stories[ $id ] ?? null;
}

function btw_package_title( $pkg ) {
	return $pkg['label'] . ' – ' . $pkg['name'];
}

/** Asset URL, escaped for HTML attributes. */
function btw_asset( $path ) {
	return esc_url( btw_asset_url( $path ) );
}

/**
 * Asset URL (unescaped). Files shipped inside the theme are served from the theme.
 * The photos are uploaded separately to the Media Library under a flat name,
 * e.g. assets/images/portfolio/andi-eva/1.webp -> btw-portfolio-andi-eva-1.webp
 * (see wordpress/README.md), so the theme zip stays small.
 */
function btw_asset_url( $path ) {
	$path = ltrim( $path, '/' );
	if ( file_exists( BTW_DIR . '/' . $path ) ) {
		return BTW_URI . '/' . $path;
	}
	$name    = btw_media_name( $path );
	$map     = btw_media_map();
	$uploads = wp_get_upload_dir();
	return $uploads['baseurl'] . '/' . ( $map[ $name ] ?? $name );
}

function btw_media_name( $path ) {
	return 'btw-' . str_replace( '/', '-', preg_replace( '~^assets/images/~', '', $path ) );
}

/** Flat file name -> path inside wp-content/uploads, for every uploaded btw-* file. */
function btw_media_map() {
	static $map = null;
	if ( null !== $map ) {
		return $map;
	}
	$map = get_option( 'btw_media_map' );
	if ( ! is_array( $map ) ) {
		global $wpdb;
		$files = $wpdb->get_col( "SELECT meta_value FROM {$wpdb->postmeta} WHERE meta_key = '_wp_attached_file' AND meta_value LIKE '%btw-%'" );
		$map   = array();
		foreach ( $files as $file ) {
			$map[ basename( $file ) ] = $file;
		}
		update_option( 'btw_media_map', $map, true );
	}
	return $map;
}

// Rebuild the map whenever photos are added or removed.
add_action( 'add_attachment', function () { delete_option( 'btw_media_map' ); } );
add_action( 'delete_attachment', function () { delete_option( 'btw_media_map' ); } );

/**
 * Site URL by key: a page key (home, about, …), a service key (elopement, private-villa,
 * pre-wedding), a package id (elopement-3) or "story:<id>". Escaped for HTML attributes.
 */
function btw_url( $key ) {
	$pages = array(
		'home'         => '/',
		'about'        => '/about/',
		'contact'      => '/contact/',
		'faq'          => '/faq/',
		'testimonials' => '/testimonials/',
		'services'     => '/designed-for-you/',
		'portfolio'    => '/portfolio/',
		'blog'         => '/wedding-journal/',
	);
	if ( isset( $pages[ $key ] ) ) {
		return esc_url( home_url( $pages[ $key ] ) );
	}
	if ( 0 === strpos( $key, 'story:' ) ) {
		return esc_url( home_url( '/portfolio/' . substr( $key, 6 ) . '/' ) );
	}
	if ( 'event' === $key ) {
		$key = 'private-villa';
	}
	$services = btw_services();
	if ( isset( $services[ $key ] ) ) {
		return esc_url( home_url( '/' . $services[ $key ]['slug'] . '/' ) );
	}
	$packages = btw_packages();
	if ( isset( $packages[ $key ] ) ) {
		return esc_url( home_url( '/packages/' . $packages[ $key ]['slug'] . '/' ) );
	}
	return esc_url( home_url( '/' ) );
}

/** <option>s for every package <select>, grouped by service. */
function btw_package_options( $selected = '' ) {
	$packages = btw_packages();
	foreach ( btw_services() as $service ) {
		echo '<optgroup label="' . esc_attr( $service['title'] ) . '">';
		foreach ( $service['packages'] as $id ) {
			$title = btw_package_title( $packages[ $id ] );
			printf(
				'<option value="%1$s"%2$s>%3$s (%4$s)</option>',
				esc_attr( $title ),
				selected( $selected, $title, false ),
				esc_html( $title ),
				esc_html( $packages[ $id ]['priceIDR'] )
			);
		}
		echo '</optgroup>';
	}
	echo '<option value="Custom / Undecided"' . selected( $selected, '', false ) . '>Custom / Undecided (Need Recommendation)</option>';
}

/** Allows the <strong> markup used in the package texts. */
function btw_kses( $html ) {
	return wp_kses( $html, array( 'strong' => array(), 'em' => array(), 'br' => array(), 'a' => array( 'href' => array(), 'class' => array() ) ) );
}

function btw_youtube_id( $url ) {
	return preg_match( '~(?:v=|youtu\.be/|embed/|shorts/)([\w-]{11})~', (string) $url, $m ) ? $m[1] : null;
}

/** Which menu item is active on the current page. */
function btw_current_nav() {
	global $btw_package, $btw_story, $btw_service;
	if ( is_front_page() ) {
		return 'home';
	}
	if ( $btw_package ) {
		return $btw_package['service'];
	}
	if ( $btw_service ) {
		return $btw_service['key'];
	}
	if ( $btw_story ) {
		return 'portfolio';
	}
	if ( is_home() || is_singular( 'post' ) || is_category() || is_tag() || is_author() || is_date() ) {
		return 'blog';
	}
	if ( is_page() ) {
		$slug = get_post_field( 'post_name', get_queried_object_id() );
		$map  = array(
			'designed-for-you' => 'elopement',
			'portfolio'        => 'portfolio',
			'about'            => 'about',
			'faq'              => 'faq',
			'contact'          => 'contact',
			'testimonials'     => 'testimonials',
		);
		return $map[ $slug ] ?? '';
	}
	return '';
}

/** " active" when $key is the current menu item (or one of $keys). */
function btw_active( $keys ) {
	return in_array( btw_current_nav(), (array) $keys, true ) ? ' active' : '';
}
