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
    // Field::make('text', 'delivery_weight', 'Weight for testing in kilograms'),
  ])

  // ->add_fields(array(
  //   Field::make('complex', 'crb_complex', 'My Complex Field')
  //     ->add_fields(array(
  //       Field::make('text', 'my_text_field', 'My Text Field')
  //     ))
  //     ->set_default_value(array(
  //       array(
  //         'my_text_field' => 'Hello',
  //       ),
  //       array(
  //         'my_text_field' => 'World!',
  //       ),
  //     )),
  // ))

  // ->add_tab('Packing', [
  //   Field::make('complex', 'packing_list')
  //     // ->set_max(5)
  //     ->add_fields([
  //       Field::make('text', 'packing_list_amount', 'Amount')
  //         // ->set_help_text('Example "53"')
  //         ->set_width(10)
  //         ->set_attribute('maxLength', 3),
  //       Field::make('text', 'packing_list_dimension', 'Dimension')
  //         // ->set_help_text('Example "M5"')
  //         ->set_width(30)
  //         ->set_attribute('maxLength', 20),
  //       Field::make('text', 'packing_list_description', 'Description')
  //         // ->set_help_text('Example "FF800-2"')
  //         ->set_width(30)
  //         ->set_attribute('maxLength', 20),
  //       Field::make('text', 'packing_list_weight', 'Weight')
  //         // ->set_help_text('Example "FF800-2"')
  //         ->set_width(30)
  //         ->set_attribute('maxLength', 6),
  //     ])
  //     ->set_required(true)
  //   // ->set_min(4)
  //   // ->set_layout("tabbed-vertical")
  // ])

  ->add_tab('Dollar rate (USD - IDR)', [
    Field::make('text', 'moon_dollar_rate', 'Please write the current exchange rate taxes'),
  ])

  ->add_tab('Shipping method details', [
    Field::make('text', 'shipping_method', 'UPS Service associated with the shipment')
      ->set_width(50),
    Field::make('text', 'package_method', 'UPS Package method')
      ->set_width(50),
  ])

  ->add_tab('Setup UPS access', [
    Field::make('text', 'ups_user_id', 'UPS user ID')
      ->set_width(25),
    Field::make('text', 'ups_user_pass', 'UPS user password')
      ->set_width(25),
    Field::make('text', 'ups_user_key', 'UPS user access key')
      ->set_width(25),
    Field::make('text', 'shipper_number', 'Shipper Number')
      ->set_width(25),
    // Field::make('text', 'contact_email', 'Contact email')
    //   ->set_width(50),
    // Field::make('text', 'facebook_domain_verification', 'Facebook domain verification')
    Field::make('radio', 'settings_delivery_mode', 'Select Mode')
      ->add_options(array(
        'test' => 'Test',
        'live' => 'Live',
      ))
  ]);
