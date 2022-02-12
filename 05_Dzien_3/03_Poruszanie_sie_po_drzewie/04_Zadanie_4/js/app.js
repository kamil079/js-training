let div = document.querySelectorAll(".listContainer ul li");

div.forEach((el) => el.addEventListener("mouseover", colors));

function colors() { 
    this.style.background = "green";
}
