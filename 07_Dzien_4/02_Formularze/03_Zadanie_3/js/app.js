let allPic = document.querySelectorAll("img");
let btn = document.querySelector(".btn");

let selectEl = document.querySelector(".form-control");

allPic.forEach((el) => (el.style.visibility = "hidden"));
allPic[0].style.visibility = "visible";

btn.addEventListener("click", onePic);

function onePic(e) {
    e.preventDefault();

    switch (selectEl.value) {
        case "Ubuntu":
            allPic.forEach((el) => (el.style.visibility = "hidden"));
            allPic[2].style.visibility = "visible";
            break;
        case "MacOS":
            allPic.forEach((el) => (el.style.visibility = "hidden"));
            allPic[1].style.visibility = "visible";
            break;
        case "Windows":
            allPic.forEach((el) => (el.style.visibility = "hidden"));
            allPic[0].style.visibility = "visible";
            break;
    }
}
