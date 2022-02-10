/*
  Poniżej napisz kod rozwiązujący zadania
 */
let chromeEl = document.querySelector(".chrome");
let firefox = document.querySelector(".firefox");
let edge = document.querySelector(".edge");

firefox.classList.add("edge");
let aElF = document.querySelector(".firefox + a");
aElF.innerText = "Firefox";

chromeEl.style.width = "100px";
let aElCh = document.querySelector(".chrome + a");
aElCh.innerText = "Chrome";

edge.style.backgroundImage = "url('./img/edge.jpg')";

