<?php

if (!defined('ABSPATH')) {
  exit;
}

function calculateDiscount(string $discount_code): string
{
  $discount_value = "";

  $table_fixed = carbon_get_theme_option('coupons_fixed');
  $table_percent = carbon_get_theme_option('coupons_percents');

  if (!empty($table_fixed)) {
    foreach ($table_fixed as $tr) {
      $code_from_base = $tr["coupons_fixed_code"];
      if ($code_from_base == $discount_code) {
        $discount_value = "fix" . $tr["coupons_fixed_value"];
        unset($tr);
        return $discount_value;
        break;
      }
    }
    if (!$discount_value && !empty($table_percent)) {
      foreach ($table_percent as $tr) {
        $code_from_base = $tr["coupons_percent_code"];
        if ($code_from_base == $discount_code) {
          $discount_value = "per" . $tr["coupons_percent_value"];
          unset($tr);
          return $discount_value;
          break;
        }
      }
    }
    if (!$discount_value) {
      return 0;
    }
  }
  
  return $discount_value;
}
