<?php 
//echo $_POST["username"]; 

$username = $_POST['username'];
$password = $_POST['password'];

if (($username == 'kofi' ) && ($password == '1234')) {
    // echo "Welcome $username";
    header("Location:nice-html/ltr/index.php");
    exit();
    
}
else {
    // echo 'Incorrect username or password.Try again!';
    header("Location:login.php");
    exit();
}