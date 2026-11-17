<?php
/**
 * Fallback for archives and search results: a grid of journal cards.
 */

get_header();
?>
<header class="hero-inner" style="background-image: linear-gradient(180deg, rgba(20, 16, 14, 0.48) 0%, rgba(20, 16, 14, 0.78) 100%), url('<?php echo btw_asset( 'assets/images/blog/blog-spots.webp' ); ?>'); background-position: center 25%;">
  <div class="hero-content">
    <h1><?php echo esc_html( is_search() ? 'Search: ' . get_search_query() : wp_strip_all_tags( get_the_archive_title() ) ); ?></h1>
  </div>
</header>

<main class="section">
  <div class="container">
    <?php if ( have_posts() ) : ?>
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
    <?php else : ?>
      <p style="text-align: center;">Nothing found. <a href="<?php echo btw_url( 'blog' ); ?>" class="article-link">Browse the Wedding Journal</a>.</p>
    <?php endif; ?>
  </div>
</main>

<?php get_footer(); ?>
