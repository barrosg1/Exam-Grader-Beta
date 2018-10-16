<?php

    $str_json = file_get_contents('php://input'); // retrieve JSON content
    $response = json_decode($str_json, true); // decoding received JSON to array
    
    // if inputs are set then assign each input value to variables
    if(isset($response['examId'])) $examId = $response['examId']; 
    if(isset($response['studentId'])) $studentId = $response['studentId']; 
    if(isset($response['questions'])) $questions = $response['questions']; 
    
    // API URL
    //$url = "https://web.njit.edu/~vm348/quiz-grader/backend/addUserExam.php";
    $url = "https://web.njit.edu/~hac9/quiz-grader/middle/submitExam.php";

    $curl = curl_init($url);
    
    // setup request to send JSON string to the POST fields
    $data = array('studentId' => $studentId, 'examId' => $examId, 'questions' => $questions);
    
    // attach encoded JSON string to the POST fields
    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));

    // set the content type to application/json
    curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type:application/json"));

    // return response instead of outputting
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    
    // execute the POST request
    $response = curl_exec($curl);
    
    // close cURL resource
    curl_close($curl);
    
    echo json_encode($response);

?>