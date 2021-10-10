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
  ])

  ->add_tab('Activation Products', [
    Field::make('association', 'catalog_products', 'Товары')
      ->set_types([
        [
          'type'      => 'post',
          'post_type' => 'product',
        ]
      ])
  ])

  ->add_tab("Countries list", [
    Field::make('textarea', 'moon_countries_list', 'Coutries list for ordering'),
  ])

  ->add_tab("Order's email", [
    Field::make('text', 'moon_order_email', 'Orders email, which will receive letters from the order form'),
  ])

  ->add_tab('Support email', [
    Field::make('text', 'moon_support_email', 'Support email, which will receive letters from the feedback form'),
  ]);
