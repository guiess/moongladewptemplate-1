<?php

if (!defined('ABSPATH')) {
  exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('theme_options', 'Product Page')
  ->set_icon('dashicons-carrot') //добавить иконку
  ->add_tab('Settings', [
    // Field::make('textarea', 'first_product_page_text', 'First text (to wrap lines, write <br/>)')
    //   ->set_width(50),
    // Field::make('image', 'first_product_page_image', 'Image')
    //   ->set_width(50),
    Field::make('textarea', 'slogan_product_text', 'MOON INSPIRATION text (to wrap lines, write <br/>)')
  ]);
  