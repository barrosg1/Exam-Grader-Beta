var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);

    var html = "";
    var releasedExams = [];

    for (var j = 0; j < response.length; j++) {
      var release = response[j].release_exam;
      var examName = response[j].name;

      if (release == "1") {
        releasedExams[j] = examName;
      }
    }

    if (releasedExams.length === 0) {
      html += "<p>No exams have been released</p>";
    } else {
      var answerStr = "answer_";
      var pointsGivenStr = "grade_";
      var feedbackStr = "feedback_";

      for (var a = 0; a < response.length; a++) {
        var release = response[a].release_exam;
        var examName = response[a].name;
        var pointsArray = response[a].points.split(",");

        var questionsArray = [];
        var answersArray = [];
        var feedbackArray = [];
        var pointsGivenArray = [];

        for (var i = 0; i < pointsArray.length; i++) {
          var ans = answerStr + (i + 1);
          var feed = feedbackStr + (i + 1);
          var pGiven = pointsGivenStr + (i + 1);

          questionsArray[i] = response[a][i];
          answersArray[i] = response[a][ans];
          feedbackArray[i] = response[a][feed];
          pointsGivenArray[i] = response[a][pGiven];
        }

        var dataObj = {
          examName: examName,
          pointsArray: pointsArray,
          questionsArray: questionsArray,
          answersArray: answersArray,
          feedbackArray: feedbackArray,
          pointsGivenArray: pointsGivenArray
        };
        var data = JSON.stringify(dataObj);

        // appending html
        html += "<tr>";
        if (release == "1") {
          releasedExams[a] = examName;
          html +=
            "<td onclick='viewExamGrades(" + data + ")'>" + examName + "</td>";
        }
        html += "</tr>";
      }
    }

    document.getElementById("displayStudentInst").innerHTML = html;
  }
};

var studentId = localStorage.getItem("id");
var studentIdJSON = JSON.stringify({ studentId: studentId });

request.open("POST", "curl/examInstance.php", true);
request.send(studentIdJSON);

// -----------------------------Functions---------------------------------------

function viewExamGrades(obj) {
  var examName = obj.examName;
  var pointsArray = obj.pointsArray;
  var questionsArray = obj.questionsArray;
  var answersArray = obj.answersArray;
  var feedbackArray = obj.feedbackArray;
  var pointsGivenArray = obj.pointsGivenArray;

  document.getElementById("viewExamsDiv").style.display = "none";
  document.getElementById("viewExamGrade").style.display = "block";

  var html = "";
  html += "<center>";
  html += "<h1>Exam Name: " + examName + "</h1>";
  html += '<div class="takeExamQ">';
  html += "<h3>Total Score: 55 out of 100</h3>";
  html += "<h3>Percentage: 55%</h3>";
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
