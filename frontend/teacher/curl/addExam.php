<?php

    $str_json = file_get_contents('php://input'); // retrieve JSON content
    $response = json_decode($str_json, true); // decoding received JSON to array
    
    // if inputs are set then assign each input value to variables
	if(isset($response['examName'])) $examName = $response['examName'];
    if(isset($response['selectedQ'])) $selectedQ = $response['selectedQ'];  
    
    // API URL
    //$url = "https://web.njit.edu/~vm348/quiz-grader/backend/addExams.php";
    $url = "https://web.njit.edu/~hac9/quiz-grader/middle/addExam.php";

    $curl = curl_init($url);
    
    // setup request to send JSON string to the POST fields
    $data = array('examName' => $examName,'selectedQ' => $selectedQ);
    $payload = json_encode(array('exam' => $data));
    
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