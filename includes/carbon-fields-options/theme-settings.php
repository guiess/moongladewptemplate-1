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

//->set_help_text('This will help preserve formatting and comments in the git version of the working files. For the PROD version, you need to make a Minify File and save it with .min resolution. like example.min.js or example.min.css and disable DEV mode here.'),