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

    console.log(dataObj);

    var data = JSON.stringify(dataObj);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //var response = JSON.parse(this.responseText);
        console.log(this.responseText);

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
      console.log(response);

      var table = document.getElementById("questionTable");
      var html = "";

      // looping through the data response
      for (var a = 0; a < response.length; a++) {
        var topic = response[a].type;
        var difficulty = response[a].difficulty;
        var question = response[a].data;

        // appending html
        html += "<tr>";
        html += "<td>" + question + "</td>";
        html += "<td>" + topic + "</td>";
        html += "<td>" + difficulty + "</td>";
        html += "<td>";
        html += "<input type='checkbox' class='checkBox'>";
        html += "</td>";
        html += "</tr>";
      }

      table.insertAdjacentHTML("beforeend", html);
    }
  };

  request.open("POST", "getQuestions.php", true);
  request.send(null);
}

// get questions from create question page
function getQuestionsCQ() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      console.log(response);

      var table = document.getElementById("questionTableCQ");
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
          a +
          ")'>";
        html += "</td>";
        html += "</tr>";
      }

      table.insertAdjacentHTML("beforeend", html);
    }
  };

  request.open("POST", "getQuestions.php", true);
  request.send(null);
}

function deleteQuestion(questionId, index) {
  if (confirm("Are you sure you want to delete this question?") == true) {
    var dataObj = { id: questionId };

    var data = JSON.stringify(dataObj);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response);
      }
    };

    request.open("POST", "deleteQuestion.php", true);
    request.send(data);
  }
}

//edit a question
function editQuestion() {
  var topic = document.querySelector("#modalTopic").v;
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

// // Add question to the exam (not saved to the db yet)
// function addQuestionToExam(questionId) {
//   var addedQuestion = document.getElementById("examAddedQuestions");
//   var html = "";

//   document.getElementById(questionId).disabled = true;

//   html += "<tr>";
//   html += "<td>" + questionId + "</td>";
//   html +=
//     "<td><input id='saveBtn' type='button' value='Delete' onclick='removeQuestionFromExam()'></td>";
//   html += "</tr>";

//   //addBtn.disabled = true;
//   addedQuestion.insertAdjacentHTML("beforeend", html);

//   return questionId;
// }

// create a new exam after clicking on save button (saved to the db)
function createNewExam() {
  var examName = document.getElementById("examName");
  var totalPoints = document.getElementById("totalPoints");

  if (examName.value == "" || totalPoints.value == "") {
    alert("Please input required fields.");
  } else {
  }
}

window.addEventListener("load", function() {
  getQuestions();
  getQuestionsCQ();
});
