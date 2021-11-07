<?php

if (!defined('ABSPATH')) {
  exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('theme_options', 'Product Page')
  ->set_icon('dashicons-carrot') //добавить иконку
  ->add_tab('Slogan products text', [
    // Field::make('textarea', 'first_product_page_text', 'First text (to wrap lines, write <br/>)')
    //   ->set_width(50),
    // Field::make('image', 'first_product_page_image', 'Image')
    //   ->set_width(50),
    Field::make('textarea', 'slogan_product_text', 'MOON INSPIRATION text (to wrap lines, write <br/>)')
  ])

  ->add_tab('First video products page', [
    Field::make('file', 'first_video_products_page')
      ->set_type('video'),
      Field::make('text', 'first_video_products_page_vimeo_id', 'ID file on vimeo')
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
  ])

  ->add_tab('Adress shiping from', [
    Field::make('text', 'delivery_from_country', 'Country code (Alpha2 format)'),
    Field::make('text', 'delivery_from_city', 'City'),
    Field::make('text', 'delivery_from_postalcode', 'Postal code'),
    Field::make('text', 'delivery_weight', 'Weight for testing'),
  ])

  ->add_tab('Dollar rate (USD - IDR)', [
    Field::make('text', 'moon_dollar_rate', 'Please write the current exchange rate taxes'),
  ]);
