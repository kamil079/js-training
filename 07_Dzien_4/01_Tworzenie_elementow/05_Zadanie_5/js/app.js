let parent = document.querySelector("#list");
let btn = document.querySelector(".btn");

btn.addEventListener("click", removeAll);

function removeAll() {
    while (parent.firstChild) {
        parent.firstChild.remove()
    }}
