const validation = document.querySelector("#validation-input");

validation.addEventListener("blur", verification);
function verification(event) {
  const userInputLength = Number(event.currentTarget.value.length);

const reqLength = Number(validation.dataset.length);
 
  if (userInputLength === reqLength) {
   
    validation.classList.add("valid");
    validation.classList.remove("invalid");
  } else {
    validation.classList.add("invalid");
    validation.classList.remove("valid");
  }
}
