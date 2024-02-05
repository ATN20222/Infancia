<?php

// Declare variables
$name = $_POST["name"];
$email = $_POST["email"];
$NurserySize = $_POST["NurserySize"];
$subject = $_POST["subject"];
$message = $_POST["message"];

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp-mail.outlook.com';                    
    $mail->SMTPAuth   = true;                            
    $mail->Username   = 'info@infancia.app';                    
    $mail->Password   = 'Mind12345@';                              
    $mail->SMTPSecure = 'tls';            
    $mail->Port       = 587;                                    

    //Recipients
    $mail->setFrom('info@infancia.app', $name);
    $mail->addAddress('info@infancia.app');     

    $mail->isHTML(true);                                  
    $mail->Subject = $subject;
    $mail->Body    = "<p><strong>From:</strong> $name &lt;$email&gt;</p><br><p><strong>Nursery Size:</strong> $NurserySize</p><br>" . $message ."<br><p>this mail from infancia.app</p>";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    // echo 'Message has been sent';
    echo '<script>alert("Message has been sent"); window.location.href = "index.html";</script>';

} catch (Exception $e) {
    echo '<script>alert("Message could not be sent");window.location.href = "index.html";</script>';
}