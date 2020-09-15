<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

<title>Malooka</title>

</head>

<body>


<?php
    $email = $_POST["semail"];
    $text = "$email,html\n";
    $file = 'emails.txt';
    $current = file_get_contents($file);
    $current .= $text;
    file_put_contents($file, $current);
?>

</body>
</html>