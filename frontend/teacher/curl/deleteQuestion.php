<?php

    $str_json = file_get_contents('php://input'); // retrieve JSON content
    $response = json_decode($str_json, true); // decoding received JSON to array
    
    // if inputs are set then assign each input value to variables
	if(isset($response['id'])) $id = $response['id']; 
    
    // API URL
    $url = "https://web.njit.edu/~vm348/quiz-grader/backend/delProblems.php";

    $curl = curl_init($url);
    
    // setup request to send JSON string to the POST fields
    $data = array('id' => $id);
    $payload = json_encode($data);
    
    // attach encoded JSON string to the POST fields
    curl_setopt($curl, CURLOPT_POSTFIELDS, $payload);

    // set the content type to application/json
    curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type:application/json"));

    // return response instead of outputting
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    
    // execute the POST request
    $response = curl_exec($curl);
    
    // close cURL resource
    curl_close($curl);
    
    echo $response;

?>