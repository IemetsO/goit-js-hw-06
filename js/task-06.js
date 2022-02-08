const validation = document.querySelector("#validation-input");
console.log(validation.getAttribute("data-length"))
validation.addEventListener("blur", verification);
function verification(event) {
  const userInputLength = event.currentTarget.value.length.join("");
  console.log(userInputLength)
//   // const reqLength = validation.dataset.length;
// const reqLength = validation.getAttribute("data-length");
//   console.log(reqLength)
//   console.dir(validation)

  if (userInputLength === validation.getAttribute("data-length")) {
    validation.classList.add("valid");
    validation.classList.remove("invalid");
  } else {
    validation.classList.add("invalid");
    validation.classList.remove("valid");
  }
}
