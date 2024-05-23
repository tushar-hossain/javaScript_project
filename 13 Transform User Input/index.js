// Finding Elements

const body = document.querySelector("body");
const inputBox = document.getElementById("inputBox");
const copyBtn = document.getElementById("copyBtn");
const changeBtn = document.getElementById("changeBtn");

let getColor = () => {
  let msg = generateColor();
  body.style.backgroundColor = msg;
  inputBox.value = msg.substring(1);
  // check color code
  inputBox.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (isValidHex(color)) {
      body.style.backgroundColor = `#${color}`;
    }
  });
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
    generateToastMessage(`#${inputBox.value} copied`);
  } else {
    alert("Invalid color code");
  }
};

// generate Toas tMessage
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

  body.appendChild(div);
}

// hex valid function
function isValidHex(color) {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
// addEventListener
changeBtn.addEventListener("click", getColor);
copyBtn.addEventListener("click", copyText);
