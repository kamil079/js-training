let trs = document.querySelectorAll("tr");

// let firstRow = trs[1];
// let secondRow = trs[2];

trs[1].addEventListener("click", remove);
trs[2].addEventListener("click", remove);

function remove() {
    this.parentElement.removeChild(this);
}
