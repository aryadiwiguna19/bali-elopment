<?php
/**
 * One portfolio story: /portfolio/<story>/ (static: portfolio-detail.html?story=<id>).
 */

global $btw_story;
$story   = $btw_story;
$stories = btw_stories();
$photos  = $story['photos'] ?? array();
$hero    = ! empty( $story['heroImage'] ) ? $story['heroImage'] : ( $photos[0] ?? '' );
$review  = ! empty( $story['reviewBg'] ) ? $story['reviewBg'] : $hero;
$video   = btw_youtube_id( $story['videoUrl'] ?? '' );
$config  = btw_config();

$inquire_url = btw_url( 'contact' ) . '?package=' . rawurlencode( $story['packageId'] ) . '&amp;ref=' . rawurlencode( $story['name'] );
$wa_text     = 'Hello Bali Elopement Service! I was moved by the celebration story of ' . $story['name'] . ' and would like to inquire about planning a celebration like this.';
$wa_url      = 'https://wa.me/' . $config['whatsapp']['number'] . '?text=' . rawurlencode( $wa_text );

// Related: same service first, else any other story.
$same    = array_filter( $stories, fn( $s ) => $s['id'] !== $story['id'] && $s['packageId'] === $story['packageId'] );
$related = array_slice( count( $same ) >= 3 ? $same : array_filter( $stories, fn( $s ) => $s['id'] !== $story['id'] ), 0, 3 );

get_header();
?>
<header class="inner-hero" id="story-hero" style="background-image: url('<?php echo btw_asset( $hero ); ?>');"></header>

<div class="luxury-separator">
  <svg width="240" height="24" viewBox="0 0 240 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12H90M150 12H240" stroke="#C4B09A" stroke-width="0.75" />
    <path d="M120 4L128 12L120 20L112 12L120 4Z" fill="#C4B09A" />
    <circle cx="106" cy="12" r="2.5" fill="#C4B09A" />
    <circle cx="134" cy="12" r="2.5" fill="#C4B09A" />
    <circle cx="98" cy="12" r="1.5" fill="#C4B09A" />
    <circle cx="142" cy="12" r="1.5" fill="#C4B09A" />
  </svg>
</div>

<section class="section" style="padding-top: 10px; padding-bottom: 70px;" id="portfolio-detail-container">
  <div class="container" style="max-width: 1200px;">

    <a href="<?php echo btw_url( 'portfolio' ); ?>" class="back-link">← Back to Portfolio</a>

    <div class="client-detail-header">
      <h1 id="client-name"><?php echo esc_html( $story['name'] ); ?></h1>
      <span class="portfolio-meta" id="client-meta"><?php echo esc_html( $story['meta'] ); ?></span>
      <p id="client-description" class="client-description"><?php echo esc_html( $story['description'] ); ?></p>
    </div>

    <!-- main.js arranges these into two columns on desktop -->
    <div class="gallery-single-column" id="galleryContainer">
      <?php foreach ( $photos as $i => $photo ) : ?>
        <div class="gallery-masonry-item" data-index="<?php echo (int) $i; ?>">
          <img src="<?php echo btw_asset( $photo ); ?>" alt="<?php echo esc_attr( $story['name'] . ' Celebration Photo ' . ( $i + 1 ) ); ?>" loading="lazy">
        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>

<section class="review-section" id="reviewSection" style="background-image: linear-gradient(rgba(68, 97, 108, 0.88), rgba(90, 122, 133, 0.90)), url('<?php echo btw_asset( $review ); ?>');">
  <div class="container" style="max-width: 1040px; position: relative; z-index: 2;">
    <?php ob_start(); ?>
      <div class="review-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <span><?php echo ! empty( $story['quote'] ) ? 'Couple Reflections' : 'Plan Your Celebration'; ?></span>
      </div>
      <?php if ( ! empty( $story['quote'] ) ) : ?>
        <div class="stars-container">★★★★★</div>
        <p class="review-quote-text">"<?php echo esc_html( $story['quote'] ); ?>"</p>
        <div class="review-author">— <?php echo esc_html( $story['quoteAuthor'] ); ?></div>
      <?php else : ?>
        <p class="review-quote-text">Inspired by <?php echo esc_html( $story['name'] ); ?>? Let's plan yours.</p>
      <?php endif; ?>
      <div class="review-cta-group">
        <a href="<?php echo $inquire_url; ?>" class="btn btn-primary" style="background-color: var(--ivory); color: var(--sage-dark); border-color: var(--ivory);">Plan a Celebration Like This</a>
        <a href="<?php echo esc_url( $wa_url ); ?>" class="btn btn-whatsapp" target="_blank" rel="noopener">Chat with Planner on WhatsApp</a>
      </div>
    <?php $review_text = ob_get_clean(); ?>

    <?php if ( $video ) : ?>
      <div id="reviewContentContainer" class="review-layout-split">
        <div class="review-text-block"><?php echo $review_text; ?></div>
        <div class="review-video-block">
          <div class="review-video-container">
            <iframe src="https://www.youtube-nocookie.com/embed/<?php echo esc_attr( $video ); ?>?rel=0" title="<?php echo esc_attr( $story['name'] ); ?> film" allow="encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
          </div>
        </div>
      </div>
    <?php else : ?>
      <div id="reviewContentContainer" class="review-content-container"><?php echo $review_text; ?></div>
    <?php endif; ?>
  </div>
</section>

<section class="related-stories-section">
  <div class="container">
    <div style="text-align: center; max-width: 600px; margin: 0 auto 10px;">
      <span class="section-label">More Inspiration</span>
      <h2 style="font-size: 32px; font-style: italic;">Explore More Celebrations</h2>
    </div>

    <div class="related-stories-grid" id="related-stories-container">
      <?php foreach ( $related as $s ) : ?>
        <article class="related-story-card">
          <a href="<?php echo btw_url( 'story:' . $s['id'] ); ?>" class="related-story-link">
            <div class="related-story-thumb">
              <img src="<?php echo btw_asset( $s['heroImage'] ); ?>" alt="<?php echo esc_attr( $s['name'] ); ?>" loading="lazy">
              <span class="related-story-badge"><?php echo esc_html( $s['packageTitle'] ); ?></span>
            </div>
            <div class="related-story-body">
              <h4 class="related-story-title"><?php echo esc_html( $s['name'] ); ?></h4>
              <p class="related-story-location">📍 <?php echo esc_html( $s['meta'] ); ?></p>
              <span class="related-story-cta">View Story &amp; Gallery →</span>
            </div>
          </a>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<div id="lightboxModal" class="lightbox-modal">
  <div class="lightbox-content-wrapper">
    <button class="lightbox-close" id="lightboxClose" aria-label="Close Lightbox">&times;</button>
    <button class="lightbox-nav lightbox-prev" id="lightboxPrev" aria-label="Previous Photo">&#8249;</button>
    <img class="lightbox-img" id="lightboxImg" src="" alt="Full view wedding photo">
    <button class="lightbox-nav lightbox-next" id="lightboxNext" aria-label="Next Photo">&#8250;</button>
  </div>
</div>

<?php get_footer(); ?>
