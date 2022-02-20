let inputCardNr = document.querySelector("#cardNumber");

let allCards = document.querySelectorAll("i");
let iVisa = document.querySelector("i, #visa-icon");
let iAmex = document.querySelector("i, #amex-icon");
let iMaster = document.querySelector("i, #mastercard-icon");

allCards.forEach((el) => (el.style.visibility = "hidden"));

inputCardNr.addEventListener("keyup", verifyVisa);
// inputCardNr.addEventListener("keyup", verifyAmPic);
// inputCardNr.addEventListener("keyup", verifymasterPic);

function verifyVisa() {
    switch (this.value[0]) {
        case "4":
            if (this.value.length >= 13 && this.value.length <= 16) {
                iVisa.style.visibility = "visible";
                console.log(this.value)
            }
            break;  
    }
    // allCards[0].style.visibility = "visible";
}

// function verifyAmPic() {
//     if (inputCardNr.value[0] == 6) {
//         amPic.style.visibility = "visible"; //why this is not workin..
//         console.log(amPic);
//     }
// }

// function verifymasterPic() {
//     if (inputCardNr.value[0] == 7) {
//         masterPic.style.visibility = "visible"; //why this is not workin..
//         console.log(masterPic);
//     }
// }
