<?php

if (!defined('ABSPATH')) {
  exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('theme_options', 'Discount')
  ->set_icon('dashicons-buddicons-groups')

  ->add_tab("FIXED", [
    Field::make('complex', 'coupons_fixed', 'Coupons whis fixed values')
      ->add_fields(
        [
          Field::make('text', 'coupons_fixed_code', 'Code')
            ->set_width(20),
          Field::make('text', 'coupons_fixed_value', 'Value fixed')
            ->set_width(10),
          Field::make('text', 'coupons_fixed_info', 'More info')
            ->set_width(70),
        ]
      )
      // ->help_text('It is necessary to add information on filling in the fields ...')
  ])

  ->add_tab("PERCENT", [
    Field::make('complex', 'coupons_percents', 'Coupons whis percent values')
      ->add_fields(
        [
          Field::make('text', 'coupons_percent_code', 'Code')
            ->set_width(20),
          Field::make('text', 'coupons_percent_value', 'Value %')
            ->set_width(10),
          Field::make('text', 'coupons_percent_info', 'More info')
            ->set_width(70),
        ]
      )
      // ->help_text('It is necessary to add information on filling in the fields ...')
  ]);
