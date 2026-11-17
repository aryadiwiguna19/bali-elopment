<?php
/**
 * Service overview: /elopement/, /villa-wedding/, /pre-wedding/.
 * Lists every package of the service (static: package-detail.html?pkg=<service>).
 */

global $btw_service;
$service  = $btw_service;
$packages = btw_packages();

get_header();
get_template_part( 'parts/package-styles' );
get_template_part(
	'parts/package-nav',
	null,
	array(
		'photos'          => array( $service['heroImage'] ),
		'position'        => $service['heroPosition'] ?? '',
		'current_service' => $service['key'],
		'crumbs'          => array( array( $service['title'], null ) ),
	)
);
?>
    <div id="package-summary-view">
      <div class="section-header" style="text-align: center; margin-bottom: 40px;">
        <h1 id="summary-title" style="font-family: var(--font-serif); font-size: clamp(26px, 3vw, 36px); margin-bottom: 12px; font-style: italic;"><?php echo esc_html( $service['title'] ); ?></h1>
        <div class="divider-gold" style="margin: 0 auto 16px;"></div>
        <p id="summary-intro" style="font-size: 15.5px; color: var(--muted); max-width: 720px; margin: 0 auto;"><?php echo esc_html( $service['intro'] ); ?></p>
      </div>

      <div class="elopement-summary-grid" id="summary-grid">
        <?php
        foreach ( $service['packages'] as $id ) :
          $pkg = $packages[ $id ];
          ?>
          <a href="<?php echo btw_url( $pkg['id'] ); ?>" class="service-card elopement-summary-card">
            <div class="service-card-image">
              <img src="<?php echo btw_asset( $pkg['photos'][0] ); ?>" alt="<?php echo esc_attr( btw_package_title( $pkg ) ); ?>" loading="lazy">
            </div>
            <div class="service-card-body">
              <span class="service-card-category"><?php echo esc_html( $pkg['label'] ); ?></span>
              <h2 class="elopement-card-tagline"><?php echo esc_html( $pkg['name'] ); ?></h2>
              <p class="service-card-desc"><?php echo esc_html( $pkg['summary'] ); ?></p>
              <div class="elopement-card-footer">
                <div class="elopement-card-price"><?php echo esc_html( $pkg['priceIDR'] ); ?></div>
                <span class="elopement-card-link">View details &rarr;</span>
              </div>
            </div>
          </a>
        <?php endforeach; ?>
      </div>

      <div class="elopement-summary-cta">
        <p style="font-family: var(--font-serif); font-size: 21px; color: var(--dark); margin-bottom: 16px; font-style: italic;">
          Not sure which package suits you? Ask our planner
        </p>
        <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
          <a href="<?php echo btw_url( 'contact' ); ?>" class="btn btn-primary" style="padding: 10px 24px; font-size: 11px;">Send Inquiry</a>
          <a href="#" data-wa class="btn btn-whatsapp" style="padding: 10px 24px; font-size: 11px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>

  </div>
</main>

<?php get_footer(); ?>
