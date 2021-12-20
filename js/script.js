console.log("cześć!");

let button = document.querySelector(".js-lastName");
let lastName = document.querySelector(".lastName");

button.addEventListener("click", () => {
   if (lastName.innerText === ("")) {
      lastName.innerText = " Monika Lenartowicz"
   }
});

let themeButton = document.querySelector(".js-themeButton");
let darkTheme = document.querySelector(".darkTheme");
let body = document.querySelector(".body");
let dark = document.querySelector(".dark");

themeButton.addEventListener("click", () => {
   body.classList.toggle("darkTheme");
   dark.innerText = body.classList.contains("darkTheme") ? "Jasny"
      : "Ciemny";
});


