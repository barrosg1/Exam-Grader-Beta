function logout() {
  localStorage.removeItem("id");
  localStorage.removeItem("instructor");

  window.location.replace("../auth/login.php");
}
