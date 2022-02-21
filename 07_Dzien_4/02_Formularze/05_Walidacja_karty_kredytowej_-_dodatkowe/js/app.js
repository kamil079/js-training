let inputCardNr = document.querySelector("#cardNumber");

inputCardNr.addEventListener("keyup", verifyCard);

let allCards = document.querySelectorAll("i");

allCards.forEach((el) => (el.style.visibility = "hidden"));

function verifyCard(e) {
  let iVisa = document.querySelector("i, #visa-icon");
  let iAmex = document.querySelector("i, #amex-icon");
  let iMaster = document.querySelector("i, #mastercard-icon");

  iVisa.style.visibility = "hidden";
  iAmex.style.visibility = "hidden";
  iMaster.style.visibility = "hidden";

  e.target.style.borderColor = "#ccc";

  switch (this.value[0]) {
    case "4":
      iVisa.style.visibility = "visible";
      if (e.target.value.length >= 13 && e.target.value.length <= 16) {
        e.target.style.borderColor = "green";
      }
      break;
    case "5":
      iAmex.style.visibility = "visible";
      if (e.target.value.length === 16) {
        e.target.style.borderColor = "green";
      }
      break;
    case "3":
      iMaster.style.visibility = "visible";
      if (
        (e.target.value.length === 15 && e.target.value[1] === '4') || e.target.value[1] === '7') {
        e.target.style.borderColor = "green";
      }
      break;
  }
}

function verifyAmPic() {
  if (inputCardNr.value[0] == 6) {
    amPic.style.visibility = "visible"; //why this is not workin..
    console.log(amPic);
  }
}

// function verifymasterPic() {
//     if (inputCardNr.value[0] == 7) {
//         masterPic.style.visibility = "visible"; //why this is not workin..
//         console.log(masterPic);
//     }
// }
