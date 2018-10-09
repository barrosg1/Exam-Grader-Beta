<?php include("../layout/header.php"); ?>

<div id="addQuestion" class="boxContainer">
    <h1 align="center">Test Python</h1>
    <form>
        <div class="row">
           
            <label for="question">Code</label>
            <textarea id="answer" style="height:200px"></textarea>
    
            
            <input type="button" value="Submit" onclick="testPython()">
        </div>
    </form>
</div>

<?php include("../layout/footer.php"); ?>