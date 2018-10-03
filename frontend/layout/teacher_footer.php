</div>
    <div class="footer">
        <p>Quiz Grader 2018</p>
    </div>

    <script>
        // Add active class to the current button (highlight it)
        var createQuestion = document.getElementById("create");
        var createExam = document.getElementById("exam");
        var viewExams = document.getElementById("viewExams");
        
        switch(window.location.pathname) {
            case "/beta/frontend/teacher/create_question.php": createQuestion.className += " active";
            break;
            case "/beta/frontend/teacher/create_exam.php": createExam.className += " active"
            break;
            case "/beta/frontend/teacher/view_exams.php": viewExams.className += " active"
            break;
            
            default: "/";

        }
    </script>
    <script src="../teacher.js"></script>
    <script src="../utils.js"></script>
</body>
<html>

