var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);

    console.log(response);
  }
};

request.open("POST", "curl/getStudents.php", true);
request.send(null);
