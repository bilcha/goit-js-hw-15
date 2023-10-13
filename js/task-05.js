function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elements = {
  inputField: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  box: document.querySelector("#boxes")
}

function createMarkup(amount) {
  let markup = "";
  for (let i = 0; i < amount; i += 1) {
    let styles = `background-color:${getRandomHexColor()};width:${30 + i * 10}px;height:${30 + i * 10}px`;
   markup += `<div style=${styles}></div>`
  }
  return markup;
}

function addBoxes() {
 elements.box.innerHTML = createMarkup(elements.inputField.value);
}

function destroyBoxes() {
  elements.box.innerHTML = "";
}

elements.createBtn.addEventListener("click", addBoxes);
elements.destroyBtn.addEventListener("click", destroyBoxes);
