<?php

$email = $_POST['email'];
$message = $_POST['message'];

if (empty($email) || empty($message)) {
    echo "Name and email are mandatory!";
    exit;
}

$email_from = $email;
$email_subject = "New Message Received";
$email_body = "You have received a new message from $email \n".
              "Here is the message: \n $message \n".
$email_to = "geronimoadalia@gmail.com";
$headers = "From: $email_from";

mail($email_to, $email_subject, $email_body, $headers); 

//header("Location:home.html");
?>

<script>window.history.back();</script>