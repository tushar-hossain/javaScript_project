// Guessing Game

// Selectir items

let form = document.querySelector("form");
let cardBody = document.querySelector(".card-body");
let guessingNumber = form.querySelector("#guessingNumber");
let resutTex = cardBody.querySelector(".resutText");
let remainingAttempts = cardBody.querySelector(".remainingAttempts");
let lostWonMessages = document.createElement("p");
let checkButtons = document.querySelector("#btn");

// initializing attempts

let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLost = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let guessNumber = Number(guessingNumber.value);
  attempts++;
  if (attempts === 5) {
    guessingNumber.disabled = true;
    checkButtons.disabled = true;
  }
  if (attempts < 6) {
    checkResult(guessNumber);
    remainingAttempts.innerHTML = `Remaining Attempts: ${totalAttempts - attempts}`;
  }
  guessingNumber.value = "";
});

function checkResult(guessingNumber) {
  let randomNumber = getRandomNumber(5);
  if (guessingNumber === randomNumber) {
    resutTex.innerHTML = `You have Won`;
    totalWons++;
  } else {
    resutTex.innerHTML = `You have lost; random number was: ${randomNumber}`;
    totalLost++;
  }
  lostWonMessages.innerHTML = `Wons: ${totalWons} Losts: ${totalLost}`;
  lostWonMessages.classList.add("largeText");
  cardBody.appendChild(lostWonMessages);
}

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
