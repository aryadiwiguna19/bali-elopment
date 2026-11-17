<?php
/**
 * Journal article card (static: .pinned-card in blog.html). $args['pinned'] shows the pinned tag.
 */

$categories = get_the_category();
$pinned     = ! empty( $args['pinned'] ) ? get_post_meta( get_the_ID(), '_btw_pinned_label', true ) : '';
?>
<article class="pinned-card">
  <?php if ( ! empty( $args['pinned'] ) ) : ?>
    <span class="pinned-tag"><?php echo esc_html( $pinned ? $pinned : 'Pinned • Essential Reading' ); ?></span>
  <?php endif; ?>
  <a href="<?php the_permalink(); ?>" class="article-thumb">
    <img src="<?php echo btw_post_image(); ?>" alt="<?php the_title_attribute(); ?>" loading="lazy">
  </a>
  <div class="article-body">
    <div class="article-meta">
      <?php if ( $categories ) : ?>
        <span><?php echo esc_html( $categories[0]->name ); ?></span>
        <span>•</span>
      <?php endif; ?>
      <span><?php echo esc_html( btw_read_time() ); ?></span>
    </div>
    <h3 class="article-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
    <p class="article-excerpt"><?php echo esc_html( get_the_excerpt() ); ?></p>
    <a href="<?php the_permalink(); ?>" class="article-link"><?php echo ! empty( $args['pinned'] ) ? 'Read Full Guide →' : 'Read Article →'; ?></a>
  </div>
</article>
