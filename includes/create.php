<?php
/*
Template Name: create2
*/

// echo "sdfsdasasdf";

// die();

require_once('stripe/init.php');
require_once('ajax-requests/discount-count.php');
require_once('ajax-requests/delivery-count.php');

// $stripe = new \Stripe\StripeClient('sk_test_BQokikJOvBiI2HlWgH4olfQ2');
// $customer = $stripe->customers->create([
//     'description' => 'example customer',
//     'email' => 'email@example.com',
//     'payment_method' => 'pm_card_visa',
// ]);
// echo $customer;

// This is your test secret API key.
// \Stripe\Stripe::setApiKey('sk_test_51L8vkDCqha03DodgnUGYFBf42LRRI7UsckHq1V0mIq6J0rstGctlhtBBpAHMIOwnMeRX6MxwPHryFTD6za2g1NaY00fkvAQA1w');
if (carbon_get_theme_option('settings_payment_mode') == "test") {
  $secretKey = carbon_get_theme_option('stripe_secret_key_test');
} else if (carbon_get_theme_option('settings_payment_mode') == "live") {
  $secretKey = carbon_get_theme_option('stripe_secret_key_live');
}
\Stripe\Stripe::setApiKey($secretKey);

function calculateOrderAmount(array $items): int
{
  $amount = 0;
  foreach ($items as &$item) {
    $amount += $item["price"] * $item["quantity"];
  }
  unset($item); // разорвать ссылку на последний элемент
  // echo ($amount);
  // die();
  return $amount;
}

function calculateGoodsAmount(array $items): int
{
  $amount = 0;
  foreach ($items as &$item) {
    $amount += $item["quantity"];
  }
  unset($item); // разорвать ссылку на последний элемент
  // echo ($amount);
  // die();
  return $amount;
}

header('Content-Type: application/json');

try {
  // retrieve JSON from POST body
  $jsonStr = file_get_contents('php://input');
  $jsonObj = json_decode($jsonStr, true);
  $jsonObjCart = $jsonObj["merged"]["cart"];
  $jsonObjCustomer = $jsonObj["merged"]["customer"];

  // var_dump(json_encode($jsonObjCart));
  // echo json_encode($jsonObjCart);
  $amount_value_int = calculateOrderAmount($jsonObjCart) + 0;
  $amount_goods = calculateGoodsAmount($jsonObjCart) + 0;


  if (array_key_exists('discountCode', $jsonObjCustomer)) {
    $discount_value_string = calculateDiscount($jsonObjCustomer["discountCode"]);
    $discount_value = mb_substr($discount_value_string, 3);
    $discount_value_int = abs($discount_value + 0);
  } else {
    $discount_value_int = 0;
  }

  // if (stristr($discount_value_string, 'fix')) {    
  //   // echo "fix";
  // }

  if (stristr($discount_value_string, 'per')) {
    // echo "per";
    $discount_value_int = $amount_value_int * $discount_value_int / 100;
  }

  $adressCityTo = $jsonObjCustomer["city"];
  $adressPostalCodeTo = $jsonObjCustomer["postalCode"];
  $adressCountryTo = $jsonObjCustomer["country"];
  $delivery_json = calculateDelivery($amount_goods, $adressCityTo, $adressPostalCodeTo, $adressCountryTo);
  $delivery_json_obj = json_decode($delivery_json, true);
  $delivery_json_obj_deliv_codes = $delivery_json_obj["shippingcode"];
  $delivery_json_obj_deliv_prices = $delivery_json_obj["price"];
  $key = array_search($jsonObjCustomer["deliveryCode"], $delivery_json_obj_deliv_codes);
  $delivery_price = $delivery_json_obj_deliv_prices[$key];
  $delivery_price_int = $delivery_price + 0;

  $totalamount = $amount_value_int + $delivery_price_int - round($discount_value_int);
  $totalamount_cents = $totalamount * 100;

  // if ($totalamount)
  //   echo $totalamount;
  // else
  //   echo "false";

  // die();

  // Create a PaymentIntent with amount and currency
  $paymentIntent = \Stripe\PaymentIntent::create([
    // 'amount' => 1400,
    'amount' => $totalamount_cents,
    'currency' => 'usd',
    'automatic_payment_methods' => [
      'enabled' => true,
    ],
    //https://www.youtube.com/watch?v=EildM6OMcoQ&t=154s&ab_channel=TraversyMedia
    //https://github.com/bradtraversy/php_stripe_paypage
    // 'customer_id' => $customers->id,
  ]);

  $output = [
    'clientSecret' => $paymentIntent->client_secret,
  ];

  echo json_encode($output);
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}

die();
