const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredient = ingredients.forEach(function (ingredient) {
  ingredient + "";
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  const list = document.querySelector("#ingredients");
  list.append(item);
});
