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

  var questionBundleList = [];

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

    questionBundleList[i] = { questionId: questionId, points: point };
  }

  var dataObj = {
    examId: examId,
    questionBundleList: questionBundleList
  };

  var data = JSON.stringify(dataObj);

  console.log(data);

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

  var answerArray = [];

  for (var i = 0; i < questionIdArray.length; i++) {
    var answer = document.getElementById(questionIdArray[i]).value;

    answerArray[i] = { answer: answer };
  }

  var dataObj = {
    examId: examId,
    studentId: studentId,
    answers: answerArray
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
