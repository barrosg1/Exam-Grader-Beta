<?php include("../layout/student_header.php"); ?>


    <div class="takeExamQ">
    
        <center>
            <h2>Total Score: 55 out of 100</h2>
            <h2>Percentage: 55%</h2>
            <h2>Grade: D</h2>
            <hr>
            <h2>Question 1</h2>
            <h4 style="padding: 0 10px 0 10px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </h4>

            <h3>Student's Answer:</h3>
            <p>def s_backward(a): return a</p>

            <h3>Your Answer:</h3>
            <textarea id="answerTextArea" name="subject" placeholder="Answer here.." style="height:130px">
def s_backward(a):
    return a
            </textarea>

            <h3>Feedback:</h3>
            <textarea id="answerTextArea" name="subject" placeholder="Answer here.." style="height:130px">
Your program compiled!	====> +6
The function name matches!	====> +6
Your output for s_backward("hello"): hello
Correct output: olleh	====> -18
            </textarea>
        </center>
    </div>    


