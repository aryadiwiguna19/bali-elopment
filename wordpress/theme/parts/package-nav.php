<?php
/**
 * Package hero (one still photo), breadcrumb and service tabs.
 * Expects $args: photo, position, current_service, crumbs (array of [label, url|null]).
 */

$position = $args['position'] ? $args['position'] : 'center 45%';
?>
<header class="hero-inner" id="pkg-hero">
  <div class="pkg-hero-photo" style="background-image: url('<?php echo btw_asset( $args['photo'] ); ?>'); background-position: <?php echo esc_attr( $position ); ?>;"></div>
</header>

<main class="section" style="padding-top: 40px;" id="package-detail-container">
  <div class="container">

    <nav class="breadcrumb-nav" id="pkg-breadcrumb">
      <a href="<?php echo btw_url( 'home' ); ?>">Home</a>
      <span>/</span>
      <a href="<?php echo btw_url( 'services' ); ?>">Services</a>
      <?php foreach ( $args['crumbs'] as $crumb ) : ?>
        <span>/</span>
        <?php if ( $crumb[1] ) : ?>
          <a href="<?php echo $crumb[1]; ?>"><?php echo esc_html( $crumb[0] ); ?></a>
        <?php else : ?>
          <span style="color: var(--dark); font-weight: 500;"><?php echo esc_html( $crumb[0] ); ?></span>
        <?php endif; ?>
      <?php endforeach; ?>
    </nav>

    <div class="package-tabs" aria-label="Switch Package">
      <?php
      $tabs = array(
        'elopement'     => 'Bali Elopement Packages',
        'private-villa' => 'Villa Weddings',
        'pre-wedding'   => 'Pre Wedding Photography',
      );
      foreach ( $tabs as $key => $label ) :
        ?>
        <a href="<?php echo btw_url( $key ); ?>" class="pkg-tab-btn<?php echo $args['current_service'] === $key ? ' active' : ''; ?>" id="tab-<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $label ); ?></a>
      <?php endforeach; ?>
    </div>
