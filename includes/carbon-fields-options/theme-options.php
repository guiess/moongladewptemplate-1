<?php

if (!defined('ABSPATH')) {
  exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('theme_options', 'Настройки сайта')
  ->add_tab('Общие настройки', [
    Field::make('image', 'site_logo', 'Логотип'),
  ])

  ->add_tab("Картинки MONOWAY", [
    Field::make('complex', 'gorizont_pictures', 'Картинки в горизонтальную прокрутку')
      ->add_fields(
        [
          Field::make('textarea', 'title', 'Подпись'),
            // ->set_default_value("умолчание"), //добавить значение по дефолту
          Field::make('image', 'gor_img1000x5000', 'Картинка 1000х500')->set_value_type('url')
            ->set_width(33),
          Field::make('image', 'gor_img500x250', 'Картинка 500х250')->set_value_type('url')
            ->set_width(33),
        ]
      )
      ->help_text('Необходимо добавить информацию по заполнению полей...')
  ])

  ->add_tab("ФИО", [
    Field::make('complex', 'gorizont_pictures2', 'Картинки в горизонтальную прокрутку')
      ->add_fields(
        [
          Field::make('text', 'name', 'ФИО')
            ->set_width(33),
          Field::make('text', 'spec', 'Специальность')
            ->set_width(33),
        ]
      )
      ->help_text('Перечислите всех, кто помогал Вам написать статью.')
  ]);
