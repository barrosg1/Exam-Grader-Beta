</div>
    <div class="footer">
        <p>Quiz Grader 2018</p>
    </div>

    <script>
        // Add active class to the current button (highlight it)
        var takeExam = document.getElementById("takeExam");
        var viewExam = document.getElementById("viewExam");
        
        switch(window.location.pathname) {
            case "/beta/frontend/student/take_exam.php": takeExam.className += " active";
            break;
            case "/beta/frontend/student/view_exam.php": viewExam.className += " active"
            break;
            default: "/";

        }
    </script>
    <script src="../scripts.js"></script>
</body>
<html>

