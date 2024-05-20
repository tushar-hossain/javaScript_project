// Finding Elements
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let stopWatchCounterStart = document.getElementById("start");
let stopWatchCounterReset = document.getElementById("reset");
let stopWatchCounterPause = document.getElementById("pause");

// Function implements
let min;
let sec = 0;
let timer = null;
let watchIsRuning = false;

let timerStart = () => {
  if (!watchIsRuning) {
    watchIsRuning = true;
    timer = setInterval(() => {
      sec++;
      let { min, seconds } = getTime(sec);
      minute.textContent = min < 10 ? "0" + min : min;
      second.textContent = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);
  }
};

let timerReset = () => {
  watchIsRuning = false;
  clearInterval(timer);
  min = 0;
  sec = 0;
  minute.textContent = "00";
  second.textContent = "00";
};

let timerPause = () => {
  watchIsRuning = false;
  clearInterval(timer);
};

function getTime(sec) {
  min = parseInt(sec / 60);
  let seconds = parseInt(sec % 60);
  return {
    min,
    seconds,
  };
}

// Add Event Listener
stopWatchCounterStart.addEventListener("click", timerStart);
stopWatchCounterReset.addEventListener("click", timerReset);
stopWatchCounterPause.addEventListener("click", timerPause);
