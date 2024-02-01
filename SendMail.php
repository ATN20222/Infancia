<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    $to = "aaballa@mindholding.net";
    $headers = "From: $name <$email>\r\n";  
    $email_message = "Subject: $subject\n\nMessage:\n$message";
    $result =mail($to, $subject, $email_message, $headers);

    if ($result) {  
        header("Location: index.html");
        exit();
    } else {
        echo "Failed to send email.";
    }
}
?>

