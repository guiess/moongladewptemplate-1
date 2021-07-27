<?php

if (!defined('ABSPATH')) {
  exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('theme_options', 'Home Page Settings')
  // ->set_icon('dashicons-carrot') //добавить иконку
  ->add_tab('Socials', [
    Field::make('text', 'instagram_link', 'Instagram Link')
      ->set_width(50),
    Field::make('text', 'vimeo_link', 'Vimeo Link')
      ->set_width(50)
  ])

  ->add_tab('First video', [
    Field::make('file', 'first_video')
      ->set_type('video'),
    Field::make('text', 'first_video_vimeo_id', 'ID file on vimeo')
  ])

  ->add_tab("Pictures MONOWAY", [
    // Field::make('text', 'count_pictures', 'Колличество отображаемых картинок (направление отсчёта - сверху вниз)')
    //   ->set_attribute('maxLength', 3),

    Field::make('complex', 'gorizont_pictures', 'Pictures in horizontal scrolling')
      ->set_max(6)
      ->add_fields(
        [
          Field::make('textarea', 'title', 'Signature (to wrap lines, write <br/>)'),
          // ->set_default_value("умолчание"), //добавить значение по дефолту
          Field::make('image', 'gor_img500x250', 'Main picture 500x250') // уберём потому как надо доставать размеры ->set_value_type('url')
            ->set_width(33),
          Field::make('image', 'gor_img1000x5000', 'Picture for tablets 1000x500') // уберём потому как надо доставать размеры ->set_value_type('url')
            ->set_width(33)
        ]
      )
      ->help_text('It is necessary to add information on filling in the fields ...')
      ->set_layout("tabbed-vertical")
  ])

  ->add_tab('First big picture', [
    Field::make('image', 'first_big_picture_1x', 'Picture recommended size 1270x1570 (170KB)')
      ->set_value_type('url')
      ->set_width(33),
    Field::make('image', 'first_big_picture_2x', 'Picture for tablets 2540х3140 (700KB)')
      ->set_value_type('url')
      ->set_width(33),
    Field::make('textarea', 'first_big_picture_text', 'Signature (to wrap lines, write <br/>)')
  ])

  ->add_tab('Second video', [
    Field::make('file', 'second_video')
      ->set_type('video'),
    Field::make('text', 'second_video_vimeo_id', 'ID file on vimeo'),
    Field::make('textarea', 'second_video_text', 'Signature (to wrap lines, write <br/>)')
  ])

  ->add_tab('Third video', [
    Field::make('file', 'third_video')
      ->set_type('video'),
    Field::make('text', 'third_video_vimeo_id', 'ID file on vimeo'),
    Field::make('textarea', 'third_video_text', 'Signature (to wrap lines, write <br/>)')
  ])

  ->add_tab('Fourth video', [
    Field::make('file', 'fourth_video')
      ->set_type('video'),
    Field::make('text', 'fourth_video_vimeo_id', 'ID file on vimeo'),
  ])

  ->add_tab('MOON INSPIRATION', [
    Field::make('textarea', 'moon_inspiration_text', 'Moon inspiration text'),
  ])

  ->add_tab('Pictures MOON', [
    Field::make('complex', 'moon_spirit_pictures')
      ->set_max(5)
      ->add_fields([
        Field::make('text', 'left_up_text', 'Top left text')
          ->set_help_text('Example "53"')
          ->set_width(33)
          ->set_attribute('maxLength', 2),
        Field::make('text', 'center_up_text', 'Center top text')
          ->set_help_text('Example "M5"')
          ->set_width(33)
          ->set_attribute('maxLength', 2),
        Field::make('text', 'right_up_text', 'Top right text')
          ->set_help_text('Example "FF800-2"')
          ->set_width(33)
          ->set_attribute('maxLength', 7),
        Field::make('image', 'moon_spirit_pictur_1x', 'Main picture')
          ->set_help_text('Approximate size 500x250')
          ->set_width(50),
        Field::make('image', 'moon_spirit_pictur_2x', 'Picture for tablets')
          ->set_help_text('Approximate size 1000х500')
          ->set_width(50),
        Field::make('text', 'left_down_text', 'Bottom left text')
          ->set_help_text('Example "048"')
          ->set_width(50)
          ->set_attribute('maxLength', 3),
        Field::make('text', 'location_text', 'Location text')
          ->set_help_text('Example "MOSCOW"')
          ->set_width(50),
      ])
      ->set_min(4)
      ->set_layout("tabbed-vertical")
  ])

  ->add_tab('Last picture on the left', [
    Field::make('image', 'last_left_picture_1x', 'Main picture 1000х500')
      ->set_help_text('Approximate size 1000х500')
      ->set_width(50),
    Field::make('image', 'last_left_picture_2x', 'Picture for tablets 2000х1000')
      ->set_help_text('Approximate size 2000х1000')
      ->set_width(50),
    Field::make('textarea', 'last_left_picture_text', 'Signature (to wrap lines, write <br/>)')
  ])

  ->add_tab('Last picture on the right', [
    Field::make('image', 'last_right_picture_1x', 'Main picture (approximate size 1000x500)')
      ->set_width(50),
    Field::make('image', 'last_right_picture_2x', 'Picture for tablets (approximate size 2000х1000)')
      ->set_width(50),
    Field::make('textarea', 'last_right_picture_text_1', 'Signature bottom left (to wrap lines, write <br/>)')
      ->set_width(33),
    Field::make('textarea', 'last_right_picture_text_2', 'Signature bottom center (to wrap lines, write <br/>)')
      ->set_width(33),
    Field::make('textarea', 'last_right_picture_text_3', 'Signature bottom right (to wrap lines, write <br/>)')
      ->set_width(33),
  ]);
