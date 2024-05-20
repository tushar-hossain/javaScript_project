//  Digital Clock with Animated Progress-bar

// Finding Elements
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const progressBar = document.getElementById("progress");

// Create timing function

const createTime = () => {
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  // add zero
  const addZero = (text) => {
    if (text < 10) {
      text = "0" + text;
    }
    return text;
  };

  hour.textContent = addZero(hr);
  minute.textContent = addZero(min);
  second.textContent = addZero(sec);

  progressBar.style.width = (sec / 60) * 100 + "%";
};

setInterval(createTime, 1000);
