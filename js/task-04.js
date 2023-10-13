function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const colorOutput = document.querySelector(".color");
const body = document.querySelector("body");

function changeColor() {
  const newColor = getRandomHexColor();
  colorOutput.innerHTML = newColor;
  body.style.backgroundColor = newColor;
}

button.addEventListener("click", changeColor);
