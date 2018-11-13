<?php

    $str_json = file_get_contents('php://input'); // retrieve JSON content
    $response = json_decode($str_json, true); // decoding received JSON to array
    
    if(isset($response['topic'])) $topic = $response['topic'];
    if(isset($response['constraint'])) $constraint = $response['constraint'];
    if(isset($response['difficulty'])) $difficulty = $response['difficulty'];
    if(isset($response['question'])) $question = $response['question'];  
    if(isset($response['functionName'])) $functionName = $response['functionName'];  
    if(isset($response['testCase1'])) $testCase1 = $response['testCase1'];  
    if(isset($response['testCase2'])) $testCase2 = $response['testCase2'];
    if(isset($response['testCase3'])) $testCase3 = $response['testCase3'];
    if(isset($response['testCase4'])) $testCase4 = $response['testCase4'];
    if(isset($response['testCase5'])) $testCase5 = $response['testCase5'];
    if(isset($response['testCase6'])) $testCase6 = $response['testCase6'];
    
    // API URL
    //$url = "https://web.njit.edu/~vm348/quiz-grader/backend/addProblems.php";
    $url = "https://web.njit.edu/~hac9/quiz-grader/middle/addQuestion.php";

    $curl = curl_init($url);
    
    $data = array(
        'topic' => $topic,
        'constraint' => $constraint,
        'difficulty' => $difficulty, 
        'question' => $question, 
        'functionName' => $functionName, 
        'testCase1' => $testCase1, 
        'testCase2' => $testCase2, 
        'testCase3' => $testCase3, 
        'testCase4' => $testCase4, 
        'testCase5' => $testCase5, 
        'testCase6' => $testCase6
    );

    $payload = json_encode(array('question' => $data));
    
    curl_setopt($curl, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type:application/json"));
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $res = curl_exec($curl);
    curl_close($curl);
    
    echo $res;

?>