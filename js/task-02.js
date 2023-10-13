const sizeController = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

function fontSizeChanger(event) {
  textOutput.style.fontSize = `${event.target.value}px`;
}

sizeController.addEventListener("input", fontSizeChanger);
