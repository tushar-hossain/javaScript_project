// Finding Elements
const body = document.querySelector("body");
const inputText = document.getElementById("inputText");
const copyBtn = document.getElementById("copyText");
const changeBtn = document.getElementById("changeColor");

// get color function
function getColor() {
  let bg = generateColor();
  body.style.backgroundColor = bg;
  inputText.value = bg;
}
// generate color function
function generateColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}
// copy text to a color code
function getText() {
  navigator.clipboard.writeText(inputText.value);

  let div = document.createElement("div");
  div.innerText = inputText.value;
  div.className = "toast-message toast-message-slide-in";

  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
    });
  });

  body.appendChild(div);
}

// addEventListener
changeBtn.addEventListener("click", getColor);
copyBtn.addEventListener("click", getText);
