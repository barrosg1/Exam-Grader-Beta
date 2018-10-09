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

// get questions from the create exam page
function getQuestionsExam() {
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
        html +=
          "<td><input style='width:100%; height: 30px' type='number' id='points" +
          a +
          "' min='1' max='100' onchange='getPoints(" +
          id +
          "," +
          "this)' /></td>";
        html += "<td>" + question + "</td>";
        html += "<td>" + topic + "</td>";
        html += "<td>" + difficulty + "</td>";
        html += "</tr>";
      }

      document.getElementById("dataExam").innerHTML = html;
    }
  };

  request.open("POST", "curl/getQuestions.php", true);
  request.send(null);
}

function getPoints(questionId, p) {
  var points = p.value;
  var selected = {
    id: questionId,
    points: points
  };
  SELECTED_QUESTIONS.push(selected);
}

// get questions from create question page | CQ = create question
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

        var dataObj = {
          id: id,
          topic: topic,
          difficulty: difficulty,
          question: question
        };

        var data = JSON.stringify(dataObj);

        // appending html
        html += "<tr>";
        html += "<td>" + question + "</td>";
        html += "<td>" + topic + "</td>";
        html += "<td>" + difficulty + "</td>";
        html += "<td>";
        html +=
          "<input id='editBtn' class='editBtn' style='float:left' type='button' value='Edit' onclick='editQuestion(" +
          data +
          ")'>";
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

//edit a question
function editQuestion(obj) {
  var id = obj.id;
  var topic = document.querySelector("#modalTopic");
  var difficulty = document.querySelector("#modalDifficulty");
  var question = document.querySelector("#modalQuestion");

  topic.value = obj.topic;
  difficulty.value = obj.difficulty;
  question.value = obj.question;

  topic.addEventListener("input", function(event) {
    topic.value = this.value;
  });

  difficulty.addEventListener("input", function(event) {
    difficulty.value = this.value;
  });

  question.addEventListener("input", function(event) {
    question.value = this.value;
  });

  var modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks the button, open the modal
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  document.querySelector("#modalSaveBtn").addEventListener("click", function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);

        console.log(response);

        getQuestionsCQ();
      }
    };

    var dataObj = {
      id: id,
      topic: topic.value,
      difficulty: difficulty.value,
      question: question.value
    };
    var data = JSON.stringify(dataObj);
    console.log(data);

    request.open("POST", "curl/editQuestion.php", true);
    request.send(data);
  });
}

// create a new exam after clicking on save button (saved to the db)
function createNewExam() {
  var examName = document.getElementById("examName").value;
  //var totalPoints = document.getElementById("totalPoints").value;

  if (examName == "") {
    alert("Please input required fields.");
  } else {
    if (SELECTED_QUESTIONS.length == 0) {
      alert("You must select at least one question");
    } else {
      var dataObj = {
        examName: examName,
        //totalPoints: totalPoints,
        selectedQ: SELECTED_QUESTIONS
      };

      //window.location.replace("view_exams.php");
      console.log(JSON.stringify(dataObj));
    }
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
    "https://web.njit.edu/~hac9/quiz-grader/middle/middle.php",
    true
  );
  request.send(data);

  alert("Sent");
}
