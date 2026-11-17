<?php
/**
 * One-time setup when the theme is activated:
 * creates the pages the templates need, sets the front page and the journal page,
 * switches permalinks to /%postname%/ when they are still "Plain", and adds the
 * five Wedding Journal articles from the static site. Existing pages are left alone.
 */

function btw_required_pages() {
	return array(
		'home'             => 'Home',
		'about'            => 'About Us',
		'contact'          => 'Contact',
		'faq'              => 'FAQ',
		'testimonials'     => 'Testimonials',
		'designed-for-you' => 'Designed For You',
		'portfolio'        => 'Portfolio',
		'wedding-journal'  => 'Wedding Journal',
		'elopement'        => 'Bali Elopement Packages',
		'villa-wedding'    => 'Bali Villa Wedding',
		'pre-wedding'      => 'Bali Pre-Wedding Photography',
		'packages'         => 'Packages',
	);
}

function btw_seed() {
	$report = array();

	// 1. Pages
	$ids = array();
	foreach ( btw_required_pages() as $slug => $title ) {
		$page = get_page_by_path( $slug );
		if ( $page ) {
			$ids[ $slug ] = $page->ID;
			if ( 'publish' !== $page->post_status ) {
				wp_update_post( array( 'ID' => $page->ID, 'post_status' => 'publish' ) );
				$report[] = "Published existing page /$slug/";
			}
			continue;
		}
		$id = wp_insert_post(
			array(
				'post_type'   => 'page',
				'post_status' => 'publish',
				'post_title'  => $title,
				'post_name'   => $slug,
			)
		);
		if ( is_wp_error( $id ) ) {
			$report[] = "Could not create page /$slug/: " . $id->get_error_message();
			continue;
		}
		$ids[ $slug ] = $id;
		$actual       = get_post_field( 'post_name', $id );
		$report[]     = $actual === $slug
			? "Created page /$slug/"
			: "WARNING: page /$slug/ got the slug /$actual/ because something else uses /$slug/. Rename that item, then set this page's slug to $slug.";
	}

	// 2. Front page and journal page
	if ( isset( $ids['home'], $ids['wedding-journal'] ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $ids['home'] );
		update_option( 'page_for_posts', $ids['wedding-journal'] );
		$report[] = 'Front page: Home. Posts page: Wedding Journal';
	}

	// 3. Pretty permalinks (the package and portfolio URLs need them)
	if ( '' === get_option( 'permalink_structure' ) ) {
		update_option( 'permalink_structure', '/%postname%/' );
		$report[] = 'Permalinks set to Post name';
	}

	// 4. Journal articles (once)
	if ( ! get_option( 'btw_seeded_posts' ) ) {
		$report = array_merge( $report, btw_seed_posts() );
		update_option( 'btw_seeded_posts', 1 );
	}

	btw_register_rewrites();
	flush_rewrite_rules();

	set_transient( 'btw_seed_report', $report, HOUR_IN_SECONDS );
}
add_action( 'after_switch_theme', 'btw_seed' );

add_action(
	'admin_notices',
	function () {
		$report = get_transient( 'btw_seed_report' );
		if ( ! $report ) {
			return;
		}
		delete_transient( 'btw_seed_report' );
		echo '<div class="notice notice-success is-dismissible"><p><strong>Bali Elopement theme setup</strong></p><ul style="list-style:disc;padding-left:20px">';
		foreach ( $report as $line ) {
			echo '<li>' . esc_html( $line ) . '</li>';
		}
		echo '</ul></div>';
	}
);

function btw_seed_posts() {
	$posts  = require BTW_DIR . '/inc/seed-posts.php';
	$report = array();
	$minute = 0;
	foreach ( $posts as $slug => $post ) {
		$minute++;
		if ( get_page_by_path( $slug, OBJECT, 'post' ) ) {
			continue;
		}
		$category = term_exists( $post['category'], 'category' );
		if ( ! $category ) {
			$category = wp_insert_term( $post['category'], 'category' );
		}
		$id = wp_insert_post(
			array(
				'post_type'     => 'post',
				'post_status'   => 'publish',
				'post_title'    => $post['title'],
				'post_name'     => $slug,
				'post_date'     => wp_date( 'Y-m-d H:i:s', time() - $minute * MINUTE_IN_SECONDS ),
				'post_excerpt'  => $post['excerpt'],
				'post_content'  => $post['content'],
				'post_category' => is_wp_error( $category ) ? array() : array( (int) $category['term_id'] ),
			)
		);
		if ( is_wp_error( $id ) ) {
			continue;
		}
		update_post_meta( $id, '_btw_thumb', $post['thumb'] );
		update_post_meta( $id, '_btw_read_time', $post['read_time'] );
		if ( ! empty( $post['pinned'] ) ) {
			update_post_meta( $id, '_btw_pinned_label', $post['pinned'] );
			stick_post( $id );
		}
		$report[] = 'Added journal article: ' . $post['title'];
	}
	return $report;
}
