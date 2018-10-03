<?php include("../layout/teacher_header.php"); ?>

<div class="newExam">
    <h1 align="center">New Exam</h1>
    <div class="row">
        <label for="fname">Exam Name</label>
        <input type="text" id="examName" name="examName" placeholder="* Exam name">
        <label for="fname">Total Points</label>
        <input type="text" id="totalPoints" name="totalPoints" placeholder="* Total Points">
        
    </div>
  
</div>

<div id="chooseQuestion">
    <h1 align="center">Choose Question</h1>

     <!-- sorting search -->
     <div id="sortQuestions">
        <div id="sortInputs">
            <label for="fname">Sort by:</label>
            <div class="searchSort">
                <input id="filterTopic" type="text" placeholder="topic" name="searchTopic" onkeyup="filterTopic()">
            </div>
            <div class="searchSort" style="padding-left: 5px">
                <input id="filterDifficulty" type="text" placeholder="difficulty" name="searchDifficulty" onkeyup="filterDifficulty()">
            </div>
        </div>
    </div> 

    <div id="selectQuestionDiv">
        <table id="questionTable">
            <tr>
                <th>Question ID</th>
                <th>Question</th>
                <th>Function Name</th>
                <th>Topic</th>
                <th>Difficulty</th>
                <th>Choose</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                <td>funcName</td>
                <td>if</td>
                <td>medium</td>
                <td><input id="addBtn" type="button" value="Add" onclick="addQuestionToExam()"></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                <td>funcName</td>
                <td>general</td>
                <td>easy</td>
                <td><input id="addBtn" type="button" value="Add" onclick="addQuestionToExam()"></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                <td>funcName</td>
                <td>arrays</td>
                <td>hard</td>
                <td><input id="addBtn" type="button" value="Add" onclick="addQuestionToExam()"></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                <td>funcName</td>
                <td>general</td>
                <td>easy</td>
                <td><input id="addBtn" type="button" value="Add" onclick="addQuestionToExam()"></td>
            </tr>
            <tr>
                <td>5</td>
                <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                <td>funcName</td>
                <td>general</td>
                <td>medium</td>
                <td><input id="addBtn" type="button" value="Add" onclick="addQuestionToExam()"></td>
            </tr>
           
        </table>
    </div> 
</div>

<div id="allExamQuestions">
    <h1 align="center">Added</h1>
    <div class="addedQuestionTable">
    <table id="examAddedQuestions">
        <tr>
            <th>Question ID</th>
            <th>Question</th>
            <th></th>
        </tr>
    </table>
    </div>
    <div id="examSaveBtn" style="text-align: center;" class="row">
        <p id="invalid_msg_modal"></p>
        <input id="saveBtn" type="button" value="Save" onclick="createNewExam()">
    </div>
</div>

<?php include("../layout/teacher_footer.php"); ?>
