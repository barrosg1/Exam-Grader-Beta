function takeExam(object) {
  var examId = object.id;
  var examName = object.examName;
  var questionsId = object.questionsId;
  var questions = object.questions;
  var points = object.points;
  var studentId = localStorage.getItem("id");

  document.getElementById("viewExamsDiv").style.display = "none";
  document.getElementById("takeExamDiv").style.display = "block";

  var data = JSON.stringify(dataObj);

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
    html +=
      '<textarea id="' +
      questionId +
      '" class="answerTextArea" placeholder="Answer here.." style="height:130px"></textarea></center>';
    html += "</div>";
    html += "<hr>";

    questionIdArray[i] = questionId;
    pointsArray[i] = point;
  }

  // Data to pass to functions to save and instance and submit an exam
  var dataObj = {
    examId: examId,
    questionIdArray: questionIdArray,
    pointsArray: pointsArray
  };

  var data = JSON.stringify(dataObj);

  // html +=
  //   "<center><input id='examSaveBtn' type='button' value='Save' onclick='saveExamInstance(" +
  //   data +
  //   ")'>";
  html +=
    "<center><input id='examSaveBtn' type='button' value='Submit Exam' onclick='submitExam(" +
    data +
    ")'>";
  html += "</center>";

  document.getElementById("takeExamDiv").innerHTML = html;

  // Data to send to create an instance of an exam
  var dataCreateInstance = {
    examId: examId,
    studentId: studentId
  };

  var dataCreate = JSON.stringify(dataCreateInstance);

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // var response = JSON.parse(this.responseText);
      // console.log(response);
    }
  };

  request.open("POST", "curl/createInstance.php", true);
  request.send(dataCreate);
}

// function saveExamInstance(object) {
//   alert("Save Exam instance is working!");
// }

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
      points: points
    };
  }

  var dataObj = {
    examId: examId,
    studentId: studentId,
    questions: questionsArray
  };

  var data = JSON.stringify(dataObj);

  var request = new XMLHttpRequest();
  request.open("POST", "curl/submitExam.php", true);
  request.send(data);

  alert("Exam has been submitted!");
}

function viewExamGrades(obj) {
  var examName = obj.examName;
  var pointsArray = obj.pointsArray;
  var questionsArray = obj.questionsArray;
  var answersArray = obj.answersArray;
  var feedbackArray = obj.feedbackArray;
  var pointsGivenArray = obj.pointsGivenArray;
  var total = obj.total;

  document.getElementById("viewExamsDiv").style.display = "none";
  document.getElementById("viewExamGrade").style.display = "block";

  var html = "";
  html += "<center>";
  html += "<h1>Exam Name: " + examName + "</h1>";
  html += '<div class="takeExamQ">';
  html += "<h3>Total Score: " + total + " out of 100</h3>";
  html += "<h3>Percentage: " + total + "%</h3>";
  html += "<hr>";

  for (var j = 0; j < questionsArray.length; j++) {
    var question = questionsArray[j];
    var answer = answersArray[j];
    var points = pointsArray[j];
    var pointsGiven = pointsGivenArray[j];
    var feedback = feedbackArray[j];

    html += "<center>";
    html += "<h2>Question " + (j + 1) + "</h2>";
    html += '<h4 style="padding: 0 10px 0 10px;">' + question + "</h4>";
    html += "<h3>Your answer:</h3>";
    html +=
      "<textarea class='studentGradeTextArea' name='subject' placeholder='Answer here..' style='height:130px' disabled>";
    html += answer;
    html += "</textarea>";
    html += "<h3>Points Possible:</h3>";
    html += "<p>" + points + " points</p>";
    html += "<h3>Points Given:</h3>";
    html += "<p>" + pointsGiven + " points</p>";
    html += "<h3>Feedback:</h3>";
    html +=
      '<textarea class="studentGradeTextArea" name="subject" placeholder="Answer here.." style="height:130px" disabled>';
    html += feedback;
    html += "</textarea>";
    html += "</center>";
    html += "</div>";
    html += "<hr>";

    document.getElementById("viewExamGrade").innerHTML = html;
  }
}

function testPython() {
  var answer = document.getElementById("answer").value;

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      console.log(response);
    }
  };
  var dataObj = {
    answer: answer
  };

  var data = JSON.stringify(dataObj);

  request.open(
    "POST",
    "https://web.njit.edu/~hac9/quiz-grader/middle/testing.php",
    true
  );
  request.send(data);

  alert("Sent");
}
