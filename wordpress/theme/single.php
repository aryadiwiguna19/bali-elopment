<?php
/**
 * One Wedding Journal article.
 */

get_header();
while ( have_posts() ) :
	the_post();
	$categories = get_the_category();
	?>
<header class="hero-inner" style="background-image: linear-gradient(180deg, rgba(20, 16, 14, 0.48) 0%, rgba(20, 16, 14, 0.78) 100%), url('<?php echo btw_post_image( null, 'full' ); ?>'); background-position: center 35%;">
  <div class="hero-content">
    <span class="section-label" style="color: #FFFFFF;">
      <?php echo esc_html( $categories ? $categories[0]->name . ' • ' : '' ); ?><?php echo esc_html( btw_read_time() ); ?>
    </span>
    <h1><?php the_title(); ?></h1>
  </div>
</header>

<main class="section">
  <div class="container" style="max-width: 760px;">
    <a href="<?php echo btw_url( 'blog' ); ?>" class="back-link">← Back to Wedding Journal</a>
    <article class="entry-content">
      <?php the_content(); ?>
    </article>

    <div style="margin-top: 48px; border-top: 1px solid var(--border-subtle); padding-top: 32px; text-align: center;">
      <p style="font-family: var(--font-serif); font-size: 21px; color: var(--dark); margin-bottom: 16px; font-style: italic;">
        Planning your Bali celebration? Ask our planner
      </p>
      <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
        <a href="<?php echo btw_url( 'contact' ); ?>" class="btn btn-primary">Send Inquiry</a>
        <a href="#" data-wa class="btn btn-whatsapp">Chat on WhatsApp</a>
      </div>
    </div>
  </div>
</main>
	<?php
endwhile;
get_footer();
