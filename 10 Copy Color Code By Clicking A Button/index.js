// Finding Elements
const copyInput = document.getElementById("copyInput");
const copyButton = document.getElementById("copyButton");
const changeButton = document.getElementById("changeButton");
const body = document.querySelector("body");
// declaring functions
const getColor = () => {
  let decemal = generateColor();
  body.style.backgroundColor = decemal;
  getCopyColor(decemal);
  copyInput.value = decemal;
};
// generated color
const generateColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};
// copy input text
const getCopyColor = () => {
  return navigator.clipboard.writeText(copyInput.value);
};
// add Event Listener
changeButton.addEventListener("click", getColor);
copyButton.addEventListener("click", getCopyColor);
