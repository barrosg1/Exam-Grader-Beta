<?php include("../layout/header.php"); ?>

<div class="addQuestion">
    <h1 align="center">Create Question</h1>
    <p align="center">* = Required</p>
    <div>
        <form>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Function Name</label>
                </div>
                <div class="col-75">
                    <input type="text" id="functionName" name="funcName" placeholder="* Function name">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="lname">Constraint</label>
                </div>
                <div class="col-75">
                    <input type="text" id="constraint" name="constraint" placeholder="Add constraint">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="country">Difficulty</label>
                </div>
                <div class="col-75">
                    <select id="difficulty" name="difficulty">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="question">Question</label>
                </div>
                <div class="col-75">
                    <textarea id="question" name="subject" placeholder="* Write question.. " style="height:200px"></textarea>
                </div>
            </div>
            <div id="createBtn" style="display:flex; float:right" class="row">
                <p id="invalid_msg"></p>
                <input type="button" value="Add Question" onclick="createQuestion()">
            </div>
        </form>
    </div>
</div>

<!-- Questions Display -->
<div class="questionBank">
    <h1 align="center">Added Questions</h1>

   <!-- sorting -->
   <div id="sortQuestions">
        <div id="sortInputs">
            <label for="fname">Sort by:</label>
            <div id="searchSort">
                <form>
                    <input type="text" placeholder="constraint" name="searchConstraint">
                    
                </form>
            </div>
            <div id="searchSort">
                <form>
                    <input type="text" placeholder="difficulty" name="searchDifficulty">
                    
                </form>
            </div>
        </div>
    </div> 

    <div class="questionList">
        <div class="question">
            <p id="parDiff">Medium</p>
            <p id="questionDisplay">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
           </p>
            <strong><p style="float:left; font-size: 9pt; color: gray">Name: funcName |  Constraint: for loop</p></strong>
            
            <input id="editBtn" type="button" value="Edit" onclick="editQuestion()">
            <input id="deleteBtn" type="button" value="Delete" onclick="deleteQuestion()">
        </div> 
    </div>

    <!-- The Modal -->
    <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <span class="close">&times;</span>
        <form>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Function Name</label>
                </div>
                <div class="col-75">
                    <input type="text" id="modalFunctionName" name="firstname" placeholder="* Function name">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="lname">Constraint</label>
                </div>
                <div class="col-75">
                    <input type="text" id="modalConstraint" name="lastname" placeholder="Add constraint">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="country">Difficulty</label>
                </div>
                <div class="col-75">
                    <select id="modalDifficulty" name="country">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="modalQuestion">Question</label>
                </div>
                <div class="col-75">
                    <textarea id="modalQuestion" name="subject" placeholder="* Write question.. " style="height:200px"></textarea>
                </div>
            </div>
            <div id="createBtn" style="display:flex; float:right" class="row">
                <p id="invalid_msg_modal"></p>
                <input id="saveBtn" type="button" value="Save">
            </div>
        </form>
    </div>

</div>

</div>

<?php include("../layout/footer.php"); ?>