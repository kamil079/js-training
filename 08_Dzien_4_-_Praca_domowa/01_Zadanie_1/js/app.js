document.addEventListener("DOMContentLoaded", () => {
  form();
  //   pizzaOrder();
});
let sum = 0;

let form = function () {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let orderSum = document.querySelector(".order-info");
    let elToSum = document.createElement("span");

    orderSum.innerText = `Do zapłaty: ${sum}`;

    orderSum.append(elToSum);
  });

  let checkboxes = document.querySelectorAll("[type=checkbox]");
  let btns = document.querySelectorAll(".btn");
  let addAll = btns[0];
  let rmvAll = btns[1];

  addAll.addEventListener("click", () => {
    checkboxes.forEach((el) => (el.checked = true));
  });

  rmvAll.addEventListener("click", () => {
    checkboxes.forEach((el) => (el.checked = false));
  });

  checkboxes.forEach((el) => el.addEventListener("click", calc));
};

let calc = () => {
  let selected = document.querySelectorAll("[type=checkbox]:checked");

  selected.forEach((el) => (sum += parseFloat(el.dataset.price)));
  console.log(sum);

  let orderSum = document.querySelector(".order-info");
  let elToSum = document.createElement("span");

  orderSum.innerText = `Do zapłaty: ${sum + 35} zł`;

  orderSum.append(elToSum);
};
//to co w calc dodac do dodawania i usuwania i dziala ale sprawdz 