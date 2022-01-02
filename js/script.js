{
   const welcome = () => {
      console.log("Witam wszystkich na mojej stronie! 😃 ")
   }

   const toggleBackground = () => {
      const body = document.querySelector(".body");
      const dark = document.querySelector(".dark");


      body.classList.toggle("darkTheme");
      dark.innerText = body.classList.contains("darkTheme") ? "Jasny"
         : "Ciemny";
   };

   const init = () => {
      const themeButton = document.querySelector(".js-themeButton");
      themeButton.addEventListener("click", (toggleBackground));

      welcome();
   }
   init();
}

{
   const button = document.querySelector(".js-lastName");
   const lastName = document.querySelector(".lastName");

   button.addEventListener("click", () => {
      if (lastName.innerText === ("")) {
         lastName.innerText = " Monika Lenartowicz"
      }
   });
}


