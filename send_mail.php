<?php

$to      = 'georgivardanyan333@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: georgivardanyan333@gmail.com' . "\r\n" .
    'Reply-To: georgivardanyan333@gmail.com' . "\r\n";

mail($to, $subject, $message);

header('Location: ' . $_SERVER['HTTP_REFERER']);



