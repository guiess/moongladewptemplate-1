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
  $version = '0.0.0.0';
  wp_dequeue_style('wp-block-library'); // нужен для редактора Gutenberg. нам не нужен
  wp_deregister_script( 'wp-embed' ); // удалим wp-embed.min.js?ver=5.7.2' в футере

  // wp_enqueue_style('icomoon-fonts', get_template_directory_uri() . '/assets/fonts/icomoon.woff', [], $version);
  wp_enqueue_style('main-style', get_stylesheet_uri(), [], $version); //подключили стили
  wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/app.js', [], $version, true); // подключили app.js основной скрипт
}

add_action( 'after_setup_theme', 'crb_load' );
function crb_load() {
    require_once('includes/carbon-fields/vendor/autoload.php' );
    \Carbon_Fields\Carbon_Fields::boot();
}

add_action('carbon_fields_register_fields', 'register_carbon_fields');
function register_carbon_fields() {
  require_once( 'includes/carbon-fields-options/theme-options.php' );
}