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
