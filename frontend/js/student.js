function takeExam(object) {
  var examId = object.id;
  var questionsId = object.questionsId;
  var questions = object.questions;
  var points = object.points;

  document.getElementById("viewExamsDiv").style.display = "none";
  document.getElementById("takeExamDiv").style.display = "block";

  var html = "";

  var questionIdArray = [];

  for (var i = 0; i < points.length; i++) {
    var questionId = questionsId[i];
    var question = questions[i];
    var point = points[i];

    html += "<div  class='takeExamQ'>";
    html += "<h2 style='text-align: center'>Question " + (i + 1) + "</h2>";
    html += "<center>";
    html += "<h4 style='padding: 0 10px 0 10px;'>";
    html += question;
    html += " (" + point + " points)";
    html += "</h4>";
    html += "</h4>";
    html +=
      '<textarea id="' +
      questionId +
      '" class="answerTextArea" placeholder="Answer here.." style="height:130px"></textarea></center>';
    html += "</div>";
    html += "<hr>";

    questionIdArray[i] = questionId;
  }

  var dataObj = {
    examId: examId,
    questionIdArray: questionIdArray
  };

  var data = JSON.stringify(dataObj);

  html +=
    "<center><input id='examSaveBtn' type='button' value='Save' onclick='submitExam(" +
    data +
    ")'></center>";

  document.getElementById("takeExamDiv").innerHTML = html;
}

function submitExam(object) {
  var examId = object.examId;
  var studentId = localStorage.getItem("id");

  var answerArray = [];

  for (var i = 0; i < object.questionIdArray.length; i++) {
    var answer = document.getElementById(object.questionIdArray[i]).value;

    answerArray[i] = { answer: answer };
  }

  var data = {
    examId: examId,
    studentId: studentId,
    answers: answerArray
  };

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      console.log(response);
    }
  };

  request.open("POST", "curl/submitExam.php", true);
  request.send(data);
}
