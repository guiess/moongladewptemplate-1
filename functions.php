<?php

add_filter('show_admin_bar', '__return_false');

remove_action('wp_head',             'print_emoji_detection_script', 7);
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('wp_print_styles',     'print_emoji_styles');
remove_action('admin_print_styles',  'print_emoji_styles');

remove_action('wp_head', 'wp_resource_hints', 2); //remove dns-prefetch
remove_action('wp_head', 'wp_generator'); //remove meta name="generator"
remove_action('wp_head', 'wlwmanifest_link'); //remove wlwmanifest
remove_action('wp_head', 'rsd_link'); // remove EditURI
remove_action('wp_head', 'rest_output_link_wp_head'); // remove 'https://api.w.org/
remove_action('wp_head', 'rel_canonical'); //remove canonical
remove_action('wp_head', 'wp_shortlink_wp_head', 10); //remove shortlink
remove_action('wp_head', 'wp_oembed_add_discovery_links'); //remove alternate

add_action("wp_enqueue_scripts", "site_scripts");

function site_scripts()
{
  // $version = '0.0.1.0';
  wp_dequeue_style('wp-block-library'); // нужен для редактора Gutenberg. нам не нужен
  wp_deregister_script('wp-embed'); // удалим wp-embed.min.js?ver=5.7.2' в футере

  // wp_enqueue_style('icomoon-fonts', get_template_directory_uri() . '/assets/fonts/icomoon.woff', [], $version);
  wp_enqueue_style('main-style', get_stylesheet_uri(), [],); //подключили стили
  // wp_enqueue_style('normalize-style', get_template_directory_uri() . '/assets/css/normalize.css', [], $version); //подключили стили
  wp_enqueue_script('jquery-main', get_template_directory_uri() . '/assets/js/jquery.js', [], null, true);
  wp_enqueue_script('gsap-main', get_template_directory_uri() . '/assets/js/gsap.js', ['jquery-main'], null, true);
  wp_enqueue_script('swiper-main', get_template_directory_uri() . '/assets/js/swiper.js', ['jquery-main', 'gsap-main'], null, true);
  wp_enqueue_script('inputmask-main', get_template_directory_uri() . '/assets/js/inputmask.js', ['jquery-main', 'gsap-main', 'swiper-main'], null, true);

  wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/main.js', ['jquery-main', 'gsap-main', 'inputmask-main'], null, true);
  wp_enqueue_script('cookies-js', get_template_directory_uri() . '/assets/js/cookies.js', [], null, true);

  // if (is_page('')) {
  //   wp_enqueue_script('video-js', get_template_directory_uri() . '/assets/js/video-player.js', [], null, true);
  // }

  if (is_page('products')) {
    wp_enqueue_script('cart-js', get_template_directory_uri() . '/assets/js/cart.js', [], null, true);
    wp_enqueue_script('feedback-js', get_template_directory_uri() . '/assets/js/feedback.js', [], null, true);
    // wp_enqueue_script('video-js', get_template_directory_uri() . '/assets/js/video-player.js', [], null, true);
  }

  if (is_page('checkout-customer')) {
    wp_enqueue_script('discount-js', get_template_directory_uri() . '/assets/js/checkout-customer.js', [], null, true);
  }

  if (is_page('checkout-shipping')) {
    wp_enqueue_script('shipping-js', get_template_directory_uri() . '/assets/js/checkout-shipping.js', [], null, true);
  }

  if (is_page('checkout-payment')) {
    wp_enqueue_script('payment-js', get_template_directory_uri() . '/assets/js/checkout-payment.js', [], null, true);
  }

  wp_localize_script('main-js', 'WPJS', [
    'siteUrl' => get_template_directory_uri(),
    // 'ajaxUrl' => admin_url('admin-ajax.php', 'http'),
    'ajaxUrl' => admin_url('admin-ajax.php'),
  ]);
}

add_action('after_setup_theme', 'crb_load');
function crb_load()
{
  require_once('includes/carbon-fields/vendor/autoload.php');
  \Carbon_Fields\Carbon_Fields::boot();
}

add_action('after_setup_theme', 'theme_support');
function theme_support()
{
  add_theme_support('post-thumbnails'); // добавление в пост выбоор пикчи
  // add_image_size('product', 500, 313, true); // добавление кастомного разрешениея для тамбов
}

add_action('carbon_fields_register_fields', 'register_carbon_fields');
function register_carbon_fields()
{
  require_once('includes/carbon-fields-options/theme-options.php');
  require_once('includes/carbon-fields-options/theme-products-page-options.php');
  require_once('includes/carbon-fields-options/post-meta.php');
  require_once('includes/carbon-fields-options/theme-discount.php');
}

add_action('init', 'register_post_types');
function register_post_types()
{
  register_post_type('product', [
    'labels' => [
      'name'               => 'Products', // основное название для типа записи
      'singular_name'      => 'Product', // название для одной записи этого типа
      'add_new'            => 'Add product', // для добавления новой записи
      'add_new_item'       => 'Adding a product', // заголовка у вновь создаваемой записи в админ-панели.
      'edit_item'          => 'Editing an product', // для редактирования типа записи
      'new_item'           => 'New product', // текст новой записи
      'view_item'          => 'View product', // для просмотра записи этого типа.
      'search_items'       => 'Search product', // для поиска по этим типам записи
      'not_found'          => 'Not found', // если в результате поиска ничего не было найдено
      'not_found_in_trash' => 'Not found in the cart', // если не было найдено в корзине
      'menu_name'          => 'Products', // название меню
    ],
    'menu_icon'          => 'dashicons-palmtree',
    'public'             => true,
    'menu_position'      => 5,
    'supports'           => ['excerpt', 'title', 'editor', 'thumbnail'],
    'has_archive'        => false,
    'rewrite'            => ['slug' => 'products']
  ]);
}

add_action('wp_ajax_send_email', 'moonglade_send_email');
add_action('wp_ajax_nopriv_send_email', 'moonglade_send_email');

function moonglade_send_email()
{
  $method = $_SERVER['REQUEST_METHOD'];

  if ($method !== 'POST') {
    exit();
  }
  require_once('includes/mail-forms/order.php');
}

add_action('wp_ajax_discount_check', 'discount_check');
add_action('wp_ajax_nopriv_discount_check', 'discount_check');

function discount_check()
{
  $method = $_SERVER['REQUEST_METHOD'];

  if ($method !== 'POST') {
    exit();
  }
  require_once('includes/ajax-requests/discount.php');
}

add_action('wp_ajax_feedback_send', 'feedback_send');
add_action('wp_ajax_nopriv_feedback_send', 'feedback_send');

function feedback_send()
{
  // echo 'feedback_send';

  $method = $_SERVER['REQUEST_METHOD'];

  if ($method !== 'POST') {
    exit();
  }
  require_once('includes/mail-forms/feedback.php');
}

add_action('wp_ajax_delivery_rank', 'delivery_rank');
add_action('wp_ajax_nopriv_delivery_rank', 'delivery_rank');

function delivery_rank()
{
  $method = $_SERVER['REQUEST_METHOD'];

  if ($method !== 'POST') {
    exit();
  }
  require_once('includes/ajax-requests/delivery-rate-shop.php');
}
