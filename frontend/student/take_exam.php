<?php include("../layout/header.php"); ?>

    <div id="takeExamDiv">
        <div class="takeExamQ">
            <h2 style="text-align: center">Question 1</h2>
            <center><h4 style="padding: 0 10px 0 10px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </h4>
            <textarea id="answerTextArea" name="subject" placeholder="Answer here.." style="height:130px"></textarea></center>
            
        </div>
        <hr>
        <div class="takeExamQ">
            <h2 style="text-align: center">Question 2</h2>
            <center><h4 style="padding: 0 10px 0 10px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</h4>
            <textarea id="answerTextArea" name="subject" placeholder="Answer here.." style="height:130px"></textarea></center>
            
        </div>
        
        <div id="examSaveBtn" style="text-align: center;" class="row">
            <p id="invalid_msg_modal"></p>
            <input id="saveBtn" type="button" value="Submit" onclick="submitExam()">
        </div>
    </div>

