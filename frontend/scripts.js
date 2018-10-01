// create a new question
function createQuestion() {
  var functionName = document.querySelector("#functionName");
  var difficulty = document.querySelector("#difficulty");
  var question = document.querySelector("#question");
  var invalid_msg = document.querySelector("#invalid_msg");

  if (functionName.value == "" || question.value == "") {
    invalid_msg.innerHTML = "You must input required fields.";
  } else {
    invalid_msg.innerHTML = "";

    var dataObj = {
      function: functionName.value,
      constraint: constraint.value,
      difficulty: difficulty.value,
      question: question.value
    };

    sendAjaxRequest(dataObj, "question.php");
  }
}

//edit a question
function editQuestion() {
  var functionName = document.querySelector("#modalFunctionName");
  var difficulty = document.querySelector("#modalDifficulty");
  var question = document.querySelector("#modalQuestion");
  var invalid_msg = document.querySelector("#invalid_msg_modal");
  var modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks the button, open the modal
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
    invalid_msg.innerHTML = "";
  };
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      invalid_msg.innerHTML = "";
    }
  };

  document.querySelector("#saveBtn").addEventListener("click", function() {
    if (functionName.value == "" || question.value == "") {
      invalid_msg.innerHTML = "You must input required fields.";
    } else {
      invalid_msg.innerHTML = "";
      var dataObj = {
        function: functionName.value,
        constraint: constraint.value,
        difficulty: difficulty.value,
        question: question.value
      };
    }
  });
}

// delete a question
function deleteQuestion() {
  var x;
  if (confirm("Are you sure you want to delete this question?") == true) {
    x = "You pressed OK!";
  } else {
    x = "You pressed Cancel!";
  }
  return x;
}

// Add question to the exam (not saved to the db yet)
function addQuestionToExam() {
  var addedQuestion = document.getElementById("examAddedQuestions");
  var addBtn = document.getElementById("addBtn");
  var html = "";
  var questionList = [];

  html +=
    "<tr>" +
    "<td>1</td>" +
    "<td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>" +
    "<td><input id='saveBtn' type='button' value='Delete' onclick='removeQuestionFromExam()'></td>" +
    "</tr>";

  //addBtn.disabled = true;
  addedQuestion.insertAdjacentHTML("beforeend", html);

  questionList.push(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
  );

  var data = {
    questions: questionList
  };

  sendAjaxRequest(data, "question.php");
}

// create a new exam after clicking on save button (saved to the db)
function createNewExam() {
  var examName = document.getElementById("examName");
  var totalPoints = document.getElementById("totalPoints");

  if (examName.value == "" || totalPoints.value == "") {
    alert("Please input required fields.");
  } else {
  }
}

// Send Ajax
function sendAjaxRequest(obj, file) {
  var data = JSON.stringify(obj);

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      console.log(response);
    }
  };

  request.open("POST", file, true);
  request.send(data);
}
