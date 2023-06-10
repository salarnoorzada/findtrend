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
// !!!!
// var i = 0;
// var txt =
//   "Findtrend helps you to increase your productivity and reduce your computer's memory load, "; /* The text */
// var speed = 30; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   } else {
//     // add the span element after the text is typed
//     var span = document.createElement("span");
//     span.className = "long-text-gray";
//     span.innerHTML = "an application can<br /> fulfill daily browsing needs.";
//     document.getElementById("demo").appendChild(span);
//     // blinkCursor(); // start the cursor effect
//   }
// }

// // function blinkCursor() {
// //   var cursor = document.getElementById("demo");
// //   cursor.style.borderRight =
// //     cursor.style.borderRight == "0.15em solid orange"
// // ? "none"
// //       : "0.15em solid orange";
// //   setTimeout(blinkCursor, 750);
// // }

// typeWriter(); // start the typing effect
// // !!
// function isInViewport(element) {
//   // Get the element's position relative to the viewport
//   var bounding = element.getBoundingClientRect();
//   // Check if the element is outside the viewport
//   // Then invert the returned value because you want to know the opposite
//   return !(bounding.top > innerHeight || bounding.bottom < 0);
// }

// // Listen for the scroll event
// window.addEventListener("scroll", function () {
//   // Check if the element is in the viewport
//   if (isInViewport(document.getElementById("demo"))) {
//     // Start the typing effect
//     typeWriter();
//     // Remove the scroll event listener so it doesn't repeat
//     window.removeEventListener("scroll", arguments.callee);
//   }
// });
var i = 0;
var txt =
  "Findtrend helps you to increase your productivity and reduce your computer's memory load, "; /* The text */
var speed = 35; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // add the span element after the text is typed
    var span = document.createElement("span");
    span.className = "long-text-gray";
    span.innerHTML = "an application can<br /> fulfill daily browsing needs.";
    document.getElementById("demo").appendChild(span);
    blinkCursor(); // start the cursor effect
  }
}

// function blinkCursor() {
//   var cursor = document.getElementById("demo");
//   cursor.style.borderRight = cursor.style.borderRight == "0.15em solid orange" ? "none" : "0.15em solid orange";
//   setTimeout(blinkCursor, 750);
// }

function isInViewport(element) {
  // Get the element's position relative to the viewport
  var bounding = element.getBoundingClientRect();
  // Check if the element is fully visible in the viewport
  return bounding.top >= 0 && bounding.bottom <= innerHeight;
}

// ! the long-text-scroll-animation:
// Listen for the scroll event
window.addEventListener("scroll", function () {
  // Check if the element is in the viewport
  if (isInViewport(document.getElementById("demo"))) {
    // Check if the element is hidden
    if (document.getElementById("demo").innerHTML == "") {
      // Reset the index and start the typing effect again
      i = 0;
      typeWriter();
    }
  } else {
    // Hide the element
    document.getElementById("demo").innerHTML = "";
  }
});
