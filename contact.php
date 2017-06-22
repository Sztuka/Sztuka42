<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['msg'];
$formcontent="From: $name \n Message: $message";
$recipient = "kontakt@sztuka42.pl";
$subject = "Contactform";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Dziękuję!";

$url = 'index.html';
echo '<META HTTP-EQUIV=Refresh CONTENT="0; URL='.$url.'">';  
?>
 