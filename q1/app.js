function myFunction() {
  let element = document.body.classList.toggle("dark");

  if (element.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

let put = document.getElementById("changeThem");
put.addEventListener("click", () => myFunction());

window.addEventListener("DOMContentLoaded", () => {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
