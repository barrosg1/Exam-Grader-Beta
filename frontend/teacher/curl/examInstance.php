<?php

// API URL
    $url = "https://web.njit.edu/~vm348/quiz-grader/backend/getInstance.php"; 
    //$url = "https://web.njit.edu/~hac9/quiz-grader/middle/getExams.php";

    $curl = curl_init($url);    
    curl_setopt($curl, CURLOPT_POSTFIELDS, null);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type:application/json"));
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);    
    $response = curl_exec($curl);    
    curl_close($curl);
    echo $response
?>