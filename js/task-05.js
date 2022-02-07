const nameInput = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

const usName = () => {
  if (nameInput.value === "") {
    userName.textContent = "Anonymous";
  } else {
    userName.textContent = nameInput.value;
  }
};

nameInput.addEventListener("input", usName);
