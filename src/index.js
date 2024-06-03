import componentModule from "./homePage.js";
import menuPage from "./menuPage.js";
import aboutPage from "./aboutPage.js";

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementsByTagName("nav")[0];

  nav.addEventListener("click", (e) => {
    if (e.target.textContent === "Home") {
      componentModule();
    } else if (e.target.textContent === "Menu") {
      menuPage();
    } else if (e.target.textContent === "About") {
      aboutPage();
    }
  });
});
