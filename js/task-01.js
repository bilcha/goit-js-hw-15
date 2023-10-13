const inputField = document.querySelector("#validation-input");

const checkValidity = (event) => {
  const input = event.target;
  if (input.value.length === parseInt(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return;
  }
  input.classList.remove("valid");
  input.classList.add("invalid");
}

inputField.addEventListener("blur", checkValidity);
