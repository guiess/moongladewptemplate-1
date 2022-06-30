<?php

if (!defined('ABSPATH')) {
  exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('theme_options', 'Delivery')
  ->set_icon('dashicons-airplane')
  ->add_tab("Countries list", [
    Field::make('textarea', 'moon_countries_list', 'Coutries list for ordering'),
  ])

  ->add_tab("Order's email", [
    Field::make('text', 'moon_order_email', 'Orders email, which will receive letters from the order form'),
  ])

  ->add_tab('Adress shiping from', [
    Field::make('text', 'delivery_from_country', 'Country code (Alpha2 format)'),
    Field::make('text', 'delivery_from_city', 'City'),
    Field::make('text', 'delivery_from_postalcode', 'Postal code'),
    Field::make('text', 'delivery_weight', 'Weight for testing in kilograms'),
  ])

  ->add_tab('Dollar rate (USD - IDR)', [
    Field::make('text', 'moon_dollar_rate', 'Please write the current exchange rate taxes'),
  ])

  ->add_tab('Setup UPS access', [
    Field::make('text', 'ups_user_id', 'UPS user ID')
      ->set_width(33),
    Field::make('text', 'ups_user_pass', 'UPS user password')
      ->set_width(33),
    Field::make('text', 'ups_user_key', 'UPS user access key')
      ->set_width(33),
    // Field::make('text', 'contact_email', 'Contact email')
    //   ->set_width(50),
    // Field::make('text', 'facebook_domain_verification', 'Facebook domain verification')
  ]);
