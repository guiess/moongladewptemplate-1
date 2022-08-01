<?php

if (!defined('ABSPATH')) {
  exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('theme_options', 'Maintenance')
  ->set_icon('dashicons-hammer')
  ->add_fields(array(
    Field::make('checkbox', 'maintenance_mode', __('Maintenance Mode'))
      ->set_option_value('yes'),
    Field::make('checkbox', 'dev_mode', __('Developing Mode'))
      ->set_option_value('yes'),
  ));