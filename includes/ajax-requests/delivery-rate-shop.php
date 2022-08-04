<?php

if (!defined('ABSPATH')) {
  exit;
}

require_once('delivery-count.php');

// echo $_POST['city'];
$adressCityTo = $_POST['city'];
$adressPostalCodeTo = $_POST['postalcode'];
$adressCountryTo = $_POST['country'];

if (isset($_POST["amount"])) {
  $amount = $_POST['amount'];
  $shiping_json = calculateDelivery(intval($amount), $adressCityTo, $adressPostalCodeTo, $adressCountryTo);
} else {
  // echo "error";
}

echo $shiping_json;

wp_die();
