<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "info@mindholding.net";
    $headers = "From: $name <$email>";

    $email_message = "Subject: $subject\n\nMessage:\n$message";

    mail($to, $subject, $email_message, $headers);
    
    header("Location: index.html");
    exit();
}
?>
