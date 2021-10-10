<?php
/*
Template Name: Страница для тестов
*/

$countries_string = carbon_get_theme_option("moon_countries_list");
$countries_array = explode("\n", $countries_string);
sort($countries_array);

echo $countries_array[2];

var_dump($countries_array);
