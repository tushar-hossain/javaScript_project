// Finding Elements

const weightInpu = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateButton = document.getElementById("calculateButton");
const resetButton = document.getElementById("restButton");
const message = document.getElementById("message");
const result = document.getElementById("result");

const calculateBMI = () => {
  let weightValue = Number(weightInpu.value);
  let heightValue = Number(heightInput.value);
  let bmi = weightValue / (heightValue * 0.0254 * heightValue * 0.0254);

  message.textContent = bmi.toFixed(2);
  let mgs = showMesage(bmi);
  result.innerHTML = mgs;
};

const reset = () => {
  weightInpu.value = "";
  heightInput.value = "";
  message.textContent = "";
  result.innerHTML = "";
};

const showMesage = (bmiValue) => {
  if (bmiValue < 16) {
    return "You are Severe thin";
  } else if (bmiValue >= 16 && bmiValue <= 17) {
    return "you are Moderate Thin";
  } else if (bmiValue > 17 && bmiValue <= 18.5) {
    return "you are Mid Thin";
  } else if (bmiValue > 18.5 && bmiValue <= 25) {
    return "you are Normal";
  } else if (bmiValue > 25) {
    return "you are Overweight";
  }
};

const eventHandler = () => {
  if (Number(weightInpu.value) && Number(heightInput.value)) {
    calculateBMI();
  } else {
    alert("Please provide Valide Inputs");
    reset();
  }
};

calculateButton.addEventListener("click", eventHandler);
resetButton.addEventListener("click", reset);
