let amount = document.querySelector(".amount");
let from = document.querySelector(".from");
let to = document.querySelector(".to");
let box = document.querySelector(".box");
let covBtn = document.querySelector(".btn");
let data;

async function fetchApi() {
  try {
    let response = await fetch(
      `https://v6.exchangerate-api.com/v6/840a13dde2ef3e6f00a4aabf/latest/USD`,
    );
    data = await response.json();
  } catch {
    box.innerHTML = `Failed to fetch exchange rates ${error}`;
  }
}

fetchApi();

covBtn.addEventListener("click", async () => {
  if (!amount.value) {
    box.innerHTML = "please enter an amount";
    return;
  }

  let amount_Usd = amount.value / data.conversion_rates[from.value];
  let result = amount_Usd * data.conversion_rates[to.value];

  box.innerHTML = ` ${amount.value} ${from.value} = ${result.toFixed(2)} ${to.value}`;
});
