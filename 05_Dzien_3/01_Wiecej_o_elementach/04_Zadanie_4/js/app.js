/*
  Poniżej napisz kod rozwiązujący zadania
 */

let menuEl = document.querySelector(".exercise ul");
let liEl = menuEl.querySelectorAll("li");
let all = document.querySelectorAll("body *");

menuEl.classList.add("menu");

liEl.forEach((el) => el.classList.add("menuElement"));

for (let i = 0; i < all.length; i++) {
    all[i].classList.remove("error");
}
