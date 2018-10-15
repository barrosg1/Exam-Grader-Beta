// GLOBAL VARIABLES
var SELECTED_QUESTIONS = []; // store selected answers to add to the exam

// create a new question
function addQuestion() {
  var topic = document.querySelector("#topic").value;
  var difficulty = document.querySelector("#difficulty").value;
  var question = document.querySelector("#question").value;

  if (question == "" || topic == "" || difficulty == "") {
    alert("All input fields are required.");
  } else {
    var dataObj = {
      topic: topic,
      difficulty: difficulty,
      question: question
    };

    var data = JSON.stringify(dataObj);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        getQuestionsCQ();
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
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          console.log(response);
        }
      };

      var dataObj = {
        examName: examName,
        selectedQ: SELECTED_QUESTIONS
      };

      var data = JSON.stringify(dataObj);

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

function getQuestion(questionId) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var responseQuestion = JSON.parse(this.responseText);
    }
  };

  var data = JSON.stringify({ id: questionId });

  request.open("POST", "curl/getQuestion.php", true);
  request.send(data);
}

function testPython() {
  var answer = document.getElementById("answer").value;

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      // console.log(response);

      getQuestion();
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
