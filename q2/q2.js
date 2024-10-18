function myFunction() {
  let element = document.body;
  element.classList.toggle("dark");
}
let put = document.getElementById("changeThem");




put.addEventListener("click", () => myFunction());

let form = document.getElementById("submiterForm");
console.log(form);
form.addEventListener("click", () => {
  // document.getElementById("demo").innerHTML = "Hello World";
  console.log("ali");
});

function store() {
  let name = document.getElementById("name").value;
  // localStorage.setItem("name_data", name);
  let email = document.getElementById("email").value;
  // localStorage.setItem("email_data", email);
  let password = document.getElementById("password").value;
  // localStorage.setItem("password_data", password);

  localStorage.setItem("name_data", name);
  // name.value = JSON.parse(localStorage.getItem("name_data"))
  console.log(JSON.parse(localStorage.getItem("name_data")));
}
