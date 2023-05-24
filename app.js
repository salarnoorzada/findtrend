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
// ? the below is triggering a className into html when you scroll and reach to that element
// ? so it makes a scroll animation.

//! the greenSeciont Title animation on scroll:
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showTitle");
    } else {
      entry.target.classList.remove("showTitle");
    }
  });
});
const title = document.querySelectorAll(".open-tabs-header");
title.forEach((el) => observer.observe(el));
//!open-tabs-box:
const observerTwo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const box = document.querySelectorAll(".findtrend-box");
box.forEach((el) => observerTwo.observe(el));
//! open tabs text:

const observerThree = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showThree");
    } else {
      entry.target.classList.remove("showThree");
    }
  });
});
const boxTwo = document.querySelectorAll(".open-tabs-text");
boxTwo.forEach((el) => observerThree.observe(el));
