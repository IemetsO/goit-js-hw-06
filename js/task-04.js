let counterValue = 0;
const value = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');

const decrementClick = () => {
    event.preventDefault();
    value.textContent = counterValue -=1;
  };
decrementButton.addEventListener("click", decrementClick);

const incrementButton = document.querySelector('[data-action="increment"]');

const incrementClick = () => {
    event.preventDefault();
    value.textContent = counterValue +=1;
  };
incrementButton.addEventListener("click", incrementClick);


