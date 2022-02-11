let btn1 = document.querySelector("#button1");
let btn2 = document.querySelector("#button2");
let btn3 = document.querySelector("#button3");

let spanCount = document.querySelectorAll(".counter");

let counter = 1;

btn1.addEventListener('click', function() {
    spanCount[0].innerText = counter;
    counter++;
});