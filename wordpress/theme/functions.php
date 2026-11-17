<?php
/**
 * Bali Elopement Service theme.
 *
 * Phase 1: package, portfolio and contact data come from data/*.json,
 * which wordpress/build.py exports from js/script.js of the static site.
 */

define( 'BTW_VERSION', '1.0.0' );
define( 'BTW_DIR', get_template_directory() );
define( 'BTW_URI', get_template_directory_uri() );

require BTW_DIR . '/inc/data.php';
require BTW_DIR . '/inc/routes.php';
require BTW_DIR . '/inc/seo.php';
require BTW_DIR . '/inc/setup.php';
require BTW_DIR . '/inc/seed.php';
