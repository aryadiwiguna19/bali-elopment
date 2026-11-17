<?php
/**
 * Pretty URLs for data-driven pages:
 *   /elopement/, /villa-wedding/, /pre-wedding/  -> real pages, rendered as a service overview
 *   /packages/<venue>/                            -> one package (helper page "packages")
 *   /portfolio/<story>/                           -> one portfolio story (child of page "portfolio")
 */

function btw_register_rewrites() {
	add_rewrite_rule( '^packages/([^/]+)/?$', 'index.php?pagename=packages&btw_pkg=$matches[1]', 'top' );
	add_rewrite_rule( '^portfolio/([^/]+)/?$', 'index.php?pagename=portfolio&btw_story=$matches[1]', 'top' );
}
add_action( 'init', 'btw_register_rewrites' );

add_filter(
	'query_vars',
	function ( $vars ) {
		$vars[] = 'btw_pkg';
		$vars[] = 'btw_story';
		return $vars;
	}
);

// Keep /packages/x/ and /portfolio/x/ instead of redirecting them to the parent page.
add_filter(
	'redirect_canonical',
	function ( $redirect ) {
		return ( get_query_var( 'btw_pkg' ) || get_query_var( 'btw_story' ) ) ? false : $redirect;
	}
);

/** Resolves the route into globals before any output, so 404s and redirects send proper headers. */
function btw_resolve_route() {
	global $wp_query, $btw_package, $btw_story, $btw_service;

	$pkg_slug = get_query_var( 'btw_pkg' );
	$story_id = get_query_var( 'btw_story' );

	if ( $pkg_slug ) {
		$btw_package = btw_package_by_slug( $pkg_slug );
		if ( ! $btw_package ) {
			$wp_query->set_404();
			status_header( 404 );
		}
		return;
	}

	if ( $story_id ) {
		$btw_story = btw_story( $story_id );
		if ( ! $btw_story ) {
			$wp_query->set_404();
			status_header( 404 );
		} elseif ( $btw_story['id'] !== $story_id ) {
			wp_safe_redirect( html_entity_decode( btw_url( 'story:' . $btw_story['id'] ) ), 301 );
			exit;
		}
		return;
	}

	if ( is_page() ) {
		$slug = get_post_field( 'post_name', get_queried_object_id() );
		if ( 'packages' === $slug ) {
			wp_safe_redirect( html_entity_decode( btw_url( 'services' ) ), 301 );
			exit;
		}
		$btw_service = btw_service_by_slug( $slug );
	}
}
add_action( 'template_redirect', 'btw_resolve_route', 1 );

add_filter(
	'template_include',
	function ( $template ) {
		global $btw_package, $btw_story, $btw_service;
		if ( is_404() ) {
			return $template;
		}
		if ( $btw_package ) {
			return BTW_DIR . '/templates/package-single.php';
		}
		if ( $btw_story ) {
			return BTW_DIR . '/templates/story-single.php';
		}
		if ( $btw_service ) {
			return BTW_DIR . '/templates/service-overview.php';
		}
		return $template;
	}
);
