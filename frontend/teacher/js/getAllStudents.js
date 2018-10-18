// Display students

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
