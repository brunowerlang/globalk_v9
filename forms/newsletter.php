<?php
$to = 'bruno@creativecorner.com.br';
$subject = "Nova inscrição na newsletter";
$message = "Novo inscrito: ".$_POST['email'];
$headers = "From: contato@seudominio.com"; // use um e-mail do seu domínio

if(mail($to, $subject, $message, $headers)){
    echo "OK"; // necessário para o JS reconhecer sucesso
} else {
    echo "Erro ao enviar o e-mail.";
}
?>
