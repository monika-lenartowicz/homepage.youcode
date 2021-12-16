console.log("cześć!");

let button = document.querySelector(".button");
let lastName = document.querySelector(".lastName");
console.log(lastName);

button.addEventListener("click", () => {
   if (lastName.innerText === ("")) {
      lastName.innerText = " Monika Lenartowicz"
   }
});

let themeButton = document.querySelector(".themeButton");
let darkTheme = document.querySelector(".darkTheme");
let body = document.querySelector(".body");
let dark = document.querySelector(".dark");

themeButton.addEventListener("click", () => {
   body.classList.toggle("darkTheme");
   dark.innerText = body.classList.contains("darkTheme") ? "Jasny"
      : "Ciemny";
});


