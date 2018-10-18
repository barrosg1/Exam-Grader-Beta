<?php

    $str_json = file_get_contents('php://input'); // retrieve JSON content
    $response = json_decode($str_json, true); // decoding received JSON to array
    
	if(isset($response['topic'])) $topic = $response['topic'];
    if(isset($response['difficulty'])) $difficulty = $response['difficulty'];
    if(isset($response['question'])) $question = $response['question'];    
    
    // API URL
    //$url = "https://web.njit.edu/~vm348/quiz-grader/backend/addProblems.php";
    $url = "https://web.njit.edu/~hac9/quiz-grader/middle/addQuestion.php";

    $curl = curl_init($url);
    
    $data = array('topic' => $topic,'difficulty' => $difficulty, 'question' => $question);
    $payload = json_encode(array('question' => $data));
    
    curl_setopt($curl, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type:application/json"));
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);
    
    echo $response;

?>