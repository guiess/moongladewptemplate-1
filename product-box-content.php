<?php
$count_delay = $args['count_delay']/10;
$product_id = get_the_ID();

$product_form_factor = carbon_get_post_meta($product_id, 'product_form_factor');
$product_box_image_1x = carbon_get_post_meta($product_id, 'product_box_image_1x');
$product_box_image_2x = carbon_get_post_meta($product_id, 'product_box_image_2x');
$product_box_hover_image_1x = carbon_get_post_meta($product_id, 'product_box_hover_image_1x');
$product_box_hover_image_2x = carbon_get_post_meta($product_id, 'product_box_hover_image_2x');
$product_price =  carbon_get_post_meta($product_id, 'product_price');



// $product_attributes = carbon_get_post_meta($product_id, 'product_attributes');
// $product_img_src = get_the_post_thumbnail_url($product_id, 'product');


?>

<div class="swiper-slide" data-scroll="" data-scroll-call="moveLeft" data-delay="<?php echo $count_delay; ?>" data-ease="circ.out" data-movement="60" data-speed="1">
  <a class="product-simple" href="<?php echo home_url('/products', ''); ?>">
    <div class="relative mb-15 text-center">
      <div class="product-simple__image">
        <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 202 305'%3E%3C/svg%3E" width="202" height="305" data-src="<?php echo $product_box_image_1x; ?>" data-srcset="<?php echo $product_box_image_1x; ?> 1x, <?php echo $product_box_image_2x; ?> 2x" alt="image description" /></picture>
      </div>
      <div class="product-simple__hover-image">
        <picture><img class="transition-opacity duration-300" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 161 227'%3E%3C/svg%3E" width="161" height="227" data-src="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png" data-srcset="<?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover.png 1x, <?php echo get_template_directory_uri() . "/assets/"; ?>images/home/product-box01-hover@2x.png 2x" alt="image description" /></picture>
      </div>
    </div>
    <div class="product-simple__info">
      <h4 class="product-simple__title"><?php the_title(); ?></h4>
      <div class="product-simple__meta">
        <div class="product-simple__category"><?php echo $product_form_factor; ?></div>
        <div class="product-simple__price">$ <?php echo $product_price; ?></div>
      </div>
    </div>
  </a>
</div>