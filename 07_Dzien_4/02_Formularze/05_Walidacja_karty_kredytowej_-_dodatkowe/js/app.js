let inputCardNr = document.querySelector("#cardNumber");

let allCards = document.querySelectorAll("i");
let visaPic = document.querySelector("#visa-icon");
let amPic = document.querySelector("#amex-icon");
let masterPic = document.querySelector("#mastercard-icon");

allCards.forEach((el) => (el.style.visibility = "hidden"));

inputCardNr.addEventListener("keyup", verifyVisa);
inputCardNr.addEventListener("keyup", verifyAmPic);
inputCardNr.addEventListener("keyup", verifymasterPic);

function verifyVisa() {
    if (inputCardNr.value[0] == 4) {
        visaPic.style.visibility = "visible"; //why this is not workin..
        console.log(visaPic);
    }
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
