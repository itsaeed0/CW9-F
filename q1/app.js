// let theme = "dark";
// localStorage.setItem("themeUser", theme);
// localStorage.getItem("themeUser");

// let test = localStorage.getItem("themeUser");
// let put = document.getElementById("changeThem");

// function myFunction() {
//     let element = document.body;
//     element.classList.toggle("dark");

//     if (test === dark){
//         localStorage.clear()
//         console.log(1)
//         localStorage.setItem("themeUser", "light");
        
//     }else {
//         localStorage.clear()
//         console.log(2);
//         localStorage.setItem("themeUser", "dark");
//     }
//     }
    
    
//     console.log(put)
//     put.addEventListener('click', () => myFunction());

//     window.addEventListener("DOMContentLoaded", () => {
//         let theme = localStorage.getItem("theme");
//         if (theme === "dark") {
//             document.body.classList.add("dark");
//         } else {
//             document.body.classList.remove("dark");
//         }
//     });


// // document.addEventListener('DOMContentLoaded', (event) => {
// //     const savedTheme = localStorage.getItem('theme') || 'light';
// //     document.documentElement.setAttribute('data-theme', savedTheme);
// //     });



function myFunction() {
    let element = document.body;
    element.classList.toggle("dark");
  
    if (element.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme",   
   "light");
    }
  }
  
  let put = document.getElementById("changeThem");
  put.addEventListener('click', () => myFunction());
  
  window.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      // apply other theme (e.g., remove "dark" class)
      document.body.classList.remove("dark");
    }
  });