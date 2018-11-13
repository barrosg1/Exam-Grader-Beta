<!doctype html>
<html lang=''>

<head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../css/style.css">
    
    <title>Instructor</title>

    <script src="../teacher/js/teacher.js"></script>
    <script src="../teacher/js/getAllExams.js"></script>
    <script src="../teacher/js/getQuestionsCQ.js"></script>
    <script src="../teacher/js/getQuestionsExam.js"></script>
    <script src="../teacher/js/getAllStudents.js"></script>
    
    <script src="../utils/examInstance.js"></script>
    <script src="../utils/filter.js"></script> 
    <script src="../auth/logout.js"></script>
    
    <script>
      if(localStorage.getItem("id") === null || localStorage.getItem("instructor") === null) {
          window.location.replace('../auth/login.php');
      }

    </script>
    
</head>

<body>
    <div id='cssmenu'>
        <ul>
                <li id="create"><a href='./create_question.php'><span>Question</span></a>
                </li>
                <li ><a href='./create_exam.php'><span>New Exam</span></a></li>
                <li ><a href='./view_exams.php'><span>View Exams</span></a></li>
                <li ><a href='./evaluate_exam.php'><span>Evaluate Exam</span></a></li>
           
            <li id="logout" style="float:right" onclick="logout()"><a href='#'><span>Logout</span></a></li>
        </ul>

    </div>

    <div class="container">

