// Знаходжу елементи на сторінці 

const btnPlus = document.querySelector('[data-action = "plus"]');
const btnMinus = document.querySelector('[data-action = "minus"]');
const counter = document.querySelector('[data-counter]');
const price = document.querySelector('[id = "first-price"]');
const totalPrice = document.querySelector('[id = "total-price"]');

// Відслідковую кнопку btnMinus

btnMinus.addEventListener('click' , function() {

  console.log('Minus click');

// Перевіряю чи лічильник більший 1

  if (parseInt(counter.innerText) > 1 ) {

    counter.innerText = --counter.innerText;
    price.innerText = parseInt(price.innerText) - 50;
    totalPrice.innerText = price.innerText;

  }

})

// Відслідковую кнопку btnPlus

btnPlus.addEventListener('click' , function() {

  console.log('Plus click');
  counter.innerText = ++counter.innerText;
  price.innerText = parseInt(price.innerText) + 50
  totalPrice.innerText = price.innerText;

})