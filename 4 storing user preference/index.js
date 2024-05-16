// storing user preference

let changeFontSize = document.getElementById("changeFontSize");

let changeBgSize = document.getElementById("changeBgSize");

let resetButtons = document.getElementById("resetButtons");

let mainElement = document.querySelector("main");

// set Font Size and Background Size
const setValue = (getFontSize, getBgColor) => {
  changeFontSize.value = getFontSize;
  changeBgSize.value = getBgColor;
  mainElement.style.fontSize = getFontSize;
  mainElement.style.backgroundColor = getBgColor;
};

// Get Font Size and Background Size
const getitem = () => {
  let getFontSize = localStorage.getItem("fontSize");
  let getBgColor = localStorage.getItem("bgSize");

  if (getFontSize && getBgColor) {
    setValue(getFontSize, getBgColor);
  }
  if (!getFontSize && getBgColor) {
    setValue("16px", getBgColor);
  }
  if (getFontSize && !getBgColor) {
    setValue(getFontSize, "aqua");
  }
  if (!getFontSize && !getBgColor) {
    setValue("16px", "aqua");
  }
};

// Change Font Size
let fontSize = (e) => {
  let Fsize = e.target.value;
  mainElement.style.fontSize = Fsize;
  localStorage.setItem("fontSize", Fsize);
};

// Change Background Size
let backgroundSize = (event) => {
  let bgSize = event.target.value;
  mainElement.style.backgroundColor = bgSize;
  localStorage.setItem("bgSize", bgSize);
};
// Reset Buttons
const resetItems = () => {
  localStorage.removeItem("fontSize");
  localStorage.removeItem("bgSize");
};

// addEventListener
changeFontSize.addEventListener("change", fontSize);

changeBgSize.addEventListener("change", backgroundSize);

resetButtons.addEventListener("click", resetItems);

getitem();
