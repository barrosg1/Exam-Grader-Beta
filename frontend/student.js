function getAllExamsStudent() {
  var request = new XMLHttpRequest();
  var html = "";

  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      console.log(response);

      // looping through the data response
      for (var a = 0; a < response.length; a++) {
        var id = response[a].id;
        var examName = response[a].name;
        var points = response[a].points;
        var selectedQ = response[a].selectedQ;
        var pointsArray = points.split(",");
        var selectedQArray = selectedQ.split(",");
        var questionsArray = [];

        for (var i = 0; i < pointsArray.length; i++) {
          var question = response[a][i];
          questionsArray.push(question);
        }

        var dataObj = {
          id: id,
          questionsId: selectedQArray,
          questions: questionsArray,
          points: pointsArray
        };

        var data = JSON.stringify(dataObj);

        // appending html
        html += "<tr style='text-align:center'>";
        html += "<td onclick='takeExam(" + data + ")'>" + examName + "</td>";
        html += "</tr>";
      }

      document.getElementById("examsDisplayStudent").innerHTML = html;
    }
  };

  request.open("POST", "curl/getExams.php", true);
  request.send(null);
}

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
  var questionIds = object.questionIdArray;

  var answerArray = [];

  for (var i = 0; i < questionIds.length; i++) {
    var questionId = questionIds[i];
    var answer = document.getElementById(questionIds[i]).value;

    answerArray[i] = { questionId: questionId, answer: answer };
  }

  var data = {
    examId: examId,
    answers: answerArray
  };

  console.log(data);
}
