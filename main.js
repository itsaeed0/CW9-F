function createCookie(name, passwords) {
  let username = document.getElementById("user");
  let password = document.getElementById("pd");

  today = new Date();
  let expire = new Date();
  expire.setTime(today.getTime() + 360000 * 24);

  document.cookie =
    "name" + username.value + ";path=/" + ";expires=" + expire.toUTCString();
  document.cookie =
    "password=" +
    encodeURI(password.value) +
    ";path=/" +
    ";expires=" +
    expire.toUTCString();
}

window.onload = function () {
  let uname = "Ashkan";
  let pass = "2077";

  document.getElementById("user").value = uname;
  document.getElementById("pd").value = pass;
};
