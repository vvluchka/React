let countEl = document.getElementById("count-el")

let count = 0

let priceEl = document.getElementById("first-price")

let price = 50.00

console.log(priceEl)

function increment() {
    count = count + 1
    countEl.innerText = count
    price = price * 2
    priceEl.innerText = price
    console.log(price)

}

function decrement() {
  count = count - 1
  countEl.innerText = count
  price = price / 2
    priceEl.innerText = price
}