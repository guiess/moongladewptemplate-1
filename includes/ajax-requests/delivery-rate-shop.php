<?php

if (!defined('ABSPATH')) {
  exit;
}

require_once('delivery-count.php');

// echo $_POST['city'];
$adressCityTo = $_POST['city'];
$adressPostalCodeTo = $_POST['postalcode'];
$adressCountryTo = $_POST['country'];

$shiping_json = calculateDelivery($adressCityTo, $adressPostalCodeTo, $adressCountryTo);

echo $shiping_json;

wp_die();