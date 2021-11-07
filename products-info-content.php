<?php

if (!defined('ABSPATH')) {
  exit;
}

//$count = $args['count'];
$product_id = get_the_ID();

$product_price =  carbon_get_post_meta($product_id, 'product_price');
$product_wight =  carbon_get_post_meta($product_id, 'product_wight');
$product_bw_image_2x =  wp_get_original_image_url(carbon_get_post_meta($product_id, 'product_bw_image_2x'));
$product_image1_2x =  wp_get_original_image_url(carbon_get_post_meta($product_id, 'product_image1_2x'));
$product_image2_2x =  wp_get_original_image_url(carbon_get_post_meta($product_id, 'product_image2_2x'));
$product_image3_2x =  wp_get_original_image_url(carbon_get_post_meta($product_id, 'product_image3_2x'));
$product_image4_2x =  wp_get_original_image_url(carbon_get_post_meta($product_id, 'product_image4_2x'));
$product_image5_2x =  wp_get_original_image_url(carbon_get_post_meta($product_id, 'product_image5_2x'));
$product_slogan =  carbon_get_post_meta($product_id, 'product_slogan');
$product_use =  carbon_get_post_meta($product_id, 'product_use');
$product_contains =  carbon_get_post_meta($product_id, 'product_contains');

?>

<div class="fixed top-0 w-full h-full z-110 popup popup--modal popup--full product-popup" id="product_<?php echo $product_id; ?>" data-component="popup">
  <span class="bg-black absolute w-full h-full left-0 top-0 popup-overlay" data-popup-close=""></span>
  <div class="popup-container h-full max-h-full relative overflow-y-auto" data-popup-scroller="">
    <div class="popup-close">
      <button class="btn btn--primary" type="button" data-popup-close="">
        <span class="btn__text-holder"><i class="btn__icon btn__icon--append icon-close"></i></span>
      </button>
    </div>
    <div class="popup-body lg:grid lg:grid-cols-12 bg-white text-black">
      <div class="lg:col-span-7 lg:order-2 lg:flex lg:flex-col product-popup__visual-part">
        <ul class="breadcrumbs">

          <?php
          $table = carbon_get_post_meta($product_id, 'product_effects');
          if (!empty($table)) : ?>
            <?php foreach ($table as $tr) : ?>
              <li><?php echo $tr['name']; ?></li>
            <?php endforeach; ?>
          <?php endif; ?>

        </ul>
        <div class="flex-grow product-popup__visual">

          <div class="w-full h-full" data-component="product-carousel">
            <div class="swiper-container w-full h-full" data-carousel="">
              <div class="swiper-wrapper">
                <div class="swiper-slide w-full h-full">
                  <div class="slide-inner w-full h-full">
                    <picture><img class="w-full max-w-full lg:w-full lg:h-full lg:object-cover" data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E" data-srcset="<?php echo $product_image1_2x; ?>" alt="image description" /></picture>
                  </div>
                </div>
                <div class="swiper-slide w-full h-full">
                  <div class="slide-inner w-full h-full">
                    <picture><img class="w-full max-w-full lg:w-full lg:h-full lg:object-cover" data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E" data-srcset="<?php echo $product_image2_2x; ?>" alt="image description" /></picture>
                  </div>
                </div>
                <div class="swiper-slide w-full h-full">
                  <div class="slide-inner w-full h-full">
                    <picture><img class="w-full max-w-full lg:w-full lg:h-full lg:object-cover" data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E" data-srcset="<?php echo $product_image3_2x; ?>" alt="image description" /></picture>
                  </div>
                </div>
                <div class="swiper-slide w-full h-full">
                  <div class="slide-inner w-full h-full">
                    <picture><img class="w-full max-w-full lg:w-full lg:h-full lg:object-cover" data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E" data-srcset="<?php echo $product_image4_2x; ?>" alt="image description" /></picture>
                  </div>
                </div>
                <div class="swiper-slide w-full h-full">
                  <div class="slide-inner w-full h-full">
                    <picture><img class="w-full max-w-full lg:w-full lg:h-full lg:object-cover" data-component="lazyload" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E" data-srcset="<?php echo $product_image5_2x; ?>" alt="image description" /></picture>
                  </div>
                </div>
              </div>
              <div class="carousel-pagination"></div>
              <div class="absolute p-10 md:p-30 left-0 top-1/2 transform -translate-y-1/2 z-5">
                <button class="btn btn--control" type="button" data-control="prev">
                  <span class="btn__text-holder"><i class="btn__icon btn__icon--append icon-arrow-left"></i></span>
                </button>
              </div>
              <div class="absolute p-10 md:p-30 right-0 top-1/2 transform -translate-y-1/2 z-5">
                <button class="btn btn--control" type="button" data-control="next">
                  <span class="btn__text-holder"><i class="btn__icon btn__icon--append icon-arrow-right"></i></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 product-popup__content-part js-product" data-component="product" data-product-id="product_<?php echo $product_id; ?>" data-product-name="<?php the_title(); ?>" data-product-price="<?php echo $product_price; ?>" data-product-src="<?php echo $product_image1_2x; ?>">
        <div class="product-popup__content-scroller">
          <h2 class="product-popup__title font-serif" data-product-title=""><?php the_title(); ?></h2>
          <p class="product-popup__price font-serif"><span>$ <?php echo $product_price; ?></span><span class="opacity-50 ml-5">(<?php echo $product_wight; ?>GR)</span></p>
          <div class="product-popup__buttons-panel flex justify-between">
            <div class="product-popup__button-item flex-shrink-0">
              <div class="stepper" data-component="stepper" data-min="1" data-max="99" data-step="1">
                <div class="stepper__control stepper__control--decrease" data-decrement=""><i class="icon-minus"></i></div>
                <input class="stepper__input" type="number" data-input="" value="1" min="1" max="99" oninput="validity.valid||(value='1');" readonly />
                <div class="stepper__control stepper__control--increase" data-increment=""><i class="icon-plus"></i></div>
              </div>
            </div>
            <div class="product-popup__button-item flex-grow">
              <button class="btn btn--primary call-modal-add-to-cart js-btn-add-to-cart" type="button" data-control="submit">
                <span class="btn__text-holder"><span class="btn__text js-btn-add-to-cart">add to cart</span></span>
              </button>
            </div>
          </div>
          <div class="wysiwyg">
            <p><?php the_excerpt(); ?></p>
            <p>
              <?php the_content(); ?>
            </p>
          </div>
          <p class="product-popup__excerpt uppercase font-serif"><?php echo $product_slogan; ?></p>
          <hr class="opacity-10 border-black product-popup__divider" />
          <div class="product-popup__definitions grid">
            <dl class="mb-0">
              <dt class="opacity-50">Use:</dt>
              <dd><?php echo $product_use; ?></dd>
            </dl>
            <dl class="mb-0">
              <dt class="opacity-50">Contains:</dt>
              <dd>
                <?php echo $product_contains; ?>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>