<?php
$name   = $_GET['name'] ;
$email  = $_GET['email'];
$adress = $_GET['adress'];

// because we used get method; if we use post we change it, as is 
//we might need to close php because of working with html
echo "Welcome motherfu, I think we made a deal" . "<br>";
echo "<p>we might bring an entire page here, don't we </p>"
//then we ask if his $email . and $adress . is validate;
?>