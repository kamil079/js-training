let btns = document.querySelectorAll('.btn');
let spanCount = document.querySelector('.counter');

let counter = 0;

for(let i=0; i<btns.length; i++) {
    btns[i].addEventListener('click', function() {
        spanCount.innerText = counter + 1;
        counter++;
    })
}