function filterTopic() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("filterTopic");
  filter = input.value.toUpperCase();
  table = document.getElementById("questionTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterDifficulty() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("filterDifficulty");
  filter = input.value.toUpperCase();
  table = document.getElementById("questionTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// CQ = Create Question page
function filterTopicCQ() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("filterTopicCQ");
  filter = input.value.toUpperCase();
  table = document.getElementById("questionTableCQ");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// CQ = Create Question page
function filterDifficultyCQ() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("filterDifficultyCQ");
  filter = input.value.toUpperCase();
  table = document.getElementById("questionTableCQ");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
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

window.addEventListener("load", function() {
  //getQuestionsExam();
  //getQuestionsCQ();
  //getAllExams();
  getAllExamsStudent();
});
