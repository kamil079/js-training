let emailEl = document.querySelector("#email");
let nameEl = document.querySelector("#name");
let surnameEl = document.querySelector("#surname");
let pass1El = document.querySelector("#pass1");
let pass2El = document.querySelector("#pass2");
let checkbox = document.querySelector("#agree");

let errMsg = document.querySelector("#error-message");
let sucMsg = document.querySelector("#success-message");

let formEl = document.querySelector("form");

formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!emailEl.value.includes("@")) {
        errMsg.classList.remove("d-none");
        errMsg.innerText = "Email musi posiadać znak @";
    } else if (nameEl.value.length && surnameEl.value.length <= 2) {
        errMsg.classList.remove("d-none");
        errMsg.innerText = "Twoje imię lub nazwisko jest za krótkie";
    } else if (pass1El.value !== pass2El.value) {
        errMsg.classList.remove("d-none");
        errMsg.innerText = "Hasła nie są takie same lub puste";
    } else if (pass1El.value === "") {
        errMsg.classList.remove("d-none");
        errMsg.innerText = "Hasła nie są takie same lub puste";
    } else if (pass2El.value === "") {
        errMsg.classList.remove("d-none");
        errMsg.innerText = "Hasła nie są takie same lub puste";
    } else if (!checkbox.checked) {
        errMsg.classList.remove("d-none");
        errMsg.innerText = "Musisz zaakceptować warunki";
    } else {
        sucMsg.classList.remove("d-none");
        sucMsg.innerText = "Formularz wysłany";
    }
});
