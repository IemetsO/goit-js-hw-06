
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');

function createBoxes () {
  const oldBox = document.querySelector("#boxes");
  const body = document.body;
  const amount = document.querySelector("#controls").firstElementChild.value;

  for (let i = 0; i < amount; i++) {
      const newBoxes = document.createElement("div");
    newBoxes.id = "boxes";
    newBoxes.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    newBoxes.style.width = "`30px";
    newBoxes.style.height = "30px";
    oldBox.after(newBoxes);
  }

}

function destroyBoxes() {
  const amount = document.querySelector("#controls").firstElementChild.value;

  for (let i = 0; i < amount; i++) {
    document.querySelector("#boxes").remove();
}
}

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);
