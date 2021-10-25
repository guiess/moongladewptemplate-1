
<?php

if (!defined('ABSPATH')) {
  exit;
}

// $email_from = 'moonglade@u1441555.isp.regruhosting.ru';
$email_from = $_POST['fbemail'];
$email_to = carbon_get_theme_option("moon_support_email");
$message = $_POST['fbmessage'];
$sendersName = $_POST['fbname'];

$form_subject = "An email from your website buyer. Sender's name " . $sendersName;

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
// $headers .= "Content-Transfer-Encoding: base64\r\n";
$headers .= "From:" . "From MOONGLADE buyer: " . $sendersName . " <$email_from>\r\n";

$success_send = wp_mail($email_to, $form_subject, $message, $headers);

if ($success_send) {
  // echo '    success';
  echo 'success';
} else {
  // echo '    error';
  echo 'error';
}

wp_die();
