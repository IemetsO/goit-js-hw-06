const validation = document.querySelector("#validation-input");

validation.addEventListener("blur", verification);
function verification(event) {
  const userInputLength = event.currentTarget.value.length;


  if (userInputLength == validation.getAttribute("data-length")) {
    validation.classList.add("valid");
    validation.classList.remove("invalid");
  } else {
    validation.classList.add("invalid");
    validation.classList.remove("valid");
  }
}
