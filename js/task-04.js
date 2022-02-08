let counterValue = 0;
const value = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const decrementClick = () => {
        value.textContent = counterValue -=1;
  };

const incrementClick = () => {
       value.textContent = counterValue +=1;
  };
incrementButton.addEventListener("click", incrementClick);
decrementButton.addEventListener("click", decrementClick);


