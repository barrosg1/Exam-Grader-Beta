var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);

    var html = "";

    // looping through the data response
    for (var a = 0; a < response.length; a++) {
      var id = response[a].id;
      var ucid = response[a].username;
      var fname = response[a].fname;
      var lname = response[a].lname;

      // appending html
      html += "<tr onclick='displayExamInstance(" + id + ")'>";
      html += "<td>" + ucid + "</td>";
      html += "<td>" + fname + "</td>";
      html += "<td>" + lname + "</td>";
      html += "</tr>";
    }

    document.getElementById("studentsDisplay").innerHTML = html;
  }
};

request.open("POST", "curl/getStudents.php", true);
request.send(null);

function displayExamInstance(studentId) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      //console.log(response);

      var html = "";

      // looping through the data response
      for (var a = 0; a < response.length; a++) {
        var id = response[a].id;
        var release = response[a].release_exam;
        var examName = response[a].name;
        var points = response[a].points;
        var pointsArray = points.split(",");
        var selected = response[a].selectedQ;
        var selectedQArray = selected.split(",");
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

        for (var i = 0; i < pointsArray.length; i++) {
          var question = response[a][i];
          questionsArray[i] = question;
        }

        var dataObj = {
          id: id,
          release: release,
          examName: examName,
          points: points,
          pointsArray: pointsArray,
          questionsArray: questionsArray,
          answersArray: answersArray,
          feedbackArray: feedbackArray,
          pointsGivenArray: pointsGivenArray,
          selectedQArray: selectedQArray
        };

        console.log(dataObj);

        var data = JSON.stringify(dataObj);

        // appending html
        html += "<tr onclick='viewExamInstance(" + data + ")'>";
        html += "<td>" + examName + "</td>";
        html += "</tr>";
      }

      document.getElementById("studentExamDisplay").innerHTML = html;
    }
  };

  var data = JSON.stringify({ studentId: studentId });

  request.open("POST", "curl/examInstance.php", true);
  request.send(data);
}

function viewExamInstance(obj) {
  var id = obj.id;
  var release = obj.release;
  var examName = obj.examName;
  var points = obj.points;
  var pointsArray = obj.pointsArray;
  var questionsArray = obj.questionsArray;
  var answersArray = obj.answersArray;
  var feedbackArray = obj.feedbackArray;
  var pointsGivenArray = obj.pointsGivenArray;
  var selectedQArray = obj.selectedQArray;

  document.getElementById("studentExamInstance").style.display = "none";
  document.getElementById("evaluateExam").style.display = "block";

  var html = "";

  for (var i = 0; i < questionsArray.length; i++) {
    var questionId = selectedQArray[i];
    var question = questionsArray[i];
    var answer = answersArray[i];
    var points = pointsArray[i];
    var pointsGiven = pointsGivenArray[i];
    var feedback = feedbackArray[i];
    var feedbackId = "feedback" + questionId;
    var pointsGivenId = "pointsGiven" + questionId;

    html += '<div class="takeExamQ">';
    html += "<center>";
    html += "<h2>Question " + (i + 1) + "</h2>";
    html += '<h4 style="padding: 0 10px 0 10px;">' + question + "</h4>";
    html += "<h3>Student's Answer:</h3>";
    html += "<p>" + answer + "</p>";
    html += "<h3>Points Possible:</h3>";
    html += "<p>" + points + " points</p>";
    html += "<h3>Points Given:</h3>";
    html +=
      '<input id="' +
      pointsGivenId +
      '" type="number" value="' +
      pointsGiven +
      '">';
    html += "<h3>Feedback:</h3>";
    html +=
      '<textarea id="' +
      feedbackId +
      '" class="studentGradeTextArea" name="subject" placeholder="Answer here.." style="height:130px">';
    html += feedback;
    html += "</textarea>";
    html += "</center>";
    html += "</div>";
    html += "<hr>";

    //console.log(pointsGivenId);

    // questionsToBeReleased[i] = {
    //   points: points,
    //   questionId: questionId
    // };
  }

  var dataObj = {
    id: id,
    release: release,
    examName: examName,
    questionsArray: questionsArray,
    //gradedQuestions: questionsToBeReleased
    selectedQArray: selectedQArray
  };

  var data = JSON.stringify(dataObj);

  //console.log(data);

  html +=
    "<center><input id='examSaveBtn' type='button' value='Release Exam' onclick='releaseExam(" +
    data +
    ")'></center>";

  document.getElementById("evaluateExam").innerHTML = html;
}

function releaseExam(obj) {
  var id = obj.id;
  //var release = obj.release;
  var selectedQArray = obj.selectedQArray;
  var gradedQuestions = [];

  for (var i = 0; i < selectedQArray.length; i++) {
    var questionId = selectedQArray[i];
    var feedbackId = "feedback" + questionId;
    var pointsGivenId = "pointsGiven" + questionId;

    var newFeedbackVal = document.getElementById(feedbackId).value;
    var newPointsGiven = document.getElementById(pointsGivenId).value;

    gradedQuestions[i] = {
      pointsGiven: newPointsGiven,
      feedback: newFeedbackVal
    };
  }

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      alert(response);
    }
  };

  var dataObj = {
    id: id,
    release: "1",
    gradedQuestions: gradedQuestions
  };

  console.log(dataObj);
  var data = JSON.stringify(dataObj);

  request.open("POST", "curl/releaseExam.php", true);
  request.send(data);
}

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
