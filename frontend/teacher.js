// GLOBAL VARIABLES
var SELECTED_QUESTIONS = [];

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
        //var response = JSON.parse(this.responseText);
        //alert(response);
        //console.log(this.responseText);

        getQuestionsCQ();
      }
    };

    request.open("POST", "addQuestion.php", true);
    request.send(data);
  }
}

// get questions from the create exam page
function getQuestions() {
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
          "<input type='checkbox' class='checkBox' onclick='checkedBox(" +
          id +
          "," +
          "this)'>";
        html += "</td>";
        html += "</tr>";
      }

      document.getElementById("dataExam").innerHTML = html;
    }
  };

  request.open("POST", "getQuestions.php", true);
  request.send(null);
}

function checkedBox(questionId, box) {
  if (box.checked) {
    SELECTED_QUESTIONS.push(questionId);
  }
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

        // appending html
        html += "<tr>";
        html += "<td>" + question + "</td>";
        html += "<td>" + topic + "</td>";
        html += "<td>" + difficulty + "</td>";
        html += "<td>";
        html +=
          "<input id='editBtn' type='button' value='Edit' onclick='editQuestion()'>";
        html +=
          "<input id='deleteBtn' type='button' value='Delete' onclick='deleteQuestion(" +
          id +
          "," +
          "this)'>";
        html += "</td>";
        html += "</tr>";
      }

      document.getElementById("dataCQ").innerHTML = html;
    }
  };

  request.open("POST", "getQuestions.php", true);
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

    request.open("POST", "deleteQuestion.php", true);
    request.send(data);
  }
}

//edit a question
function editQuestion() {
  var topic = document.querySelector("#modalTopic").value;
  var difficulty = document.querySelector("#modalDifficulty").value;
  var question = document.querySelector("#modalQuestion").value;
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
    if (question == "" || topic == "" || difficulty == "") {
      console.log("SOmething is empty");
    } else {
      var sendDataToUpdate = {
        topic: topic,
        difficulty: difficulty,
        question: question
      };
    }
  });
}

// create a new exam after clicking on save button (saved to the db)
function createNewExam() {
  var examName = document.getElementById("examName").value;
  var totalPoints = document.getElementById("totalPoints").value;

  if (examName == "" || totalPoints == "") {
    alert("Please input required fields.");
  } else {
    var dataObj = {
      examName: examName,
      totalPoints: totalPoints,
      selectedQ: SELECTED_QUESTIONS
    };

    //window.location.replace("view_exams.php");

    console.log(JSON.stringify(dataObj));
  }
}
