<?php
/**
 * Page not found.
 */

get_header();
?>
<header class="hero-inner" style="background-image: linear-gradient(180deg, rgba(20, 16, 14, 0.48) 0%, rgba(20, 16, 14, 0.78) 100%), url('<?php echo btw_asset( 'assets/images/hero/hero-main.webp' ); ?>'); background-position: center 32%;">
  <div class="hero-content">
    <h1>Page Not Found</h1>
    <p class="hero-subtitle">The page you are looking for has moved or no longer exists.</p>
  </div>
</header>

<main class="section">
  <div class="container" style="text-align: center;">
    <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
      <a href="<?php echo btw_url( 'home' ); ?>" class="btn btn-primary">Back to Home</a>
      <a href="<?php echo btw_url( 'elopement' ); ?>" class="btn btn-outline">See Elopement Packages</a>
    </div>
  </div>
</main>

<?php get_footer(); ?>
