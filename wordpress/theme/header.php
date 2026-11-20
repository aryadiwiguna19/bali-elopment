<?php
/**
 * Site header: sticky navigation (Home · Elopement · More) and the mobile drawer.
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- ── STICKY MAIN NAVIGATION (MINIMAL LUXURY HEADER) ── -->
<nav class="navbar" aria-label="Main Navigation">
  <div class="container navbar-container">
    
    <!-- Brand Identity Block with Clickable Parent Heritage -->
    <div class="brand-block">
      <a href="<?php echo btw_url('home'); ?>" class="brand-logo">
        <span class="brand-title">Bali Elopement Service</span>
      </a>
      <div class="brand-subline">
        Powered by <a href="https://www.balitopwedding.com" target="_blank" rel="noopener">Bali Top Wedding</a>
      </div>
    </div>

    <!-- Direct Desktop Service Links -->
    <ul class="nav-links">
      <li><a href="<?php echo btw_url('home'); ?>" class="nav-link<?php echo btw_active('home'); ?>">Home</a></li>
      <li><a href="<?php echo btw_url('elopement'); ?>" class="nav-link<?php echo btw_active('elopement'); ?>">Elopement</a></li>
      <li><a href="<?php echo btw_url('private-villa'); ?>" class="nav-link<?php echo btw_active('private-villa'); ?>">Villa Wedding</a></li>
      <li><a href="<?php echo btw_url('pre-wedding'); ?>" class="nav-link<?php echo btw_active('pre-wedding'); ?>">Pre-Wedding</a></li>
      <li class="nav-dropdown">
        <button type="button" class="nav-link<?php echo btw_active(array('about', 'portfolio', 'blog', 'faq')); ?>" aria-haspopup="true">
          More
          <svg class="dropdown-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <div class="dropdown-menu">
          <a href="<?php echo btw_url('about'); ?>" class="dropdown-item">About Us</a>
          <a href="<?php echo btw_url('portfolio'); ?>" class="dropdown-item">Portfolio</a>
          <a href="<?php echo btw_url('blog'); ?>" class="dropdown-item">Wedding Journal</a>
          <a href="<?php echo btw_url('faq'); ?>" class="dropdown-item">FAQ</a>
        </div>
      </li>
    </ul>

    <!-- Quick Action Booking Button -->
    <div class="navbar-actions">
      <a href="<?php echo btw_url('contact'); ?>" class="btn-nav-inquire">Inquire Now</a>
    </div>

    <!-- Mobile Hamburger Toggle -->
    <button class="hamburger" aria-label="Open mobile navigation menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>

<!-- Mobile Menu Drawer -->
<div class="mobile-drawer-overlay"></div>
<aside class="mobile-drawer" aria-label="Mobile Navigation Drawer">
  <div class="mobile-drawer-top">
    <!-- Drawer Header with Brand & Close Button -->
    <div class="mobile-drawer-header">
      <div class="mobile-drawer-brand-block">
        <span class="mobile-drawer-title">Bali Elopement</span>
        <span class="mobile-powered">Powered by <a href="https://www.balitopwedding.com" target="_blank" rel="noopener">Bali Top Wedding</a></span>
      </div>
      <button class="mobile-drawer-close" aria-label="Close navigation menu">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Primary Navigation List -->
    <ul class="mobile-nav-list">
      <li><a href="<?php echo btw_url('home'); ?>" class="mobile-nav-link<?php echo btw_active('home'); ?>">Home</a></li>
      <li><a href="<?php echo btw_url('elopement'); ?>" class="mobile-nav-link<?php echo btw_active('elopement'); ?>">Bali Elopement Packages</a></li>
      <li><a href="<?php echo btw_url('private-villa'); ?>" class="mobile-nav-link<?php echo btw_active('private-villa'); ?>">Villa Weddings</a></li>
      <li><a href="<?php echo btw_url('pre-wedding'); ?>" class="mobile-nav-link<?php echo btw_active('pre-wedding'); ?>">Pre Wedding Photography</a></li>
    </ul>

    <!-- Secondary Discovery Links -->
    <div class="mobile-nav-divider"></div>
    <span class="mobile-nav-label">Discover</span>
    <ul class="mobile-nav-secondary">
      <li><a href="<?php echo btw_url('about'); ?>" class="mobile-secondary-link">About Us</a></li>
      <li><a href="<?php echo btw_url('portfolio'); ?>" class="mobile-secondary-link">Portfolio</a></li>
      <li><a href="<?php echo btw_url('blog'); ?>" class="mobile-secondary-link">Wedding Journal</a></li>
      <li><a href="<?php echo btw_url('faq'); ?>" class="mobile-secondary-link">FAQ</a></li>
      <li><a href="<?php echo btw_url('contact'); ?>" class="mobile-secondary-link">Direct Inquiries Desk</a></li>
    </ul>
  </div>
  
  <div class="mobile-drawer-footer">
    <div class="form-dual-actions">
      <a href="#" data-email class="btn btn-email-contrast">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
        Email Us
      </a>
      <a href="#" data-wa class="btn btn-whatsapp">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        WhatsApp
      </a>
    </div>
  </div>
</aside>
