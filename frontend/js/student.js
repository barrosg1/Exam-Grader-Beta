function takeExam(object) {
  var examId = object.id;
  var examName = object.examName;
  var questionsId = object.questionsId;
  var questions = object.questions;
  var points = object.points;

  document.getElementById("viewExamsDiv").style.display = "none";
  document.getElementById("takeExamDiv").style.display = "block";

  var html = "";
  html += "<h1>" + examName + "</h1>";

  var questionIdArray = [];
  var pointsArray = [];

  for (var i = 0; i < points.length; i++) {
    var questionId = questionsId[i];
    var question = questions[i];
    var point = points[i];

    html += "<div  class='takeExamQ'>";
    html += "<center>";
    html += "<h2>Question " + (i + 1) + "</h2>";
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
    pointsArray[i] = point;
  }

  var dataObj = {
    examId: examId,
    questionIdArray: questionIdArray,
    pointsArray: pointsArray
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
  var questionIdArray = object.questionIdArray;
  var pointsArray = object.pointsArray;

  var questionsArray = [];

  for (var i = 0; i < questionIdArray.length; i++) {
    var questionId = questionIdArray[i];
    var answer = document.getElementById(questionId).value;
    var points = pointsArray[i];

    questionsArray[i] = {
      questionId: questionId,
      answer: answer,
      points: points,
      expectedOutput: "something"
    };
  }

  var dataObj = {
    examId: examId,
    studentId: studentId,
    questions: questionsArray
  };

  var data = JSON.stringify(dataObj);

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

function testPython() {
  var answer = document.getElementById("answer").value;

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    }
  };
  var dataObj = {
    answer: answer
  };

  var data = JSON.stringify(dataObj);

  request.open(
    "POST",
    "https://web.njit.edu/~hac9/quiz-grader/middle/middle.php",
    true
  );
  request.send(data);

  alert("Sent");
}
