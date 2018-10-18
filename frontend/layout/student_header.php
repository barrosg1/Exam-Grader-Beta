<!doctype html>
<html lang=''>

<head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../css/style.css">
    
    <title>Student</title>
    
    <script src="../student/js/student.js"></script> 
    <script src="../student/js/getAllExamsStudent.js"></script>
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

            <li ><a href='./all_exams.php'><span>Take Exam</span></a></li>
            <li ><a href='./view_exam.php'><span>See Grades</span></a></li>
            <li ><a href='./testing.php'><span>Testing</span></a></li>
           
            <li id="logout" style="float:right" onclick="logout()"><a href='#'><span>Logout</span></a></li>
        </ul>

    </div>

    <div class="container">

