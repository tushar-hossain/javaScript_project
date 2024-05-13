// how to create a slideshow

let slideshowElements = document.querySelectorAll(".slideshow-element");

let countElements = 1;

setInterval(() => {
  countElements++;
  let currentElements = document.querySelector(".current");

  currentElements.classList.remove("current");

  if (countElements > slideshowElements.length) {
    countElements = 1;
    slideshowElements[0].classList.add("current");
  } else {
    currentElements.nextElementSibling.classList.add("current");
  }
}, 2000);
