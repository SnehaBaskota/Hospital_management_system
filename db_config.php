<?php
$servername = "localhost"; // or your server IP address
$username = "root"; // your MySQL username
$password = ""; // your MySQL password (leave blank if using the default)
$dbname = "Hospital management project"; // the name of your database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
