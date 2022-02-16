let checkboxInv = document.querySelector("#invoice");
let invData = document.querySelector("#invoiceData");

invData.style.visibility = "hidden";

checkboxInv.addEventListener("click", showInvData);

function showInvData() {
    if (this.checked) {
        invData.style.visibility = "visible";
    } else {
        invData.style.visibility = "hidden";
    }
}
