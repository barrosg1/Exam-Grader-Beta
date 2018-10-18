var request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);

    var html = "";

    // looping through the data response
    for (var a = 0; a < response.length; a++) {
      var id = response[a].id;
      var topic = response[a].type;
      var difficulty = response[a].difficulty;
      var question = response[a].data;

      // appending html
      html += "<tr>";
      html +=
        "<td><input style='width:100%; height: 30px' type='number' id='points" +
        a +
        "' min='1' max='100' onchange='getPoints(" +
        id +
        "," +
        "this)' /></td>";
      html += "<td>" + question + "</td>";
      html += "<td>" + topic + "</td>";
      html += "<td>" + difficulty + "</td>";
      html += "</tr>";
    }

    document.getElementById("dataExam").innerHTML = html;
  }
};

request.open("POST", "curl/getQuestions.php", true);
request.send(null);
