<?php

if (!defined('ABSPATH')) {
  exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('theme_options', 'Настройки сайта')
  // ->set_icon('dashicons-carrot') //добавить иконку
  ->add_tab('Общие настройки', [
    Field::make('text', 'site_text', 'Текст какой-то')
      ->set_attribute('maxLength', 3),
  ])

  ->add_tab('Первое видео', [
    Field::make('media_gallery', 'first_vieo')
      ->set_type(array('video')),
    Field::make('text', 'first_viedo_link', 'Ссылка на файл vimeo')
  ])

  ->add_tab("Картинки MONOWAY", [
    // Field::make('text', 'count_pictures', 'Колличество отображаемых картинок (направление отсчёта - сверху вниз)')
    //   ->set_attribute('maxLength', 3),

    Field::make('complex', 'gorizont_pictures', 'Картинки в горизонтальную прокрутку')
      ->add_fields(
        [
          Field::make('textarea', 'title', 'Подпись - для переноса строк писать <br/>'),
          // ->set_default_value("умолчание"), //добавить значение по дефолту
          Field::make('image', 'gor_img500x250', 'Картинка основная 500х250')->set_value_type('url')
            ->set_width(33),
          Field::make('image', 'gor_img1000x5000', 'Картинка для планшетов 1000х500')->set_value_type('url')
            ->set_width(33)
        ]
      )
      ->help_text('Необходимо добавить информацию по заполнению полей...')
  ])

  ->add_tab('Первая большая картинка', [
    Field::make('image', 'first_big_picture', 'Картинка рекомендуемый размер 500х250')->set_value_type('url'),
    Field::make('textarea', 'first_big_picture_text', 'Подпись')
  ]);



















  // ->add_tab("ФИО", [
  //   Field::make('complex', 'gorizont_pictures2', 'Картинки в горизонтальную прокрутку')
  //     ->add_fields(
  //       [
  //         Field::make('text', 'name', 'ФИО')
  //           ->set_width(33),
  //         Field::make('text', 'spec', 'Специальность')
  //           ->set_width(33),
  //       ]
  //     )
  //     ->help_text('Перечислите всех, кто помогал Вам написать статью.')
  // ]);
