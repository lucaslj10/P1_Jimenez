var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var option_from, option_to;

input.addEventListener("keyup", resultado);
inputType.addEventListener("change", resultado);
resultType.addEventListener("change", resultado);

option_from = inputType.value;
option_to = resultType.value;

function resultado() {
  option_from = inputType.value;
  option_to = resultType.value;

  if (option_from === "m" && option_to === "km") {
    // de metro a kilometro
    result.value = Number(input.value) * 0.001;
  } else if (option_from === "m" && option_to === "cm") {
    //de metros a centímetros
    result.value = Number(input.value) * 100;
  } else if (option_from === "m" && option_to === "m") {
    //de metro a metro
    result.value = input.value;
  }

  if (option_from === "km" && option_to === "m") {
    //tde kilómetro a metro
    result.value = Number(input.value) * 1000;
  } else if (option_from === "km" && option_to === "cm") {
    //kilometro a centimetro
    result.value = Number(input.value) * 100000;
  } else if (option_from === "km" && option_to === "km") {
    //km a km
    result.value = input.value;
  }

  if (option_from === "cm" && option_to === "km") {
    //cm a km
    result.value = Number(input.value) * 0.00001;
  } else if (option_from === "cm" && option_to === "m") {
    //cm a m
    result.value = Number(input.value) * 0.01;
  } else if (option_from === "cm" && option_to === "cm") {
    //cm a cm
    result.value = input.value;
  }
}
