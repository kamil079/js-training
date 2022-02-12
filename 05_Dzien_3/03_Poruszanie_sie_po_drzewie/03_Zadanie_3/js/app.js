let btns = document.querySelectorAll(".btn");
let boxes = document.querySelectorAll(".box");

btns.forEach((el) => el.addEventListener("click", changeCol));

function changeCol() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.parentElement.style.backgroundColor = randomColor;
}
