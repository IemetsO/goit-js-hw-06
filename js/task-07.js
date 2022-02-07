const inputForm = document.querySelector("#font-size-control");

inputForm.addEventListener("input", changeSize);

function changeSize(event) {
  const userSize = event.currentTarget.value;
  const patternText = document.querySelector("span#text");
  patternText.style.fontSize = `${userSize}px` + "";
}
