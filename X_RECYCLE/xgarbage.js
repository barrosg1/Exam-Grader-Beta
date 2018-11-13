// <div class="takeExamQ">
//         <center>
//             <h2>Question 1</h2>
//             <h4 style="padding: 0 10px 0 10px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </h4>

//             <h3>Student's Answer:</h3>
//             <p>def s_backward(a): return a</p>

//             <h3>Points Given:</h3>
//             <input id="pointsGiven" type="number" value="12">

//             <h3>Feedback:</h3>
//             <textarea id="answerTextArea" name="subject" placeholder="Answer here.." style="height:130px">
//                 Your program compiled!	====> +6
//                 The function name matches!	====> +6
//                 Your output for s_backward("hello"): hello
//                 Correct output: olleh	====> -18
//             </textarea>
//         </center>
//     </div>
//     <hr>

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

        modal.style.display = "none";
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

window.addEventListener("load", function() {
  getAllStudents();
});

var data = {
  examId: "12",
  studentId: "2",
  questions: [
    {
      questionId: 12,
      points: 25,
      answer: "hello world",
      expectedOutput: "hello world"
    },
    {
      questionId: 5,
      points: 10,
      answer: "35",
      expectedOutput: "25"
    }
  ]
};

////////////////////////////////////////////////////

function newTestCaseInput() {
  var numberTC = document.getElementById("numberTC").value; //number of test cases
  var wrapperTC = document.getElementById("wrapperTC");

  console.log(numberTC);

  if (wrapperTC.firstChild) {
    while (wrapperTC.firstChild) {
      wrapperTC.removeChild(wrapperTC.firstChild);
    }
  }

  for (i = 0; i < numberTC; i++) {
    var input = document.createElement("input");
    input.type = "text";
    input.id = "testCase_" + i;
    input.name = "testCaseInput";
    wrapperTC.appendChild(input);
    wrapperTC.appendChild(document.createElement("br"));
  }
}

{
  /* <label for="numberTC"># of Test Cases:</label>        
            <select id="numberTC" style="width: 12%" onchange="newTestCaseInput();">
                <option value="">---</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>

            <div id="wrapperTC"></div> */
}

// <!-- The Modal -->
// <div id="myModal" class="modal">

// <!-- Modal content -->
// <div class="modal-content">
//     <span class="close">&times;</span>
//     <form>
//     <div class="row">
//         <!-- <label for="country">Function Name</label>
//         <input type="text" id="modalFunctionName" name="firstname" placeholder="* Function name"> -->
//         <label for="country">Topic</label>
//         <select id="modalTopic" >
//             <option value="">---</option>
//             <option value="general">general</option>
//             <option value="if">if</option>
//             <option value="loop">loop</option>
//             <option value="array">array</option>
//             <option value="dictionaries">dictionaries</option>
//         </select>

//         <label for="country">Difficulty</label>
//         <select id="modalDifficulty" >
//             <option value="">---</option>
//             <option value="easy">easy</option>
//             <option value="medium">medium</option>
//             <option value="hard">hard</option>
//         </select>

//         <label for="question">Question</label>
//         <textarea id="modalQuestion" placeholder="* write question.. " style="height:200px"></textarea>

//         <input id="modalSaveBtn" type="button" value="Update">
//     </div>
//     </form>
// </div>

// </div>
