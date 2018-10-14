function login() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  if (username.value == "" && password.value == "") {
    username.style.border = "1px solid #ff4d4d";
    document.querySelector("#errorUsername").innerHTML =
      "Username is required.";

    document.querySelector("#showMessage").style.display = "none";

    password.style.border = "1px solid #ff4d4d";
    document.querySelector("#errorPassword").innerHTML =
      "Password is required.";
  } else if (username.value == "") {
    username.style.border = "1px solid #ff4d4d";
    document.querySelector("#errorUsername").innerHTML =
      "Username is required.";

    document.querySelector("#showMessage").style.display = "none";
  } else if (password.value == "") {
    password.style.border = "1px solid #ff4d4d";
    document.querySelector("#errorPassword").innerHTML =
      "Password is required.";

    document.querySelector("#showMessage").style.display = "none";
  } else {
    username.style.border = "";
    document.querySelector("#errorUsername").innerHTML = "";

    password.style.border = "";
    document.querySelector("#errorPassword").innerHTML = "";

    sendAjaxData(username, password);
  }
}

function sendAjaxData(uname, psw) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(this.responseText);

      // document.querySelector("#showMessage").style.display = "block";
      // document.querySelector("#showMessage").innerHTML =
      //   "<p id='displayMessage'>" + data + "</p>";

      console.log(data);
    }
  };

  xhr.open("POST", "login_curl.php", true);

  xhr.setRequestHeader("Content-type", "application/json");

  var data = {
    username: uname.value,
    password: psw.value
  };

  xhr.send(JSON.stringify(data));
}
