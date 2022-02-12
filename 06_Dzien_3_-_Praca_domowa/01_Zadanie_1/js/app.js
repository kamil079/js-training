let art = document.querySelectorAll("article");
let contentEl = document.querySelectorAll(".content");

let firstArt = [...art][0];
let secondArt = [...art][1];

let firstCont = [...contentEl][0];
let secondCont = [...contentEl][1];

let firstLink = firstArt.querySelector("a");
let secondtLink = secondArt.querySelector("a");

firstLink.addEventListener("click", function () {
    firstCont.classList.remove("d-none");
});

secondtLink.addEventListener("mouseover", function () {
    secondCont.classList.remove("d-none");
});
secondtLink.addEventListener("mouseout", function () {
    secondCont.classList.add("d-none");
});
