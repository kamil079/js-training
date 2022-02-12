let boxs = document.querySelectorAll(".box");

let btns = document.querySelectorAll(".btn");

btns.forEach((el) => el.addEventListener("click", show));

function show() {
    if (this != null) {
        this.previousElementSibling.style.display = "none";
    } else {
        this.previousElementSibling.classList.add("visible");
    }
}
