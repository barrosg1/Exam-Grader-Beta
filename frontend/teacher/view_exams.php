<?php include("../layout/header.php"); ?>

    <div class="viewExams">
        <h1 align="center">Exams</h1>
        <div id="selectQuestionDiv">
        <table id="examsTable" class="tableDisplay">
            <tr>
                <th>Exam Name</th>
                <th></th>
            </tr>

            <tbody id="examsDisplay"></tbody> <!-- Data will be displayed here -->
            <tr>
                <td>Exam1</td>
                <td>
                    <input id="editBtn"  class="editBtn" type="button" value="delete">
                    <input id="deleteBtn" class="deleteBtn" type="button" value="edit">
                </td>
            </tr>           
        </table>
    </div>
    </div>

