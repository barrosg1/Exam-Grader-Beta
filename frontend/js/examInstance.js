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
      // looping through the data response
      for (var a = 0; a < response.length; a++) {
        var id = response[a].id;
        var release = response[a].release_exam;
        var examName = response[a].name;
        var points = response[a].points;
        var pointsArray = points.split(",");
        var answer_1 = response[a].answer_1;
        var answer_2 = response[a].answer_2;
        var answer_3 = response[a].answer_3;
        var feedback_1 = response[a].feedback_1;
        var feedback_2 = response[a].feedback_2;
        var feedback_3 = response[a].feedback_3;
        var grade_1 = response[a].grade_1;
        var grade_2 = response[a].grade_2;
        var grade_3 = response[a].grade_3;
        var questionsArray = [];
        var answersArray = [answer_1, answer_2, answer_3];
        var feedbackArray = [feedback_1, feedback_2, feedback_3];
        var pointsGivenArray = [grade_1, grade_2, grade_3];
        var studentId = localStorage.getItem("id");

        for (var i = 0; i < pointsArray.length; i++) {
          var question = response[a][i];
          questionsArray[i] = question;
        }

        var dataObj = {
          examName: examName,
          points: points,
          pointsArray: pointsArray,
          questionsArray: questionsArray,
          answersArray: answersArray,
          feedbackArray: feedbackArray,
          pointsGivenArray: pointsGivenArray,
          studentId: studentId
        };

        var data = JSON.stringify(dataObj);

        // appending html
        html += "<tr>";

        if (release == "1") {
          releasedExams[i] = examName;
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

function viewExamGrades(obj) {
  var id = obj.id;
  var release = obj.release;
  var examName = obj.name;
  var points = obj.points;
  var pointsArray = obj.pointsArray;
  var questionsArray = obj.questionsArray;
  var answersArray = obj.answersArray;
  var feedbackArray = obj.feedbackArray;
  var pointsGivenArray = obj.pointsGivenArray;
  var studentId = obj.studentId;

  document.getElementById("viewExamsDiv").style.display = "none";
  document.getElementById("viewExamGrade").style.display = "block";

  // ----------------------------------------------------
  var dataObj = { studentId: studentId };
  var data = JSON.stringify(dataObj);

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      var grades = [];

      for (var i = 0; i < response.length; i++) {
        var grade_1 = response[i].grade_1;
        var grade_2 = response[i].grade_2;
        var grade_3 = response[i].grade_3;

        grades[i] = [grade_1, grade_2, grade_3];
      }

      // ----------------------------------------------------

      var html = "";
      html += "<center>";
      html += '<div class="takeExamQ">';
      html += "<h2>Total Score: 55 out of 100</h2>";
      html += "<h2>Percentage: 55%</h2>";
      html += "<hr>";

      for (var i = 0; i < questionsArray.length; i++) {
        var question = questionsArray[i];
        var answer = answersArray[i];
        var points = pointsArray[i];
        var feedback = feedbackArray[i];

        html += "<center>";
        html += "<h2>Question " + (i + 1) + "</h2>";
        html += '<h4 style="padding: 0 10px 0 10px;">' + question + "</h4>";
        html += "<h3>Your answer:</h3>";
        html +=
          "<textarea class='studentGradeTextArea' name='subject' placeholder='Answer here..' style='height:130px' disabled>";
        html += answer;
        html += "</textarea>";
        html += "<h3>Points Possible:</h3>";
        html += "<p>" + grades[i] + " points</p>";
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
  };
  request.open("POST", "curl/getInstance.php", true);
  request.send(data);
}
