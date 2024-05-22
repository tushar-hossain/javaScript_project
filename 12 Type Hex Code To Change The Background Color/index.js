// Finding Elements

const body = document.querySelector("body");
const inputBox = document.getElementById("inputBox");
const copyBtn = document.getElementById("copyBtn");
const changeBtn = document.getElementById("changeBtn");

let getColor = () => {
  let msg = generateColor();
  body.style.backgroundColor = msg;
  inputBox.value = msg;
};
let generateColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};
// copy text a button
let copyText = () => {
  navigator.clipboard.writeText(inputBox.value);
  if (isValidHex(inputBox.value)) {
    generateToastMessage(`${inputBox.value} copied`);
  } else {
    alert("Invalid color code");
  }
};

function generateToastMessage(msg) {
  let div = document.createElement("div");
  div.textContent = msg;
  div.className = "toast-message toast-message-slide-in";
  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");
    div.addEventListener("animationend", function () {
      div.remove();
    });
  });
  // check color code
  inputBox.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color && isValidHex(color)) {
      body.style.backgroundColor = color;
    }
  });

  body.appendChild(div);
}

/**
 *
 * @param {string} color
 */
// hex valid function
function isValidHex(color) {
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;

  color = color.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}

// addEventListener
changeBtn.addEventListener("click", getColor);
copyBtn.addEventListener("click", copyText);
