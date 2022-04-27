
var jwt = localStorage.getItem("jwt");
if (jwt == null) {
  window.location.href = './login.html'
}
var username = localStorage.getItem("username");


function logout() {
  localStorage.removeItem("jwt");
  localStorage.removeItem("username");
  window.location.href = './login.html'
}
