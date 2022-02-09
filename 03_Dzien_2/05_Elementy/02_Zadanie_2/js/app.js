const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");

console.log(home);
console.log(children);
console.log(ban);
console.log(someBlocks);
console.log(listElements);

children.forEach(el => console.log(el));
someBlocks.forEach(el => console.log(el));
listElements.forEach(el => console.log(el));