<?php include("../layout/teacher_header.php"); ?>

<div class="addQuestion">
    <h1 align="center">Create Question</h1>
    <form>
        <div class="row">
            <label for="country">Function Name</label>
            <input type="text" id="functionName" name="firstname" placeholder="* Function name">
            <label for="country">Topic</label>
            <select id="topic" >
                <option value="">---</option>
                <option value="general">general</option>
                <option value="if">if</option>
                <option value="loop">loops</option>
                <option value="array">array</option>
                <option value="dictionaries">dictionaries</option>
            </select>

            <label for="country">Difficulty</label>
            <select id="difficulty" >
                <option value="">---</option>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>

            <label for="question">Question</label>
            <textarea id="question" placeholder="* write question.. " style="height:200px"></textarea>
    
            <input id="createBtn" type="button" value="Add Question" onclick="createQuestion()">
        </div>
    </form>
</div>

<!-- Questions Display -->
<div class="addedQuestions">
    <h1 align="center">Added Questions</h1>

   <!-- sorting -->
   <div id="sortQuestions">
        <div id="sortInputs">
            <label for="fname">Sort by:</label>
            <div id="searchSort">
                <input id="filterTopicCQ" type="text" placeholder="topic" name="searchTopic" >
            </div>
            <div id="searchSort" style="padding-left: 5px">
                <input id="filterDifficultyCQ" type="text" placeholder="difficulty" name="searchDifficulty">
                </form>
            </div>
        </div>
    </div> 

    <!-- <div class="questionList">
        <div class="question">
            <p id="parDiff">Medium</p>
            <p id="questionDisplay">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
           </p>
            <strong><p style="float:left; font-size: 9pt; color: gray">Name: funcName |  Constraint: for loop</p></strong>
            
            <input id="editBtn" type="button" value="Edit" onclick="editQuestion()">
            <input id="deleteBtn" type="button" value="Delete" onclick="deleteQuestion()">
        </div> 
    </div> -->

    <div id="selectQuestionDiv">
        <table id="questionTableCQ">
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
                <td>
                    <input id="editBtn" type="button" value="Edit" onclick="editQuestion()">
                    <input id="deleteBtn" type="button" value="Delete" onclick="deleteQuestion()">
                </td>
            </tr>
           
        </table>
    </div> 

    <!-- The Modal -->
    <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <span class="close">&times;</span>
        <form>
        <div class="row">
            <label for="country">Function Name</label>
            <input type="text" id="modalFunctionName" name="firstname" placeholder="* Function name">
            <label for="country">Topic</label>
            <select id="modalTopic" >
                <option value="">---</option>
                <option value="general">general</option>
                <option value="if">if</option>
                <option value="loop">loops</option>
                <option value="array">array</option>
                <option value="dictionaries">dictionaries</option>
            </select>

            <label for="country">Difficulty</label>
            <select id="modalDifficulty" >
                <option value="">---</option>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>

            <label for="question">Question</label>
            <textarea id="modalQuestion" placeholder="* write question.. " style="height:200px"></textarea>
    
            <input id="modalSaveBtn" type="button" value="Add Question" onclick="createQuestion()">
        </div>
        </form>
    </div>

</div>

</div>

<?php include("../layout/teacher_footer.php"); ?>