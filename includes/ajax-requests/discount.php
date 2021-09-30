<?php

$discount_code_from_ajax = $_POST['discountcode'];

$table_fixed = carbon_get_theme_option('coupons_fixed');
$table_percent = carbon_get_theme_option('coupons_percents');

if (!empty($table_fixed)) {
  foreach ($table_fixed as $tr) {
    $code_from_base = $tr["coupons_fixed_code"];
    if ($code_from_base == $discount_code_from_ajax) {
      $discount_value = "fix" . $tr["coupons_fixed_value"];
      echo $discount_value;
      break;
    }
  }
  if (!$discount_value && !empty($table_percent)) {
    foreach ($table_percent as $tr) {
      $code_from_base = $tr["coupons_percent_code"];
      if ($code_from_base == $discount_code_from_ajax) {
        $discount_value = "per" . $tr["coupons_percent_value"];
        echo $discount_value;
        break;
      }
    }
  }
  if (!$discount_value) {
    echo "false";
  }
}

wp_die();
