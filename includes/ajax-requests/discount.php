<?php

if (!defined('ABSPATH')) {
  exit;
}

require_once('discount-count.php');

$discount_code_from_ajax = $_POST['discountcode'];

$discount_value = calculateDiscount($discount_code_from_ajax);

if ($discount_value)
  echo $discount_value;
else
  echo "false";

wp_die();
