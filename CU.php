<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];
    $email_form = "";
    $email_subject = "New Form Submission";
    $email_body = "User Name: $name.\n".
                  "User Email: $visitor_email.\n".
                  "User Message: $message.\n";
    $to = "rashmiwijekoon20@gmail.com";
    $headers = "From: $email_form \r\n";
    $headers = "Reply-To: $visitor_email \r\n";
    mail($to,4email_subject,$email_body,$headers);
    header(""Location: CU.html);
?>