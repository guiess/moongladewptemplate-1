<?php

if (!defined('ABSPATH')) {
  exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('theme_options', 'Настройки сайта')
  // ->set_icon('dashicons-carrot') //добавить иконку
  ->add_tab('Социалки', [
    Field::make('text', 'instagram_link', 'Ссылка на профиль Instagram'),
    Field::make('text', 'vimeo_link', 'Ссылка на профиль Vimeo')
  ])

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
          Field::make('textarea', 'title', 'Подпись (для переноса строк писать <br/>)'),
          // ->set_default_value("умолчание"), //добавить значение по дефолту
          Field::make('image', 'gor_img500x250', 'Картинка основная 500х250') // уберём потому как надо доставать размеры ->set_value_type('url')
            ->set_width(33),
          Field::make('image', 'gor_img1000x5000', 'Картинка для планшетов 1000х500') // уберём потому как надо доставать размеры ->set_value_type('url')
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
    Field::make('textarea', 'first_big_picture_text', 'Подпись  (для переноса строк писать <br/>)')
  ])

  ->add_tab('Второе видео', [
    Field::make('file', 'second_video')
      ->set_type('video'),
    Field::make('text', 'second_video_vimeo_id', 'ID файла на видео хостинге vimeo'),
    Field::make('textarea', 'second_video_text', 'Подпись  (для переноса строк писать <br/>)')
  ])

  ->add_tab('Третье видео', [
    Field::make('file', 'third_video')
      ->set_type('video'),
    Field::make('text', 'third_video_vimeo_id', 'ID файла на видео хостинге vimeo'),
    Field::make('textarea', 'third_video_text', 'Подпись  (для переноса строк писать <br/>)')
  ])

  ->add_tab('Четвертое видео', [
    Field::make('file', 'fourth_video')
      ->set_type('video'),
    Field::make('text', 'fourth_video_vimeo_id', 'ID файла на видео хостинге vimeo'),
  ])

  ->add_tab('MOON INSPIRATION', [
    Field::make('textarea', 'moon_inspiration_text', 'Текст лунного вдохновения'),
  ])

  ->add_tab('Картинки MOON', [
    Field::make('complex', 'moon_spirit_pictures')
      ->set_max(5)
      ->add_fields([
        Field::make('text', 'left_up_text', 'Левый верхний текст')->set_help_text('Пример "53"')
          ->set_width(33)
          ->set_attribute('maxLength', 2),
        Field::make('text', 'center_up_text', 'Центральный верхний текст')->set_help_text('Пример "M5"')
          ->set_width(33)
          ->set_attribute('maxLength', 2),
        Field::make('text', 'right_up_text', 'Правый верхний текст')->set_help_text('Пример "FF800-2"')
          ->set_width(33)
          ->set_attribute('maxLength', 7),
        Field::make('image', 'moon_spirit_pictur_1x', 'Картинка стандартная')
          ->set_help_text('Примерный размер 500х250')
          ->set_width(50),
        Field::make('image', 'moon_spirit_pictur_2x', 'Картинка большая для планшетов')
          ->set_help_text('Примерный размер 1000х500')
          ->set_width(50),
        Field::make('text', 'left_down_text', 'Левый нижний текст')->set_help_text('Пример "048"')
          ->set_width(50)
          ->set_attribute('maxLength', 3),
        Field::make('text', 'location_text', 'Локейшн текст')->set_help_text('Пример "MOSCOW"')
          ->set_width(50),
      ])
      ->set_min(4)
      ->set_layout("tabbed-vertical")
  ])

  ->add_tab('Предпоследняя картинка слева', [
    Field::make('image', 'last_left_picture_1x', 'Картинка рекомендуемый размер 1000х500')
      ->set_width(50),
    Field::make('image', 'last_left_picture_2x', 'Картинка для планшетов 2000х1000')
      ->set_width(50),
    Field::make('textarea', 'last_left_picture_text', 'Подпись  (для переноса строк писать <br/>)')
  ])

  ->add_tab('Послдняя картинка справа', [
    Field::make('image', 'last_right_picture_1x', 'Картинка рекомендуемый размер 1000х500')
      ->set_width(50),
    Field::make('image', 'last_right_picture_2x', 'Картинка для планшетов 2000х1000')
      ->set_width(50),
    Field::make('textarea', 'last_right_picture_text_1', 'Подпись  (для переноса строк писать <br/>)')
      ->set_width(33),
    Field::make('textarea', 'last_right_picture_text_2', 'Подпись  (для переноса строк писать <br/>)')
      ->set_width(33),
    Field::make('textarea', 'last_right_picture_text_3', 'Подпись  (для переноса строк писать <br/>)')
      ->set_width(33),
  ]);
