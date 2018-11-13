// GLOBAL VARIABLES
var SELECTED_QUESTIONS = []; // store selected answers to add to the exam

// create a new question
function addQuestion() {
  var topic = document.querySelector("#topic").value;
  var constraint = document.querySelector("#constraint").value;
  var difficulty = document.querySelector("#difficulty").value;
  var question = document.querySelector("#question").value;
  var functionName = document.querySelector("#functionName").value;
  var function1 = document.querySelector("#function1").value;
  var function2 = document.querySelector("#function2").value;
  var function3 = document.querySelector("#function3").value;
  var function4 = document.querySelector("#function4").value;
  var function5 = document.querySelector("#function5").value;
  var function6 = document.querySelector("#function6").value;
  var expectedOutput1 = document.querySelector("#expectedOutput1").value;
  var expectedOutput2 = document.querySelector("#expectedOutput2").value;
  var expectedOutput3 = document.querySelector("#expectedOutput3").value;
  var expectedOutput4 = document.querySelector("#expectedOutput4").value;
  var expectedOutput5 = document.querySelector("#expectedOutput5").value;
  var expectedOutput6 = document.querySelector("#expectedOutput6").value;

  if (question == "" || topic == "" || constraint == "" || difficulty == "") {
    alert("All input fields are required.");
  } else if (
    function1 == "" ||
    expectedOutput1 == "" ||
    function2 == "" ||
    expectedOutput2 == ""
  ) {
    alert("At least two test cases is required.");
  } else {
    var dataObj = {
      topic: topic,
      constraint: constraint,
      difficulty: difficulty,
      question: question,
      functionName: functionName,
      testCase1: { testCase: function1, expectedOutput: expectedOutput1 },
      testCase2: { testCase: function2, expectedOutput: expectedOutput2 },
      testCase3: { testCase: function3, expectedOutput: expectedOutput3 },
      testCase4: { testCase: function4, expectedOutput: expectedOutput4 },
      testCase5: { testCase: function5, expectedOutput: expectedOutput5 },
      testCase6: { testCase: function6, expectedOutput: expectedOutput6 }
    };

    var data = JSON.stringify(dataObj);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        getQuestionsCQ();

        //var response = JSON.parse(this.responseText);
        //console.log(response);

        alert(this.responseText);
        console.log(this.responseText);
      }
    };

    request.open("POST", "curl/addQuestion.php", true);
    request.send(data);
  }
}

function getPoints(questionId, p) {
  var points = p.value;

  if (points != "") {
    var selected = {
      id: questionId,
      points: points
    };
    SELECTED_QUESTIONS.push(selected);
  }
}

function deleteQuestion(questionId, row) {
  if (confirm("Are you sure you want to delete this question?") == true) {
    var dataObj = { id: questionId };

    var data = JSON.stringify(dataObj);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);

        // delete specified row
        var i = row.parentNode.parentNode.rowIndex;
        document.getElementById("questionTableCQ").deleteRow(i);
      }
    };

    request.open("POST", "curl/deleteQuestion.php", true);
    request.send(data);
  }
}

// create a new exam after clicking on save button (saved to the db)
function createNewExam() {
  var examName = document.getElementById("examName").value;
  //var totalPoints = document.getElementById("totalPoints").value;

  if (examName == "") {
    alert("Exam name is required.");
  } else {
    if (SELECTED_QUESTIONS.length == 0) {
      alert("You must select at least one question");
    } else {
      var dataObj = {
        examName: examName,
        selectedQ: SELECTED_QUESTIONS
      };

      console.log(dataObj);

      var data = JSON.stringify(dataObj);

      var request = new XMLHttpRequest();
      request.open("POST", "curl/addExam.php", true);
      request.send(data);

      window.location.replace("view_exams.php");
    }
  }
}

function displayExamQuestions(object) {
  var questions = object.questions;
  var points = object.points;

  var html = "";

  for (var i = 0; i < points.length; i++) {
    html += "<tr>";
    html += "<td>" + questions[i] + "</td>";
    html += "<td>" + points[i] + "</td>";
    html += "</tr>";
  }

  document.getElementById("displayQuestionsExam").innerHTML = html;
}

function getQuestionsCQ() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      var html = "";

      // looping through the data response
      for (var a = 0; a < response.length; a++) {
        var id = response[a].id;
        var topic = response[a].type;
        var difficulty = response[a].difficulty;
        var question = response[a].data;

        // appending html
        html += "<tr>";
        html += "<td>" + question + "</td>";
        html += "<td>" + topic + "</td>";
        html += "<td>" + difficulty + "</td>";
        html += "<td>";
        html +=
          "<input id='deleteBtn' class='deleteBtn' style='float:left' type='button' value='Delete' onclick='deleteQuestion(" +
          id +
          "," +
          "this)'>";
        html += "</td>";
        html += "</tr>";
      }

      document.getElementById("dataCQ").innerHTML = html;
    }
  };

  request.open("POST", "curl/getQuestions.php", true);
  request.send(null);
}

function displayExamInstances(studentId) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      var html = "";

      // looping through the data response
      for (var a = 0; a < response.length; a++) {
        var id = response[a].id;
        var release = response[a].release_exam;
        var examName = response[a].name;
        var points = response[a].points;
        var pointsArray = points.split(",");
        var selected = response[a].selectedQ;
        var selectedQArray = selected.split(",");
        var isGraded;

        if (release == "1") isGraded = "Yes";
        else isGraded = "No";

        var questionsArray = [];
        var answersArray = [];
        var pointsGivenArray = [];
        var feedbackArray = [];

        for (var i = 0; i < pointsArray.length; i++) {
          var ans = "answer_" + (i + 1);
          var pGiven = "grade_" + (i + 1);
          var feedB = "feedback_" + (i + 1);

          questionsArray[i] = response[a][i];
          answersArray[i] = response[a][ans];
          pointsGivenArray[i] = response[a][pGiven];
          feedbackArray[i] = response[a][feedB];
        }

        var dataObj = {
          id: id,
          release: release,
          examName: examName,
          points: points,
          pointsArray: pointsArray,
          questionsArray: questionsArray,
          answersArray: answersArray,
          feedbackArray: feedbackArray,
          pointsGivenArray: pointsGivenArray,
          selectedQArray: selectedQArray
        };

        console.log(dataObj);

        var data = JSON.stringify(dataObj);

        // appending html
        html += "<tr onclick='viewExamInstance(" + data + ")'>";
        html += "<td>" + examName + "</td>";
        html += "<td>" + isGraded + "</td>";
        html += "</tr>";
      }

      document.getElementById("studentExamDisplay").innerHTML = html;
    }
  };

  var data = JSON.stringify({ studentId: studentId });

  request.open("POST", "curl/examInstance.php", true);
  request.send(data);
}

function viewExamInstance(obj) {
  var id = obj.id;
  var release = obj.release;
  var examName = obj.examName;
  var points = obj.points;
  var pointsArray = obj.pointsArray;
  var questionsArray = obj.questionsArray;
  var answersArray = obj.answersArray;
  var feedbackArray = obj.feedbackArray;
  var pointsGivenArray = obj.pointsGivenArray;
  var selectedQArray = obj.selectedQArray;

  document.getElementById("studentExamInstance").style.display = "none";
  document.getElementById("evaluateExam").style.display = "block";

  var html = "";
  html += "<h3 style='text-align: left'>" + examName + "</h3>";

  for (var i = 0; i < questionsArray.length; i++) {
    var questionId = selectedQArray[i];
    var question = questionsArray[i];
    var answer = answersArray[i];
    var points = pointsArray[i];
    var pointsGiven = pointsGivenArray[i];
    var feedback = feedbackArray[i];
    var feedbackId = "feedback" + questionId;
    var pointsGivenId = "pointsGiven" + questionId;

    if (feedback == null || feedback == "NULL") feedback = "";

    html += '<div class="takeExamQ">';
    html += "<center>";
    html += "<h2>Question " + (i + 1) + "</h2>";
    html += '<h4 style="padding: 0 10px 0 10px;">' + question + "</h4>";
    html += "<h3>Student's Answer:</h3>";
    //html += "<p>" + answer + "</p>";
    html +=
      '<textarea class="studentGradeTextArea" name="subject" placeholder="Answer here.." style="height:130px;" disabled>';
    html += answer;
    html += "</textarea>";
    html += "<h3>Points Possible:</h3>";
    html += "<p>" + points + " points</p>";
    html += "<h3>Points Given:</h3>";
    html +=
      '<input id="' +
      pointsGivenId +
      '" type="number" value="' +
      pointsGiven +
      '">';
    html += "<h3>Feedback:</h3>";
    html +=
      '<textarea id="' +
      feedbackId +
      '" class="studentGradeTextArea" name="subject" placeholder="Answer here.." style="height:130px">';
    html += feedback;
    html += "</textarea>";
    html += "</center>";
    html += "</div>";
    html += "<hr>";
  }

  var dataObj = {
    id: id,
    release: release,
    examName: examName,
    questionsArray: questionsArray,
    selectedQArray: selectedQArray
  };

  var data = JSON.stringify(dataObj);

  html +=
    "<center><input id='examSaveBtn' type='button' value='Release Exam' onclick='releaseExam(" +
    data +
    ")'></center>";

  document.getElementById("evaluateExam").innerHTML = html;
}

function releaseExam(obj) {
  var id = obj.id;
  var selectedQArray = obj.selectedQArray;
  var gradedQuestions = [];

  for (var i = 0; i < selectedQArray.length; i++) {
    var questionId = selectedQArray[i];
    var feedbackId = "feedback" + questionId;
    var pointsGivenId = "pointsGiven" + questionId;

    var newPointsGiven = document.getElementById(pointsGivenId).value;
    var newFeedbackVal = document.getElementById(feedbackId).value;

    gradedQuestions[i] = {
      pointsGiven: newPointsGiven,
      feedback: newFeedbackVal
    };
  }

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      alert(response);
    }
  };

  var dataObj = {
    id: id,
    release: "1",
    gradedQuestions: gradedQuestions
  };

  console.log(dataObj);
  var data = JSON.stringify(dataObj);

  request.open("POST", "curl/releaseExam.php", true);
  request.send(data);
}
