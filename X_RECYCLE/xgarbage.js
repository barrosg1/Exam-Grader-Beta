{
  /* <div class="takeExamQ">
          <center>
              <h2>Question 1</h2>
              <h4 style="padding: 0 10px 0 10px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </h4>
  
              <h3>Student's Answer:</h3>
              <p>def s_backward(a): return a</p>
  
              <h3>Points Given:</h3>
              <input id="pointsGiven" type="number" value="12">
  
              <h3>Feedback:</h3>
              <textarea id="answerTextArea" name="subject" placeholder="Answer here.." style="height:130px">
                  Your program compiled!	====> +6
                  The function name matches!	====> +6
                  Your output for s_backward("hello"): hello
                  Correct output: olleh	====> -18
              </textarea>
          </center>
      </div>
      <hr> */
}

// //edit a question
// function editQuestion(obj) {
//   var id = obj.id;
//   var topic = document.querySelector("#modalTopic");
//   var difficulty = document.querySelector("#modalDifficulty");
//   var question = document.querySelector("#modalQuestion");

//   topic.value = obj.topic;
//   difficulty.value = obj.difficulty;
//   question.value = obj.question;

//   topic.addEventListener("input", function(event) {
//     topic.value = this.value;
//   });

//   difficulty.addEventListener("input", function(event) {
//     difficulty.value = this.value;
//   });

//   question.addEventListener("input", function(event) {
//     question.value = this.value;
//   });

//   var modal = document.getElementById("myModal");
//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];
//   // When the user clicks the button, open the modal
//   modal.style.display = "block";
//   span.onclick = function() {
//     modal.style.display = "none";
//   };
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };

//   document.querySelector("#modalSaveBtn").addEventListener("click", function() {
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         var response = JSON.parse(this.responseText);

//         console.log(response);

//         getQuestionsCQ();

//         modal.style.display = "none";
//       }
//     };

//     var dataObj = {
//       id: id,
//       topic: topic.value,
//       difficulty: difficulty.value,
//       question: question.value
//     };
//     var data = JSON.stringify(dataObj);
//     console.log(data);

//     request.open("POST", "curl/editQuestion.php", true);
//     request.send(data);
//   });
// }

// window.addEventListener("load", function() {
//   getAllStudents();
// });

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
