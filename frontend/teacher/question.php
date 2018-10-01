<?php

$str_json = file_get_contents('php://input'); 
$response = json_decode($str_json, true); // decoding received JSON to array

echo json_encode($response);

?>