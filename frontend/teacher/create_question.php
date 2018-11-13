<?php include("../layout/instructor_header.php"); ?>

<div id="addQuestion" class="boxContainer">
    <h1 align="center">Create Question</h1>
    <form>
        <div class="row">
            <!-- Topic -->
            <label for="topic">Topic</label>
            <select id="topic" >
                <option value="">---</option>
                <option value="general">general</option>
                <option value="if">if</option>
                <option value="loop">loop</option>
                <option value="array">array</option>
                <option value="dictionaries">dictionaries</option>
            </select>

            <!-- Constraint -->
            <label for="constraint">Constraint</label>
            <select id="constraint" >
                <option value="">---</option>
                <option value="print">print</option>
                <option value="return">return</option>
                <option value="while">while</option>
                <option value="for">for</option>
            </select>

            <!-- Difficulty -->
            <label for="difficulty">Difficulty</label>
            <select id="difficulty" >
                <option value="">---</option>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>

            <!-- Question -->
            <label for="question">Question</label>
            <textarea id="question" placeholder="* write question.. " style="height:200px"></textarea>

            <!-- Test Cases -->
            <label for="testCases">Test Cases:</label>         
            <input id="functionName"  type="text" placeholder="Function Name" style="width:25%; margin-bottom: 20px;">
            
            <div class="testCase">
                <div >
                    <input id="function1"  type="text" placeholder="Test Case">
                </div>
                <div style="padding-left: 5px">
                    <input id="expectedOutput1" type="text" placeholder="Expected Output">
                </div>
            </div>
            <div class="testCase">
                <div >
                    <input id="function2"  type="text" placeholder="Test Case">
                </div>
                <div style="padding-left: 5px">
                    <input id="expectedOutput2" type="text" placeholder="Expected Output">
                </div>
            </div>
            <div class="testCase">
                <div >
                    <input id="function3"  type="text" placeholder="Test Case">
                </div>
                <div style="padding-left: 5px">
                    <input id="expectedOutput3" type="text" placeholder="Expected Output">
                </div>
            </div>
            <div class="testCase">
                <div >
                    <input id="function4"  type="text" placeholder="Test Case">
                </div>
                <div style="padding-left: 5px">
                    <input id="expectedOutput4" type="text" placeholder="Expected Output">
                </div>
            </div>
            <div class="testCase">
                <div >
                    <input id="function5"  type="text" placeholder="Test Case">
                </div>
                <div style="padding-left: 5px">
                    <input id="expectedOutput5" type="text" placeholder="Expected Output">
                </div>
            </div>
            <div class="testCase">
                <div >
                    <input id="function6"  type="text" placeholder="Test Case">
                </div>
                <div style="padding-left: 5px">
                    <input id="expectedOutput6" type="text" placeholder="Expected Output">
                </div>
            </div>

            <center><input id="createBtn" type="button" value="Add Question" onclick="addQuestion();"><center/>
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

</div>

