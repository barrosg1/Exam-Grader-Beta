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
      html += "<td>" + question + "</td>";
      html += "<td>" + topic + "</td>";
      html += "<td>" + difficulty + "</td>";
      html += "<td>";
      html +=
        "<input id='deleteBtn' class='deleteBtn' style='float:left' type='button' value='Delete' onclick='deleteQuestion(" +
        id +
        "," +
        "this)'>";
      html += "</td>";
      html += "</tr>";
    }

    document.getElementById("dataCQ").innerHTML = html;
  }
};

request.open("POST", "curl/getQuestions.php", true);
request.send(null);
