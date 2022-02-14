let allElA = document.querySelectorAll("a");

let firstList = document.querySelector("#list1");
let seccondList = document.querySelector("#list2");

allElA.forEach((el) => el.addEventListener("click", moveIt));

function moveIt() {
  let witchList = this.parentElement.id;

  if (witchList === "list1") {
    seccondList.append(this);
  } else if (witchList === "list2") {
    firstList.append(this);
  }
}
