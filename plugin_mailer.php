<?php
/*
Plugin Name: Email Return Path Fix
Author: DRW
*/

class email_return_path {
   function __construct() {
  add_action( 'phpmailer_init', array( $this, 'fix' ) );   
   }

function fix( $phpmailer ) {
    $phpmailer->Sender = $phpmailer->From;
}
}

new email_return_path();
?>

<!-- 
    Delete commit and
    need copy to plugins folder and activate 
-->