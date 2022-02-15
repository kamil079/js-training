let emailEl = document.querySelector('#email');
let nameEl = document.querySelector('#name');
let surnameEl = document.querySelector('#surname');
let pass1El = document.querySelector('#pass1');
let pass2El = document.querySelector('#pass2');
let checkbox = document.querySelector('#agree');

let errMsg = document.querySelector('#error-message');
let sucMsg = document.querySelector('#success-message');

let formEl = document.querySelector('form');

formEl.addEventListener('submit', function(e) {
    e.preventDefault();

    if(!emailEl.value.includes('@')) {
        errMsg.classList.remove('d-none');
        errMsg.innerText = 'Email musi posiadać znak @';
    }
})