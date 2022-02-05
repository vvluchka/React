let countEl = document.getElementById("count-el")

let count = 1

let priceEl = document.getElementById("first-price")

let price = 50.00

console.log(priceEl)

function increment() {
    count = count + 1
    countEl.innerText = count
    price = price * 2
    priceEl.innerText = price
}

function decrement() {
  count = count - 1
  countEl.innerText = count
  price = price / 2
  priceEl.innerText = price
}



let countEl2 = document.getElementById("count-el-2")

let count2 = 1

let priceEl2 = document.getElementById("second-price")

let price2 = 70.00

console.log(priceEl2)

function increment2() {
    count2 = count2 + 1
    countEl2.innerText = count2
    price2 = price2 * 2
    priceEl2.innerText = price2
}

function decrement2() {
  count2 = count2 - 1
  countEl2.innerText = count2
  price2 = price2 / 2
  priceEl2.innerText = price2
}

function totalPrice(){
  let totalPrice = document.getElementById("first-price").value
}