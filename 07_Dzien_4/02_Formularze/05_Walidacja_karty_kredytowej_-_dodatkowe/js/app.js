let inputCardNr = document.querySelector("#cardNumber");
let cardType = document.querySelector("#type");

let allCards = document.querySelectorAll("i");
let visaPic = document.querySelector("#visa-icon");
let amPic = document.querySelector("#amex-icon");
let masterPic = document.querySelector("#mastercard-icon");

allCards.forEach((el) => (el.style.visibility = "hidden"));

inputCardNr.addEventListener("keyup", verifyVisa);
inputCardNr.addEventListener("keyup", verifyAmPic);
inputCardNr.addEventListener("keyup", verifymasterPic);

function verifyVisa(e) {
    cardType.innerText = '';
    switch (e.target.value[0]) {
        case "4":
            if (e.target.value.length >= 13 && e.target.value.length <= 16) {
            }
    }
    visaPic.style.visibility = "visible"; //why this is not workin..
    cardType.innerText = 'visa'
    
    // console.log(e.target.value[0]);
}

function verifyAmPic() {
    if (inputCardNr.value[0] == 6) {
        amPic.style.visibility = "visible"; //why this is not workin..
        console.log(amPic);
    }
}

function verifymasterPic() {
    if (inputCardNr.value[0] == 7) {
        masterPic.style.visibility = "visible"; //why this is not workin..
        console.log(masterPic);
    }
}
