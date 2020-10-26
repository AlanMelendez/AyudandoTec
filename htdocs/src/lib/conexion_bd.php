<?php
$host = "localhost"; #En el httpd.config esta como 192.168.0.29:80
					#Pero lo marca como localhost.
$dbuser = "root";
$dbpwd = "";
$db = "aytc";

$connect = mysqli_connect($host, $dbuser, $dbpwd,$db);
	if(!$connect)
		echo ("No se ha conectado a la base de datos");

?>