<?php

$frm_name  = "Обратный звонок";
$recepient = "maxon21@tut.by";
$sitename  = "karbeltex.by";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);


$message = '
            <p>Заявка: '.$frm_name.'</p>
            <p>Контактное лицо: '.$name.'</p>
            <p>Телефон: '.$tel.'</p>
        ';


mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
