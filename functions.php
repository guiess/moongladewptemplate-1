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
  $version = '0.0.0.1';
  wp_dequeue_style('wp-block-library'); // нужен для редактора Gutenberg. нам не нужен
  wp_deregister_script('wp-embed'); // удалим wp-embed.min.js?ver=5.7.2' в футере

  // wp_enqueue_style('icomoon-fonts', get_template_directory_uri() . '/assets/fonts/icomoon.woff', [], $version);
  wp_enqueue_style('main-style', get_stylesheet_uri(), [], $version); //подключили стили
  wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/app.js', [], $version, true); // подключили app.js основной скрипт
  wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/cart.js', [], $version, true); // подключили cart.js скрипт корзины
  wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/cookies.js', [], $version, true); // подключили cookies.js скрипт корзины  
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

  // $admin_email = 'moonglade@u1441555.isp.regruhosting.ru';
  $email_from = 'moonglade@u1441555.isp.regruhosting.ru';
  $email_to = 'dearwhynot@gmail.com';
  $form_subject = 'Заявка с сайта Moonglade';
  $message = "
  PHRhYmxlIGFsaWduPSJjZW50ZXIiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjEiIGNlbGxzcGFj
  aW5nPSIxIiBzdHlsZT0iYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTt3aWR0aDogNjIxcHg7Y29s
  b3I6I2ZmZmZmZjtiYWNrZ3JvdW5kOiMwMDAwMDA7Ij4KCTx0Ym9keT4KCTx0cj4KCQk8dGQ+CgkJ
  CTxpbWcgYWx0PSIiIGhlaWdodD0iMjI3IiBzcmM9Imh0dHBzOi8vd3d3LmVzY2FwZWZyb210YXJr
  b3YuY29tL3VwbG9hZHMvbWFpbHRlbXBsYXRlL2hlYWRlci5qcGciIHdpZHRoPSI2MjEiIC8+CgkJ
  PC90ZD4KCTwvdHI+Cgk8dHI+CgkJPHRkIHN0eWxlPSJwYWRkaW5nOiAwIDQwcHggODBweDtmb250
  LXNpemU6IDEwcHQ7Y29sb3I6I2ZlZjdkYjtmb250LWZhbWlseTp0YWhvbWEsZ2VuZXZhLHNhbnMt
  c2VyaWY7Ij4KCQkJPHAgc3R5bGU9ImNvbG9yOiNmZWY3ZGI7Ij7QlNC70Y8g0L/QvtC00YLQstC1
  0YDQttC00LXQvdC40Y8g0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQv9C10YDQtdC50LTQuNGC0LUg
  0L/QviDRgdGB0YvQu9C60LU6PC9wPgo8L3RkPgo8L3RyPgo8dHI+CiAgICA8dGQgc3R5bGU9ImNv
  bG9yOiAjZmVmN2RiO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmctYm90dG9tOiA4MHB4OyI+CiAg
  ICAgICAgPGEgaHJlZj0iaHR0cHM6Ly93d3cuZXNjYXBlZnJvbXRhcmtvdi5jb20vcmVnaXN0cmF0
  aW9uLzBmMzJjZDY2NmU4MjlhN2E3Njg2YTExNWVjYjA1NWQ2IiBzdHlsZT0icGFkZGluZzogOXB4
  IDczcHg7Zm9udC1zaXplOiAxMHB0O2ZvbnQtZmFtaWx5OnRhaG9tYSxnZW5ldmEsc2Fucy1zZXJp
  Zjtmb250LXdlaWdodDpib2xkO3RleHQtZGVjb3JhdGlvbjpub25lO2JvcmRlci1yYWRpdXM6M3B4
  OyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Y29sb3I6IzAwMDAwMDtiYWNrZ3JvdW5kOiM5YTg4
  NjY7Ij4KCSAgICAgICAg0JfQsNCy0LXRgNGI0LjRgtGMINGA0LXQs9C40YHRgtGA0LDRhtC40Y4K
  ICAgICAgICA8L2E+CQk8L3RkPgoJPC90cj4KCTx0cj4KCQk8dGQgc3R5bGU9InBhZGRpbmc6IDQw
  cHg7Zm9udC1zaXplOiAxMHB0OyBjb2xvcjogcmdiKDI1NCwgMjQ3LCAyMTkpOyBoZWlnaHQ6IDY1
  cHg7IHZlcnRpY2FsLWFsaWduOiBib3R0b207Ij4KCQkJPGRpdiBzdHlsZT0iY29sb3I6ICNmZWY3
  ZGI7ZmxvYXQ6cmlnaHQ7Ij4KCQkJCTxhIGhyZWY9Imh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9l
  c2NhcGVmcm9tdGFya292LyI+PGltZyBhbHQ9IiIgaGVpZ2h0PSIzMCIgc3JjPSJodHRwczovL3d3
  dy5lc2NhcGVmcm9tdGFya292LmNvbS91cGxvYWRzL21haWx0ZW1wbGF0ZS9mYi5wbmciIHdpZHRo
  PSIzMCIgLz48L2E+CgkJCQk8YSBocmVmPSJodHRwczovL3ZrLmNvbS9lc2NhcGVmcm9tdGFya292
  Ij48aW1nIGFsdD0iIiBoZWlnaHQ9IjMwIiBzcmM9Imh0dHBzOi8vd3d3LmVzY2FwZWZyb210YXJr
  b3YuY29tL3VwbG9hZHMvbWFpbHRlbXBsYXRlL3ZrLnBuZyIgd2lkdGg9IjMwIiAvPjwvYT4KCQkJ
  CTxhIGhyZWY9Imh0dHBzOi8vdHdpdHRlci5jb20vYnN0YXRlZ2FtZXMiPjxpbWcgYWx0PSIiIGhl
  aWdodD0iMzAiIHNyYz0iaHR0cHM6Ly93d3cuZXNjYXBlZnJvbXRhcmtvdi5jb20vdXBsb2Fkcy9t
  YWlsdGVtcGxhdGUvdHcucG5nIiB3aWR0aD0iMzAiIC8+PC9hPgoJCQk8L2Rpdj4KCQkJPGRpdiBz
  dHlsZT0iY29sb3I6I2ZlZjdkYjsiPtChINGD0LLQsNC20LXQvdC40LXQvCw8L2Rpdj4KCQkJPGRp
  diBzdHlsZT0iY29sb3I6I2ZlZjdkYjsiPtCa0L7QvNCw0L3QtNCwINGA0LDQt9GA0LDQsdC+0YLR
  h9C40LrQvtCyIEVzY2FwZSBmcm9tIFRhcmtvdjwvZGl2PgoJCQk8ZGl2PgoJCQkJPGEgaHJlZj0i
  aHR0cHM6Ly93d3cuZXNjYXBlZnJvbXRhcmtvdi5jb20iIHN0eWxlPSJjb2xvcjogI2FkOTQ2NDsi
  Pmh0dHBzOi8vd3d3LmVzY2FwZWZyb210YXJrb3YuY29tPC9hPjxiciAvPgoJCQkJPGEgaHJlZj0i
  bWFpbHRvOmluZm9AYmF0dGxlc3RhdGVnYW1lcy5jb20iIHN0eWxlPSJjb2xvcjogI2FkOTQ2NDsi
  PmluZm9AYmF0dGxlc3RhdGVnYW1lcy5jb208L2E+PC9kaXY+CgkJPC90ZD4KCTwvdHI+Cgk8L3Ri
  b2R5Pgo8L3RhYmxlPg==
  --b1_2da059bd365fc175e618742e68836ed2--";

  // echo "$_POST" . " ";

  // foreach ($_POST as $key => $value) {
  //   echo "$key". " ";
  //   echo "$value". " ";
  //   if ($value === '') {
  //     continue;
  //   }
  //   $color = $color_counter % 2 === 0 ? '#fff' : '#f8f8f8';
  //   $message .= "
  //   <tr style='background-color: $color;'>
  //     <td style='padding: 10px; border: 1px solid #e9e9e9;'>$key</td>
  //     <td style='padding: 10px; border: 1px solid #e9e9e9;'>$value</td>
  //   </tr>";

  //   $color_counter++;
  // }  

  // function adopt($text)
  // {
  //   // return '=?utf-8?B?' . base64_encode($text) . '?=';
  //   return $text;
  // }

  $headers  = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=utf-8\r\n";
  $headers .= "Content-Transfer-Encoding: base64\r\n";
  $headers .= "From:" . $form_subject . " <$email_from>\r\n";

  $success_send = wp_mail($email_to, $form_subject, $message, $headers);

  if ($success_send) {
    echo 'success';
  } else {
    echo 'error';
  }

  wp_die();
}
