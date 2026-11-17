<?php
/**
 * Titles, descriptions and social images for the data-driven pages.
 * Works with Yoast SEO (filters below) and without it (core title + own meta tag).
 */

/** Page descriptions carried over from the static site. Yoast's own description wins when set. */
function btw_page_descriptions() {
	return array(
		'home'             => 'Discover soulful, stress-free intimate elopement weddings, pre-wedding photoshoot adventures, and private villa celebrations in Bali. Powered by Bali Top Wedding.',
		'about'            => "Learn about Bali Elopement, our boutique intimate celebration approach, and our backing by Bali Top Wedding's decade of luxury excellence.",
		'contact'          => 'Reach our senior wedding planners via Email or WhatsApp. Tailored intimate elopement proposals, date reservations, and personalized advice.',
		'faq'              => 'Answers to common questions about legal and symbolic ceremonies, packages, guest numbers, pre-wedding shoots, and planning your Bali wedding from abroad.',
		'testimonials'     => 'Read real reviews and love stories from international couples who eloped and celebrated intimate weddings in Bali with our team.',
		'designed-for-you' => 'Discover our 3 signature wedding offerings in Bali: Bali elopement packages, Bali villa wedding packages, and Bali pre-wedding photography.',
		'portfolio'        => 'Explore our curated love stories. Intimate elopement ceremonies, cinematic pre-wedding sessions, and luxury private villa weddings in Bali.',
		'wedding-journal'  => 'Expert guides on legal weddings in Bali for foreigners, secret elopement venues, wedding trends, and planning advice from Bali Top Wedding.',
	);
}

/**
 * SEO values for the current request, or null when WordPress/Yoast should decide.
 * Keys: title, description, url, image.
 */
function btw_seo() {
	global $btw_package, $btw_story, $btw_service;

	if ( $btw_package ) {
		return array(
			'title'       => btw_package_title( $btw_package ),
			'description' => $btw_package['summary'],
			'url'         => btw_url( $btw_package['id'] ),
			'image'       => btw_asset_url( $btw_package['photos'][0] ),
		);
	}
	if ( $btw_story ) {
		return array(
			'title'       => $btw_story['name'] . ' — ' . $btw_story['packageTitle'] . ' Story',
			'description' => $btw_story['description'],
			'url'         => btw_url( 'story:' . $btw_story['id'] ),
			'image'       => btw_asset_url( $btw_story['heroImage'] ),
		);
	}
	if ( $btw_service ) {
		return array(
			'title'       => $btw_service['title'],
			'description' => $btw_service['intro'],
			'url'         => btw_url( $btw_service['key'] ),
			'image'       => btw_asset_url( $btw_service['heroImage'] ),
		);
	}
	return null;
}

function btw_default_description() {
	if ( is_front_page() ) {
		return btw_page_descriptions()['home'];
	}
	if ( is_home() ) {
		return btw_page_descriptions()['wedding-journal'];
	}
	if ( is_page() ) {
		$slug = get_post_field( 'post_name', get_queried_object_id() );
		return btw_page_descriptions()[ $slug ] ?? '';
	}
	return '';
}

// Core title (no Yoast).
add_filter(
	'pre_get_document_title',
	function ( $title ) {
		$seo = btw_seo();
		return $seo ? $seo['title'] . ' — ' . get_bloginfo( 'name' ) : $title;
	},
	20
);

// Yoast SEO.
add_filter(
	'wpseo_title',
	function ( $title ) {
		$seo = btw_seo();
		return $seo ? $seo['title'] . ' — ' . get_bloginfo( 'name' ) : $title;
	}
);
add_filter( 'wpseo_opengraph_title', function ( $title ) {
	$seo = btw_seo();
	return $seo ? $seo['title'] : $title;
} );
add_filter( 'wpseo_metadesc', function ( $desc ) {
	$seo = btw_seo();
	if ( $seo ) {
		return $seo['description'];
	}
	return $desc ? $desc : btw_default_description();
} );
add_filter( 'wpseo_opengraph_desc', function ( $desc ) {
	$seo = btw_seo();
	if ( $seo ) {
		return $seo['description'];
	}
	return $desc ? $desc : btw_default_description();
} );
add_filter( 'wpseo_canonical', function ( $url ) {
	$seo = btw_seo();
	return $seo ? html_entity_decode( $seo['url'] ) : $url;
} );
add_filter( 'wpseo_opengraph_url', function ( $url ) {
	$seo = btw_seo();
	return $seo ? html_entity_decode( $seo['url'] ) : $url;
} );
add_action( 'wpseo_add_opengraph_images', function ( $images ) {
	$seo = btw_seo();
	if ( $seo && method_exists( $images, 'add_image_by_url' ) ) {
		$images->add_image_by_url( $seo['image'] );
	}
} );

// Without Yoast: print description, canonical and social image ourselves.
add_action(
	'wp_head',
	function () {
		if ( defined( 'WPSEO_VERSION' ) ) {
			return;
		}
		$seo  = btw_seo();
		$desc = $seo ? $seo['description'] : btw_default_description();
		if ( $desc ) {
			echo '<meta name="description" content="' . esc_attr( $desc ) . '">' . "\n";
		}
		if ( $seo ) {
			echo '<link rel="canonical" href="' . $seo['url'] . '">' . "\n";
			echo '<meta property="og:title" content="' . esc_attr( $seo['title'] ) . '">' . "\n";
			echo '<meta property="og:image" content="' . esc_url( $seo['image'] ) . '">' . "\n";
		}
	},
	1
);

// Core prints its own canonical for the helper pages "packages" / "portfolio"; ours replaces it.
add_action(
	'template_redirect',
	function () {
		if ( btw_seo() && ! defined( 'WPSEO_VERSION' ) ) {
			remove_action( 'wp_head', 'rel_canonical' );
		}
	},
	2
);

// Yoast sitemap: add the package and story URLs (they are not WordPress posts in phase 1)
// and leave out the helper page /packages/, which only redirects.
add_filter(
	'wpseo_sitemap_page_content',
	function ( $content ) {
		$urls = array();
		foreach ( btw_packages() as $pkg ) {
			$urls[] = btw_url( $pkg['id'] );
		}
		foreach ( btw_stories() as $story ) {
			$urls[] = btw_url( 'story:' . $story['id'] );
		}
		foreach ( $urls as $url ) {
			$content .= "\t<url>\n\t\t<loc>" . $url . "</loc>\n\t</url>\n";
		}
		return $content;
	}
);
add_filter(
	'wpseo_exclude_from_sitemap_by_post_ids',
	function ( $ids ) {
		$page = get_page_by_path( 'packages' );
		if ( $page ) {
			$ids[] = $page->ID;
		}
		return $ids;
	}
);
