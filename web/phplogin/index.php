<!DOCTYPE html>
<?php

session_start();
$users = array(
    'kullanici1' => 'sifre1',
    'kullanici2' => 'sifre2'
);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (isset($users[$username]) && $users[$username] == $password) {
        $_SESSION['username'] = $username; 
        header("Location: welcome.php"); 
        exit;
    } else {
        echo "Hatalı kullanıcı adı veya şifre";
    }
}


?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
      <div id="form">
        <h1>GİRİŞ</h1>
         <form name="form" method="post">
            <label>Kullanıcı Adı: </label>
            <input type="text" id="username" name="username" placeholder="kullanıcı adınızı giriniz"/><br><br>
            <label>Şifre: </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="password" id="password" name="password" placeholder="şifrenizi giriniz"/><br><br>
            <button id="btn" onclick="index.html"></button>
         </form>    
    </div>
</body>
</html>