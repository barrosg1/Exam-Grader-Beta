<?php include("../layout/instructor_header.php"); ?>

<div id="addQuestion" class="boxContainer">
    <h1 align="center">Create Question</h1>
    <form>
        <div class="row">
            <label for="topic">Topic</label>
            <select id="topic" >
                <option value="">---</option>
                <option value="general">general</option>
                <option value="if">if</option>
                <option value="loop">loop</option>
                <option value="array">array</option>
                <option value="dictionaries">dictionaries</option>
            </select>

            <label for="difficulty">Difficulty</label>
            <select id="difficulty" >
                <option value="">---</option>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>

            <label for="question">Question</label>
            <textarea id="question" placeholder="* write question.. " style="height:200px"></textarea>
    
            
            <input id="createBtn" type="button" value="Add Question" onclick="addQuestion();">
        </div>
    </form>
</div>

<!-- Questions Display -->
<div id="addedQuestions" class="boxContainer">
    <h1 align="center">Added Questions</h1>

   <!-- sorting -->
   <div id="sortQuestions">
        <div id="sortInputs">
            <label for="fname">Sort by:</label>
            <div id="searchSort">
                <input id="filterTopicCQ" type="text" placeholder="topic" name="searchTopic" onkeyup="filterTopicCQ()">
            </div>
            <div id="searchSort" style="padding-left: 5px">
                <input id="filterDifficultyCQ" type="text" placeholder="difficulty" name="searchDifficulty" onkeyup="filterDifficultyCQ()">
                </form>
            </div>
        </div>
    </div> 

    <div id="selectQuestionDiv">
        <table id="questionTableCQ" class="tableDisplay">
            <tr>
                <th>Question</th>
                <th>Topic</th>
                <th>Difficulty</th>
                <th>Choose</th>
            </tr>
            <tbody id="dataCQ" ></tbody> <!-- Data will be displayed here -->
           
        </table>
    </div> 


    <!-- The Modal -->
    <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <span class="close">&times;</span>
        <form>
        <div class="row">
            <!-- <label for="country">Function Name</label>
            <input type="text" id="modalFunctionName" name="firstname" placeholder="* Function name"> -->
            <label for="country">Topic</label>
            <select id="modalTopic" >
                <option value="">---</option>
                <option value="general">general</option>
                <option value="if">if</option>
                <option value="loop">loop</option>
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
    
            <input id="modalSaveBtn" type="button" value="Update">
        </div>
        </form>
    </div>

</div>

</div>

