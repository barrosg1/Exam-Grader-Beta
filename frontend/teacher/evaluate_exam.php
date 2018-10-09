<?php include("../layout/header.php"); ?>


<div id="evaluateExam" class="boxContainer">
    <div class="takeExamQ">
        <center>
            <h2>Question 1</h2>
            <h4 style="padding: 0 10px 0 10px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </h4>

            <h3>Student's Answer:</h3>
            <p>def s_backward(a): return a</p>

            <h3>Points Given:</h3>
            <input id="pointsGiven" type="number" value="12">

            <h3>Feedback:</h3>
            <textarea id="answerTextArea" name="subject" placeholder="Answer here.." style="height:130px">
Your program compiled!	====> +6
The function name matches!	====> +6
Your output for s_backward("hello"): hello
Correct output: olleh	====> -18
            </textarea>
        </center>
    </div>
    <hr>
    <div class="takeExamQ">
        <center>
            <h2>Question 2</h2>
            <h4 style="padding: 0 10px 0 10px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </h4>

            <h3>Student's Answer:</h3>
            <p>def s_backward(a): return a</p>

            <h3>Points Given:</h3>
            <input id="pointsGiven" type="number" value="12">

            <h3>Feedback:</h3>
            <textarea id="answerTextArea" name="subject" placeholder="Answer here.." style="height:130px">
Your program compiled!	====> +6
The function name matches!	====> +6
Your output for s_backward("hello"): hello
Correct output: olleh	====> -18
            </textarea>
        </center>
    </div>
    <hr>
    <div class="takeExamQ">
        <center>
            <h2>Question 3</h2>
            <h4 style="padding: 0 10px 0 10px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </h4>

            <h3>Student's Answer:</h3>
            <p>def s_backward(a): return a</p>

            <h3>Points Given:</h3>
            <input id="pointsGiven" type="number" value="12">

            <h3>Feedback:</h3>
            <textarea id="answerTextArea" name="subject" placeholder="Answer here.." style="height:130px">
Your program compiled!	====> +6
The function name matches!	====> +6
Your output for s_backward("hello"): hello
Correct output: olleh	====> -18
            </textarea>
        </center>
    </div>

    <center><input id="examSaveBtn" type="button" value="Release Exam" onclick="createNewExam()"></center>
</div>


<?php include("../layout/footer.php"); ?>
