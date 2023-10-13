const form = document.querySelector(".login-form");

function formSubmission(event) {
  event.preventDefault();
  const { email, password } = event.target.elements;
  if (email.value.length > 0 && password.value.length > 0) {
    const userData = {
      email: email.value,
      password: password.value
    }
    console.log(userData);
    event.target.reset();
    return
  }
  alert("All fields are required. Please fill out all fields");
}

form.addEventListener("submit", formSubmission);
