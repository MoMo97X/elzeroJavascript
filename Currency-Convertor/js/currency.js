/* Selecting target element */
let amount = document.querySelector(".amout");
let from = document.querySelector(".from");
let to = document.querySelector(".to");
let covBtn = document.querySelector(".btn");
let box = document.querySelector(".box");

function getApi() {
  fetch(
    `https://v6.exchangerate-api.com/v6/840a13dde2ef3e6f00a4aabf/latest/${from}`,
  )
    .then((res) => response.json)
    .then((data) => console.log(data));
}

function convert(d) {
  if (amount && from && to) {
  } else {
  }
}

covBtn.addEventListener("click", convert);
