const burgerMenu = document.querySelector(".humburger-container");
const navContainer = document.querySelector(".nav-container");
const mainSection = document.querySelector(".main-section");
const firstCross = document.querySelector(".top-line");
const secondCross = document.querySelector(".bottom-line");
burgerMenu.addEventListener("click", () => {
  navContainer.classList.toggle("nav-menu-show");
  mainSection.classList.toggle("darken-body");
  firstCross.classList.toggle("first-cross");
  secondCross.classList.toggle("second-cross");
});
