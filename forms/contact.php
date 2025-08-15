<?php
$to = 'bruno@creativecorner.com.br';
$subject = $_POST['subject'];
$message = "Nome: ".$_POST['name']."\nEmail: ".$_POST['email']."\nMensagem: ".$_POST['message'];
$headers = "From: ".$_POST['email'];

if(mail($to, $subject, $message, $headers)){
    echo "OK";
} else {
    echo "Erro ao enviar o e-mail.";
}
?>
