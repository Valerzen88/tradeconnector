<?php
require 'lib/vendor/autoload.php';
include('lib/json2mysql/config.php');
include('lib/json2mysql/include.classloader.php');

use GuzzleHttp\Client;

$classLoader = new ClassLoader();
try {
    $classLoader->addToClasspath(ROOT);
} catch (Exception $e) {
}

$clientId=null;
$client = new GuzzleHttp\Client([
        'base_uri' => 'http://mt4.mtapi.be/Connect',
        'timeout'  => 5.0,
        'headers' => ['accept' => 'text/json']
    ]);
	
try {
	$response = $client->request('GET', '?user=1300241905&password=24QCMSB&host=185.169.252.66&port=443');
	if ($response->getStatusCode() == 200) {
		$obj = json_decode($response->getBody());
		$clientId=$obj;
		//echo "<br>clientId=".$clientId."<br>";
	}
} catch (\GuzzleHttp\Exception\GuzzleException | DatabaseException $e) {
	var_dump($e);
}

if(isset($_GET['getOrderHistory'])){
	$today = date_create()->format('Y-m-d\\TH:i:s'); 
	$yesterday = date_create('-5 day')->format('Y-m-d\\TH:i:s'); 
	if(isset($_GET['fromDate'])&&$_GET['fromDate']!=null){$fromDate=$_GET['fromDate'];}else{$fromDate=$today;}
	if(isset($_GET['toDate'])&&$_GET['toDate']!=null){$toDate=$_GET['toDate'];}else{$toDate=$yesterday;}
	$client = new GuzzleHttp\Client([
			'base_uri' => 'http://mt4.mtapi.be/OrderHistory',
			'timeout'  => 5.0,
			'headers' => ['accept' => 'text/json']
		]);
		
	try {
		//var_dump('http://mt4.mtapi.be/OrderHistory'.'?id='.$clientId.'&from='.$toDate.'&to='.$fromDate);
		$response = $client->request('GET', '?id='.$clientId.'&from='.$toDate.'&to='.$fromDate);
		if ($response->getStatusCode() == 200) {
			$obj = json_decode($response->getBody());
			echo json_encode($obj);
			//var_dump($obj);
		}
	} catch (\GuzzleHttp\Exception\GuzzleException | DatabaseException $e) {
		var_dump($e);
	}	
}
if(isset($_GET['getCurrentOrders'])){
	$client = new GuzzleHttp\Client([
			'base_uri' => 'http://mt4.mtapi.be/OpenedOrders',
			'timeout'  => 5.0,
			'headers' => ['accept' => 'text/json']
		]);
		
	try {
		$response = $client->request('GET', '?id='.$clientId);
		if ($response->getStatusCode() == 200) {
			$obj = json_decode($response->getBody());
			echo json_encode($obj);
			//var_dump($obj);
		}
	} catch (\GuzzleHttp\Exception\GuzzleException | DatabaseException $e) {
		var_dump($e);
	}	
}
?>