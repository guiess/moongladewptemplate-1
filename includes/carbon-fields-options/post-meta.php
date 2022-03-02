<?php

if (!defined('ABSPATH')) {
  exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('post_meta', 'Product fields')
  ->show_on_post_type('product')

  ->add_tab('Price', [
    Field::make('text', 'product_price', 'Price ($)')
  ])

  ->add_tab('Wight', [
    Field::make('text', 'product_wight', 'Wight (GR)'),
    Field::make('text', 'product_wight_oz', 'Wight (OZ)')    
  ])

  ->add_tab('Box image', [
    Field::make('image', 'product_box_image_1x', 'Box image')
      ->set_help_text('Approximate size 403х609')
      ->set_width(50),
    Field::make('image', 'product_box_image_2x', 'Box image for tablets')
      ->set_help_text('Approximate size 806х1218')
      ->set_width(50),
  ])

  ->add_tab('Box hover image', [
    Field::make('image', 'product_box_hover_image_1x', 'Box hover image')
      ->set_help_text('Approximate size 161х227')
      ->set_width(50),
    Field::make('image', 'product_box_hover_image_2x', 'Box hover image for tablets')
      ->set_help_text('Approximate size 323х455')
      ->set_width(50),
  ])

  ->add_tab('Product image', [
    Field::make('image', 'product_image1_1x', 'Product image 1')
      ->set_help_text('Approximate size 352х419')
      ->set_width(50),
    Field::make('image', 'product_image1_2x', 'Product image 1 for tablets')
      ->set_help_text('Approximate size 704х838')
      ->set_width(50),

    Field::make('image', 'product_image2_1x', 'Product image2 ')
      ->set_help_text('Approximate size 352х419')
      ->set_width(50),
    Field::make('image', 'product_image2_2x', 'Product image 2 for tablets')
      ->set_help_text('Approximate size 704х838')
      ->set_width(50),

    Field::make('image', 'product_image3_1x', 'Product image 3')
      ->set_help_text('Approximate size 352х419')
      ->set_width(50),
    Field::make('image', 'product_image3_2x', 'Product image 3 for tablets')
      ->set_help_text('Approximate size 704х838')
      ->set_width(50),

    Field::make('image', 'product_image4_1x', 'Product image 4')
      ->set_help_text('Approximate size 352х419')
      ->set_width(50),
    Field::make('image', 'product_image4_2x', 'Product image 4 for tablets')
      ->set_help_text('Approximate size 704х838')
      ->set_width(50),

    Field::make('image', 'product_image5_1x', 'Product image 5')
      ->set_help_text('Approximate size 352х419')
      ->set_width(50),
    Field::make('image', 'product_image5_2x', 'Product image 5 for tablets')
      ->set_help_text('Approximate size 704х838')
      ->set_width(50),

  ])

  ->add_tab('Product BW image', [
    Field::make('image', 'product_bw_image_1x', 'Product black and white image')
      ->set_help_text('Approximate size 352х419')
      ->set_width(50),
    Field::make('image', 'product_bw_image_2x', 'Product black and white image for tablets')
      ->set_help_text('Approximate size 704х838')
      ->set_width(50),
  ])
  
  ->add_tab('Product mail image', [
    Field::make('image', 'product_mail_image', 'Product black and white image')
      ->set_help_text('Approximate size 43х50')
  ])

  ->add_tab('Category', [
    Field::make('text', 'product_form_factor', 'Category:')
  ])

  ->add_tab('Slogan', [
    Field::make('textarea', 'product_slogan', 'Slogan:')
  ])

  ->add_tab('Ingredients', [
    Field::make('textarea', 'product_ingredients', 'Ingredients:')
  ])
  
  ->add_tab('Use', [
    Field::make('textarea', 'product_use', 'Use:')
  ])

  ->add_tab('Contains', [
    Field::make('textarea', 'product_contains', 'Contains: (to wrap lines, write <br/>)')
  ])

  ->add_tab('Effects', [
    Field::make('complex', 'product_effects', 'Effects:')
      ->set_max(3)
      ->add_fields([
        Field::make('text', 'name', 'Effect')
      ])
  ]);
