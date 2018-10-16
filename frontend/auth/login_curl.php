<?php
    $str_json = file_get_contents('php://input'); // retrieve JSON content
    $response = json_decode($str_json, true); // decoding received JSON to array
    
    $username="none";$password="none"; 

    // if inputs are set then assign each input value to variables
	if(isset($response['username'])) $username = $response['username'];
	if(isset($response['password'])) $password = $response['password'];
    
    // API URL
    $url = "https://web.njit.edu/~hac9/quiz-grader/middle/login.php"; 

    $curl = curl_init($url);
    
    // setup request to send JSON string to the POST fields
    $data = array('username' => $username,'password' => $password);
    $payload = json_encode(array("user" => $data));
    
    // attach encoded JSON string to the POST fields
    curl_setopt($curl, CURLOPT_POSTFIELDS, $payload);

    // set the content type to application/json
    curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type:application/json"));

    // return response instead of outputting
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    
    // execute the POST request
    $res = curl_exec($curl);
    
    // close cURL resource
    curl_close($curl);

    echo $res;
    	   
?>