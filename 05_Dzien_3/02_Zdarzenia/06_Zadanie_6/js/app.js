let divBox = document.querySelectorAll('.box');

divBox.forEach(el => el.addEventListener('click', function(e) {
    e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}))