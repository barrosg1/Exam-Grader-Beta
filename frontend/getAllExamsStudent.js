var request = new XMLHttpRequest();
var html = "";

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);

    console.log(response);

    // looping through the data response
    for (var a = 0; a < response.length; a++) {
      var id = response[a].id;
      var examName = response[a].name;
      var points = response[a].points;
      var selectedQ = response[a].selectedQ;
      var pointsArray = points.split(",");
      var selectedQArray = selectedQ.split(",");
      var questionsArray = [];

      for (var i = 0; i < pointsArray.length; i++) {
        var question = response[a][i];
        questionsArray.push(question);
      }

      var dataObj = {
        id: id,
        questionsId: selectedQArray,
        questions: questionsArray,
        points: pointsArray
      };

      var data = JSON.stringify(dataObj);

      // appending html
      html += "<tr style='text-align:center'>";
      html += "<td onclick='takeExam(" + data + ")'>" + examName + "</td>";
      html += "</tr>";
    }

    document.getElementById("examsDisplayStudent").innerHTML = html;
  }
};

request.open("POST", "curl/getExams.php", true);
request.send(null);
