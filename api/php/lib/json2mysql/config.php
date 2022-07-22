<?php
/**
 * Licensed under Creative Commons 3.0 Attribution
 * Copyright Adam Wulf 2013
 */

define("ROOT", dirname(__FILE__) . "/");
const DATABASE_HOST = "127.0.0.1:3308";
const DATABASE_NAME = "kinozone";
const DATABASE_USER = "root";
const DATABASE_PASS = "root";
const JSONTOMYSQL_LOCKED = false;

// Create connection
$conn = mysqli_connect(DATABASE_HOST, DATABASE_USER, DATABASE_PASS);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$res=mysqli_select_db($conn,DATABASE_NAME);
if (!$res) {
    die("Connection failed: " . mysqli_connect_error());
}