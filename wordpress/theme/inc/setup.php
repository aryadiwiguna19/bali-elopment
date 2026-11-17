<?php
/**
 * Theme supports, scripts and styles.
 */

add_action(
	'after_setup_theme',
	function () {
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );
		add_theme_support( 'responsive-embeds' );
	}
);

add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_style( 'btw-style', BTW_URI . '/css/style.css', array(), BTW_VERSION );
		wp_add_inline_style( 'btw-style', btw_wp_css() );

		wp_enqueue_script( 'btw-main', BTW_URI . '/js/main.js', array(), BTW_VERSION, true );
		wp_add_inline_script( 'btw-main', 'window.BTW = ' . wp_json_encode( btw_js_data() ) . ';', 'before' );
	}
);

/** Data the front-end script needs (replaces SITE_CONFIG / PORTFOLIO_FILMS in the static script). */
function btw_js_data() {
	$config = btw_config();
	$films  = array();
	foreach ( btw_films() as $film ) {
		$id = btw_youtube_id( $film['youtubeUrl'] ?? '' );
		if ( $id ) {
			$films[] = array(
				'title'    => $film['title'],
				'category' => $film['category'] ?? '',
				'videoId'  => $id,
			);
		}
	}
	return array(
		'config' => array(
			'whatsapp'  => $config['whatsapp'],
			'email'     => $config['email'],
			'phone'     => $config['phone'],
			'socials'   => $config['socials'],
			'parentUrl' => $config['parentUrl'],
			'address'   => $config['address'],
		),
		'films'  => $films,
	);
}

/** WordPress-only CSS: admin bar offset and content typography for journal posts and plain pages. */
function btw_wp_css() {
	return '
.admin-bar .navbar { top: 32px; }
@media (max-width: 782px) { .admin-bar .navbar { top: 46px; } }
@media (max-width: 600px) { .admin-bar .navbar { top: 0; } }
.entry-content { font-size: 16px; line-height: 1.8; color: var(--dark); }
.entry-content > * + * { margin-top: 1.1em; }
.entry-content h2, .entry-content h3, .entry-content h4 { font-family: var(--font-serif); margin-top: 1.6em; }
.entry-content ul, .entry-content ol { padding-left: 1.4em; }
.entry-content li + li { margin-top: .4em; }
.entry-content img { max-width: 100%; height: auto; border-radius: 4px; }
.entry-content a { color: var(--accent-dark); text-decoration: underline; }
.article-title a { color: inherit; }
a.article-thumb { display: block; }
@media (max-width: 768px) { .journal-grid { grid-template-columns: 1fr !important; } }
.journal-pagination { display: flex; justify-content: center; gap: 8px; margin-top: 48px; }
.journal-pagination .page-numbers { padding: 8px 14px; border: 1px solid var(--border-strong); border-radius: 4px; color: var(--dark); }
.journal-pagination .page-numbers.current { background: var(--coastal); border-color: var(--coastal); color: #fff; }
';
}

// Favicon from the theme until a Site Icon is set in Appearance → Customize.
add_action(
	'wp_head',
	function () {
		if ( ! has_site_icon() ) {
			echo '<link rel="icon" type="image/png" href="' . btw_asset( 'assets/logo-btw.png' ) . '">' . "\n";
		}
	}
);

/** Journal card image: featured image, else the theme photo saved by the seeder. */
function btw_post_image( $post = null, $size = 'large' ) {
	$post = get_post( $post );
	if ( has_post_thumbnail( $post ) ) {
		return esc_url( get_the_post_thumbnail_url( $post, $size ) );
	}
	$theme_image = get_post_meta( $post->ID, '_btw_thumb', true );
	return btw_asset( $theme_image ? $theme_image : 'assets/images/blog/blog-spots.webp' );
}

/** "4 Min Read", from the seeder or estimated from the word count. */
function btw_read_time( $post = null ) {
	$post  = get_post( $post );
	$saved = get_post_meta( $post->ID, '_btw_read_time', true );
	if ( $saved ) {
		return $saved;
	}
	$words = str_word_count( wp_strip_all_tags( $post->post_content ) );
	return max( 1, (int) round( $words / 200 ) ) . ' Min Read';
}

// Journal page: pinned (sticky) posts are shown in their own grid, so leave them out of the list.
add_action(
	'pre_get_posts',
	function ( $query ) {
		if ( ! is_admin() && $query->is_main_query() && $query->is_home() ) {
			$query->set( 'ignore_sticky_posts', true );
			$query->set( 'post__not_in', array_slice( get_option( 'sticky_posts' ), 0, 3 ) );
		}
	}
);
