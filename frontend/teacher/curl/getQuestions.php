<?php

// API URL
    //$url = "https://web.njit.edu/~vm348/quiz-grader/backend/getProblems.php"; 
    $url = "https://web.njit.edu/~hac9/quiz-grader/middle/getQuestions.php";

    $curl = curl_init($url);
    
    // attach encoded JSON string to the POST fields
    curl_setopt($curl, CURLOPT_POSTFIELDS, null);

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