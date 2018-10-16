<?php

$str_json = file_get_contents('php://input'); // retrieve JSON content
$response = json_decode($str_json, true); // decoding received JSON to array

if(isset($response['studentId'])) $studentId = $response['studentId']; 

$url = "https://web.njit.edu/~vm348/quiz-grader/backend/getInstance.php"; 

$curl = curl_init($url);
$data = array('studentId' => $studentId);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type:application/json"));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($curl);
curl_close($curl);

echo $response;

?>