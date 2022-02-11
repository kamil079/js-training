let windowWidth = document.querySelector("#windowWidth");
let windowHeight = document.querySelector("#windowHeight");

windowWidth.innerText = window.innerWidth;
windowHeight.innerText = window.innerHeight;

window.addEventListener("resize", () => {
    windowWidth.innerText = window.innerWidth;
    windowHeight.innerText = window.innerHeight;
});