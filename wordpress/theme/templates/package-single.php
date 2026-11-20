<?php
/**
 * One package: /packages/<venue>/ (static: package-detail.html?pkg=<package id>).
 */

global $btw_package;
$pkg      = $btw_package;
$services = btw_services();
$service  = $services[ $pkg['service'] ];
$title    = btw_package_title( $pkg );
$notes    = $pkg['notes'] ?? array();
$paras    = ! empty( $pkg['description'] ) ? $pkg['description'] : array( $pkg['summary'] );

get_header();
get_template_part( 'parts/package-styles' );
get_template_part(
	'parts/package-nav',
	null,
	array(
		'photo'           => $pkg['photos'][0],
		'position'        => $pkg['heroPosition'] ?? '',
		'current_service' => $pkg['service'],
		'crumbs'          => array(
			array( $service['title'], btw_url( $service['key'] ) ),
			array( $title, null ),
		),
	)
);
?>
    <div id="package-detail-view">

      <a href="<?php echo btw_url( $service['key'] ); ?>" class="pkg-back-link" id="pkg-back-link">&larr; <?php echo esc_html( $service['backLabel'] ); ?></a>

      <div class="package-wrapper">

        <div class="package-header-bar">
          <div class="package-header-left">
            <span class="section-label" id="pkg-badge" style="display: block; margin-bottom: 8px;"><?php echo esc_html( $pkg['label'] ); ?></span>
            <h1 style="font-style: italic; margin-bottom: 16px; font-size: clamp(30px, 4vw, 48px);" id="pkg-title"><?php echo esc_html( $pkg['name'] ); ?></h1>
            <div id="pkg-description" style="font-size: 16px; line-height: 1.7; margin-bottom: 0;">
              <?php foreach ( $paras as $para ) : ?>
                <p style="margin-bottom: 14px; font-size: 15.5px; line-height: 1.75; color: var(--dark);"><?php echo btw_kses( $para ); ?></p>
              <?php endforeach; ?>
            </div>
            <div class="package-price-block">
              <span class="pricing-label">Official Rate</span>
              <div class="package-price-tag" id="pkg-price-idr"><?php echo esc_html( $pkg['priceIDR'] ); ?></div>
              <?php if ( ! empty( $pkg['priceNote'] ) ) : ?>
                <div class="package-price-sub" id="pkg-price-foreign"><?php echo esc_html( $pkg['priceNote'] ); ?></div>
              <?php endif; ?>
            </div>
          </div>

          <div class="pkg-slider" id="pkg-slider">
            <div class="pkg-slider-track">
              <?php foreach ( $pkg['photos'] as $i => $photo ) : ?>
                <div class="pkg-slide" data-lightbox-src="<?php echo btw_asset( $photo ); ?>">
                  <img src="<?php echo btw_asset( $photo ); ?>" alt="<?php echo esc_attr( $title . ' photo ' . ( $i + 1 ) ); ?>"<?php echo $i ? ' loading="lazy"' : ''; ?>>
                </div>
              <?php endforeach; ?>
            </div>
            <?php if ( count( $pkg['photos'] ) > 1 ) : ?>
              <button type="button" class="pkg-slider-btn pkg-slider-prev" aria-label="Previous photo">&#8249;</button>
              <button type="button" class="pkg-slider-btn pkg-slider-next" aria-label="Next photo">&#8250;</button>
              <div class="pkg-slider-dots">
                <?php foreach ( $pkg['photos'] as $i => $photo ) : ?>
                  <button type="button" class="pkg-slider-dot<?php echo 0 === $i ? ' is-active' : ''; ?>" aria-label="Show photo <?php echo (int) $i + 1; ?>"></button>
                <?php endforeach; ?>
              </div>
            <?php endif; ?>
          </div>
        </div>

        <div class="package-content-grid">

          <div class="package-details-col">
            <h2 style="margin-bottom: 16px; font-size: clamp(22px, 2.5vw, 32px);">What's In The Package</h2>
            <p style="font-size: 14.5px; margin-bottom: 20px;">
              Every detail is pre-arranged and personally overseen by Bali Top Wedding’s senior coordinator so you can focus entirely on each other.
            </p>

            <ul class="inclusions-list" id="pkg-inclusions">
              <?php foreach ( $pkg['inclusions'] as $inclusion ) : ?>
                <li class="inclusion-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span><?php echo btw_kses( $inclusion ); ?></span></li>
              <?php endforeach; ?>
            </ul>

            <?php if ( $notes ) : ?>
              <div id="pkg-notes-block">
                <h2 style="margin-bottom: 16px; font-size: clamp(22px, 2.5vw, 32px);">Good to Know</h2>
                <ul class="pkg-notes" id="pkg-notes">
                  <?php foreach ( $notes as $note ) : ?>
                    <li><?php echo btw_kses( $note ); ?></li>
                  <?php endforeach; ?>
                </ul>
              </div>
            <?php endif; ?>
          </div>

          <div class="package-form-col">
            <div class="inquiry-card">
              <div class="inquiry-card-header">
                <span class="section-label" style="margin-bottom: 4px;">Direct Booking Desk</span>
                <h3 class="inquiry-card-title">Reserve or Inquire</h3>
                <p class="inquiry-card-sub">
                  Lock your preferred date or request a tailored PDF proposal sent to your email.
                </p>
              </div>

              <form class="inquiry-form" onsubmit="return false;">

                <div class="form-group">
                  <label class="form-label" for="inquiry-name">Your Full Name *</label>
                  <input type="text" id="inquiry-name" name="name" class="form-control" placeholder="e.g., Sarah &amp; David" required>
                </div>

                <div class="form-group">
                  <label class="form-label" for="inquiry-email">Email Address *</label>
                  <input type="email" id="inquiry-email" name="email" class="form-control" placeholder="e.g., name@domain.com" required>
                </div>

                <div class="form-group">
                  <label class="form-label" for="inquiry-target-month">Target Month / Date *</label>
                  <input type="text" id="inquiry-target-month" name="target_month" class="form-control" placeholder="e.g., October 2026 or Spring 2027" required>
                </div>

                <div class="form-group">
                  <label class="form-label" for="inquiry-package">Selected Package</label>
                  <select id="inquiry-package" name="package" class="form-control">
                    <?php btw_package_options( $title ); ?>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="inquiry-message">Special Request / Message</label>
                  <textarea id="inquiry-message" name="message" class="form-control" placeholder="Share your love story, preferred vibe, guest count, or any questions for our planner..."></textarea>
                </div>

                <div class="form-dual-actions">
                  <button type="button" class="btn btn-email-contrast btn-submit-email">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    Send Inquiry via Email
                  </button>
                  <button type="button" class="btn btn-whatsapp btn-submit-wa">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    Submit via WhatsApp
                  </button>
                </div>

                <p class="form-note">
                  🔒 No obligation. We will respond within 24 hours with complete availability, vendor options, and contract details.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</main>

<?php get_footer(); ?>
