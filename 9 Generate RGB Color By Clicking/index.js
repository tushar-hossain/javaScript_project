let bgColor = document.querySelector("body");
let changeColorBtn = document.getElementById("changebtn");

// even listener function
const changeBgColor = () => {
  let bg = colorGenerate();
  bgColor.style.backgroundColor = bg;
};

// color generate function
const colorGenerate = () => {
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let rgb = `rgb(${red},${blue},${green})`;
  return rgb;
};

changeColorBtn.addEventListener("click", changeBgColor);
