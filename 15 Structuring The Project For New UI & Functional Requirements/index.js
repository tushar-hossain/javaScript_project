// Finding Elements

const body = document.querySelector("body");
const inputBox = document.getElementById("inputBox");
const copyBtn = document.getElementById("copyBtn");
const changeBtn = document.getElementById("changeBtn");
const rgbInputBox = document.getElementById("rgbInputBox");

let getColor = () => {
  const color = generateColorDecimal();
  let bgColor = generateColor(color);
  body.style.backgroundColor = bgColor;
  let rgbColor = getRgbColor(color);
  rgbInputBox.value = rgbColor;

  inputBox.value = bgColor.substring(1);
  // check color code
  inputBox.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (isValidHex(color)) {
      body.style.backgroundColor = `#${color}`;
      rgbInputBox.value = hexToRgb(color);
    }
  });
};

// function-1 generate 3 random decimal number for red, green and blue
// return as objrct

function generateColorDecimal() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return { red, green, blue };
}

// function-2 generate hex color code
let generateColor = ({ red, green, blue }) => {
  // let { red, green, blue } = generateColorDecimal();

  const getTwoCode = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`;
};

// function-3 generate hex color code
function getRgbColor({ red, green, blue }) {
  // let { red, green, blue } = generateColorDecimal();
  return `rgb(${red},${green},${blue})`;
}

// convert to hex to decimal
/**
 *
 * @param {string} hex
 */
function hexToRgb(hex) {
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4), 16);
  return `rgb(${red},${green},${blue})`;
}

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
