<?php

    $str_json = file_get_contents('php://input'); // retrieve JSON content
    $response = json_decode($str_json, true); // decoding received JSON to array
    
	if(isset($response['id'])) $id = $response['id'];
    if(isset($response['release'])) $release = $response['release'];
    if(isset($response['gradedQuestions'])) $gradedQuestions = $response['gradedQuestions'];  
    
    $url = "https://web.njit.edu/~hac9/quiz-grader/middle/releaseExam.php";
    $curl = curl_init($url);

    $data = array('id' => $id,'release' => $release, 'gradedQuestions' => $gradedQuestions);

    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type:application/json"));
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);    
    curl_close($curl);
    
    echo $response;

?>