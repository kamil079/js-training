let divEl = document.querySelector('#box');
let globX = document.querySelector('#globalX');
let globY = document.querySelector('#globalY');
let locX = document.querySelector('#localX');
let locY = document.querySelector('#localY');

divEl.addEventListener('mousemove', cordinates);

function cordinates(e) {
    globX.innerText = e.clientX;
    globY.innerText = e.clientY;
    locX.innerText = e.offsetX;
    locY.innerText = e.offsetY;
}