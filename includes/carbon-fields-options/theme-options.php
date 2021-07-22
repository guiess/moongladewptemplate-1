<?php

if (!defined('ABSPATH')) {
  exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('theme_options', 'Настройки сайта')
  // ->set_icon('dashicons-carrot') //добавить иконку
  ->add_tab('Первое видео', [
    Field::make('file', 'first_video')
      ->set_type('video'),
    Field::make('text', 'first_video_vimeo_id', 'ID файла на видео хостинге vimeo')
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
    Field::make('image', 'first_big_picture_1x', 'Картинка рекомендуемый размер 1270х1570 (170KB)')->set_value_type('url')
      ->set_width(33),
    Field::make('image', 'first_big_picture_2x', 'Картинка для планшетов 2540х3140 (700KB)')->set_value_type('url')
      ->set_width(33),
    Field::make('textarea', 'first_big_picture_text', 'Подпись  - для переноса строк писать <br/>')
  ])

  ->add_tab('Второе видео', [
    Field::make('file', 'second_video')
      ->set_type('video'),
    Field::make('text', 'second_video_vimeo_id', 'ID файла на видео хостинге vimeo'),
    Field::make('textarea', 'second_video_text', 'Подпись  - для переноса строк писать <br/>')
  ])

  ->add_tab('Третье видео', [
    Field::make('file', 'third_video')
      ->set_type('video'),
    Field::make('text', 'third_video_vimeo_id', 'ID файла на видео хостинге vimeo'),
    Field::make('textarea', 'third_video_text', 'Подпись  - для переноса строк писать <br/>')
  ])

  ->add_tab('Четвертое видео', [
    Field::make('file', 'fourth_video')
      ->set_type('video'),
    Field::make('text', 'fourth_video_vimeo_id', 'ID файла на видео хостинге vimeo'),
  ])
  
  ->add_tab('MOON INSPIRATION', [
    Field::make('textarea', 'moon_inspiration_text', 'Текст лунного вдохновения')
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
