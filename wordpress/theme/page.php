<?php
/**
 * Any other page made in wp-admin (e.g. Privacy Policy). Shows the editor content.
 */

get_header();
while ( have_posts() ) :
	the_post();
	?>
<header class="hero-inner" style="background-image: linear-gradient(180deg, rgba(20, 16, 14, 0.48) 0%, rgba(20, 16, 14, 0.78) 100%), url('<?php echo has_post_thumbnail() ? esc_url( get_the_post_thumbnail_url( null, 'full' ) ) : btw_asset( 'assets/images/hero/hero-main.webp' ); ?>'); background-position: center 32%;">
  <div class="hero-content">
    <h1><?php the_title(); ?></h1>
  </div>
</header>

<main class="section">
  <div class="container" style="max-width: 860px;">
    <div class="entry-content">
      <?php the_content(); ?>
    </div>
  </div>
</main>
	<?php
endwhile;
get_footer();
