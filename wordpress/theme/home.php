<?php
/**
 * Wedding Journal (posts page). Sticky posts are the pinned articles at the top.
 */

$paged   = max( 1, get_query_var( 'paged' ) );
$sticky  = get_option( 'sticky_posts' );
$pinned  = ( 1 === $paged && $sticky ) ? new WP_Query(
	array(
		'post__in'            => array_slice( $sticky, 0, 3 ),
		'posts_per_page'      => 3,
		'ignore_sticky_posts' => true,
	)
) : null;

get_header();
?>
<header class="hero-inner" style="background-image: linear-gradient(180deg, rgba(20, 16, 14, 0.48) 0%, rgba(20, 16, 14, 0.78) 100%), url('<?php echo btw_asset( 'assets/images/blog/blog-spots.webp' ); ?>'); background-position: center 25%;">
  <div class="hero-content">
    <h1>Wedding Journal</h1>
    <p class="hero-subtitle">
      Indispensable planning wisdom, legal guidance for international couples, and wedding trends from the Bali Top Wedding team.
    </p>
  </div>
</header>

<main class="section">
  <div class="container">

    <?php if ( $pinned && $pinned->have_posts() ) : ?>
      <div class="pinned-banner">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>
        <span>Essential Pinned Reading for Overseas Couples</span>
      </div>

      <div class="pinned-grid">
        <?php
        while ( $pinned->have_posts() ) :
          $pinned->the_post();
          get_template_part( 'parts/journal-card', null, array( 'pinned' => true ) );
        endwhile;
        wp_reset_postdata();
        ?>
      </div>

      <div class="luxury-separator">
        <svg width="240" height="24" viewBox="0 0 240 24" fill="none"><path d="M0 12H90M150 12H240" stroke="#C4B09A" stroke-width="0.75"/><path d="M120 4L128 12L120 20L112 12L120 4Z" fill="#C4B09A"/><circle cx="106" cy="12" r="2.5" fill="#C4B09A"/><circle cx="134" cy="12" r="2.5" fill="#C4B09A"/></svg>
      </div>
    <?php endif; ?>

    <?php if ( have_posts() ) : ?>
      <div style="margin-bottom: 30px;">
        <span class="section-label">More Articles</span>
        <h2 style="font-style: italic;">Planning Tips &amp; Insights</h2>
      </div>

      <div class="journal-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <?php
        while ( have_posts() ) :
          the_post();
          get_template_part( 'parts/journal-card' );
        endwhile;
        ?>
      </div>

      <div class="journal-pagination">
        <?php echo paginate_links( array( 'prev_text' => '←', 'next_text' => '→' ) ); ?>
      </div>
    <?php elseif ( ! $pinned || ! $pinned->have_posts() ) : ?>
      <p style="text-align: center;">New articles are on their way.</p>
    <?php endif; ?>

  </div>
</main>

<?php get_footer(); ?>
