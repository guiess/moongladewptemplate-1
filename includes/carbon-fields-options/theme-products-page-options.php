<?php

if (!defined('ABSPATH')) {
  exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('theme_options', 'Product Page')
  ->set_icon('dashicons-carrot') //добавить иконку

  ->add_tab('Socials', [
    Field::make('text', 'instagram_link_superfood', 'Instagram link in Product Page')
  ])
  
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
    Field::make('file', 'first_video_products_page_play')
      ->set_type('video'),
    // Field::make('text', 'first_video_products_page_vimeo_id', 'ID file on vimeo')
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

  ->add_tab('Support email', [
    Field::make('text', 'moon_support_email', 'Support email, which will receive letters from the feedback form'),
  ]);
