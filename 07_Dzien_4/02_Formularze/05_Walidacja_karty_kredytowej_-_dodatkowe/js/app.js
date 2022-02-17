let inputCardNr = document.querySelector("#cardNumber");

let allCards = document.querySelectorAll("i");
let visaPic = document.querySelector("#visa-icon");
let amPic = document.querySelector("#amex-icon");
let masterPic = document.querySelector("#mastercard-icon");

allCards.forEach((el) => (el.style.visibility = "hidden"));

inputCardNr.addEventListener("keyup", verifyVisa);

function verifyVisa() {
    if (inputCardNr.value[0] == 1) {
        visaPic.style.visibility = "visible"; //why this is not workin..
        console.log(visaPic);
    }
}
