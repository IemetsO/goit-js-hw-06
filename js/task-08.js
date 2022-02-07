const loginForm = document.querySelector(".login-form");

function submitForm(event) {
  event.preventDefault();

  const userEmail = event.currentTarget.elements.email.value;
  const userPassword = event.currentTarget.elements.password.value;
  const dataForm = { userEmail, userPassword };

  if (userEmail === "" || userPassword === "") {
    alert("Всі поля мають бути заповненими");
  } else {
    console.log(dataForm);
  }

  loginForm.reset();
}

loginForm.addEventListener("submit", submitForm);
