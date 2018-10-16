<!doctype html>
<html lang=''>

<head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../css/style.css">
    
    <title>Student</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- <script src="../js/getAllStudents.js"></script> -->
    <script src="../js/logout.js"></script>
    <script src="../js/utils.js"></script>   
    <script src="../js/student.js"></script> 

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
            <li ><a href='./view_exam.php'><span>View Exam</span></a></li>
            <li ><a href='./testing.php'><span>Testing</span></a></li>
           
            <li id="logout" style="float:right" onclick="logout()"><a href='#'><span>Logout</span></a></li>
        </ul>

    </div>

    <div class="container">

