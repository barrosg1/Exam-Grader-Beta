<?php include("../layout/instructor_header.php"); ?>

    <div id="studentExamInstance" class="boxContainer">
        <h1 align="center">Students</h1>
        <div id="selectQuestionDiv">
        <table id="examsTable" class="tableDisplay">
            <tr>
                <th>UCID</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>

            <tbody id="studentsDisplay"></tbody> <!-- Data will be displayed here -->         
        </table>
    </div>
    </div>

     <div id="studentExamInstance" class="boxContainer">
     <h1 align="center">Exams</h1>
        <div id="selectQuestionDiv">
        <table id="examsTable" class="tableDisplay">
            <tr>
                <th>Exam Name</th>
            </tr>

            <tbody id="studentExamDisplay"></tbody> <!-- Data will be displayed here -->         
        </table>
    </div>
    </div>

    <div id="evaluateExam" class="boxContainer" style="display:none"></div>
