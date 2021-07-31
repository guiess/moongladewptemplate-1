<?php

if (!defined('ABSPATH')) {
  exit;
}

$count = $args['count'];
$product_id = get_the_ID();

$product_price =  carbon_get_post_meta($product_id, 'product_price');
$product_wight =  carbon_get_post_meta($product_id, 'product_wight');
$product_bw_image_2x =  carbon_get_post_meta($product_id, 'product_bw_image_2x');
$product_image_2x =  carbon_get_post_meta($product_id, 'product_image_2x');
// $product_slogan =  carbon_get_post_meta($product_id, 'product_slogan');
// $product_use =  carbon_get_post_meta($product_id, 'product_use');
// $product_contains =  carbon_get_post_meta($product_id, 'product_contains');

?>

<div class="product" data-component="product">
  <div class="product__layout">
    <div class="product__visual" data-toggle-popup="product_<?php echo $product_id; ?>">
      <div class="product__image product__image--main">
        <picture><img class="w-full max-w-full transition-opacity duration-300 w-full h-full object-cover" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E" data-srcset="<?php echo $product_image_2x; ?>" alt="image description" /></picture>
      </div>
      <div class="product__image product__image--hover">
        <picture><img class="w-full max-w-full transition-opacity duration-300 w-full h-full object-cover" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E" data-srcset="<?php echo $product_bw_image_2x; ?>" alt="image description" /></picture>
      </div>
      <div class="product__labels w-full flex flex-wrap absolute top-0 left-0 p-20">

        <?php
        $table = carbon_get_post_meta($product_id, 'product_effects');
        if (!empty($table)) : ?>
          <?php foreach ($table as $tr) : ?>

            <span class="badge mr-10 mb-10"><?php echo $tr['name']; ?></span>

          <?php endforeach; ?>
        <?php endif; ?>

      </div>
      <div class="product__hover-note"><span>More info</span></div>
    </div>
    <div class="product__content">
      <h3 class="product__title" data-product-title=""><?php the_title(); ?></h3>
      <p class="product__price"><span>$ <?php echo $product_price; ?></span><span class="ml-5">(<?php echo $product_wight; ?>GR)</span></p>
      <div class="flex md:block lg:flex justify-between -mx-10">
        <div class="flex-shrink-0 px-10 mb-20 lg:mb-0">
          <div class="stepper" data-component="stepper" data-min="1" data-max="100" data-step="1">
            <div class="stepper__control stepper__control--decrease" data-decrement=""><i class="icon-minus"></i></div>
            <input class="stepper__input" type="number" data-input="" value="1" />
            <div class="stepper__control stepper__control--increase" data-increment=""><i class="icon-plus"></i></div>
          </div>
        </div>
        <div class="flex-grow px-10">
          <button class="btn btn--primary w-full px-10" type="button" data-control="submit">
            <span class="btn__text-holder"><span class="btn__text">add to cart</span></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<?php


if ($count == 2 || $count == 3 || $count == 13 || $count == 15) {
  $data_scroll_speed_count = ($count == 2 || $count == 13) ? "0.6": "-0.6";
  echo '</div>
  <div class="grid gap-20 laptop:gap-80 mb-20 md:mb-0" data-scroll="" data-scroll-speed="' . $data_scroll_speed_count . '" data-no-touch-parallax="">';
}
?>