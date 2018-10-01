<?php include("../layout/header.php"); ?>

<div class="addExam">
    <h1 align="center">New Exam</h1>
    <div class="row">
        <div class="col-25">
            <label for="fname">Exam Name</label>
        </div>
        <div class="col-75">
            <input type="text" id="examName" name="examName" placeholder="* Exam name">
        </div>
    </div>
    <div class="row">
        <div class="col-25">
            <label for="fname">Total Points</label>
        </div>
        <div class="col-75">
            <input type="text" id="totalPoints" name="totalPoints" placeholder="* Total Points">
        </div>
    </div>
</div>

<div id="chooseQuestion">
    <h1 align="center">Choose Question</h1>

     <!-- sorting search -->
     <div id="sortQuestions">
        <div id="sortInputs">
            <label for="fname">Sort by:</label>
            <div class="searchSort">
                <form>
                    <input type="text" placeholder="constraint" name="searchConstraint">
                    
                </form>
            </div>
            <div class="searchSort" style="padding-left: 5px">
                <form>
                    <input type="text" placeholder="difficulty" name="searchDifficulty">
                    
                </form>
            </div>
        </div>
    </div> 

    <div id="selectQuestionDiv">
        <table id="customers">
            <tr>
                <th>Question ID</th>
                <th>Question</th>
                <th>Function Name</th>
                <th>Constraint</th>
                <th>Difficulty</th>
                <th>Choose</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                <td>funcName</td>
                <td>for loop</td>
                <td>Medium</td>
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

<?php include("../layout/footer.php"); ?>
