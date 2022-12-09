<?php
$name = $_GET["rname"];
$secname = $_GET["rpwd"];

//database conection

$servername = "localhost";
$username = "root";
$password = "";
$database = "reg";
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error){
    die("Conneciton failed".$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(name, secname)
        values(?, ?)");
    $stmt->bind_param("ss", $name, $secname);
    $stmt->execute();
    header("Location: https://click.udlap.mx");
    $stmt->close();
    $conn->close();
}

