const colorButton = document.querySelector(".change-color");
console.log(colorButton);

function changeBgColor() {
  const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const body = document.body;
  body.style.backgroundColor = newColor;
  const spanColor = document.querySelector(".color");
  spanColor.textContent = newColor;
}

colorButton.addEventListener("click", changeBgColor);
