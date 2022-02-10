let first_id = document.querySelector("#menu").querySelectorAll("li");

let getDataInfo = (el) => {
    let arr = [];

    el.forEach((elem) => arr.push(elem.dataset.info));

    return arr;
};

console.log(getDataInfo([...first_id]));

//--------------------------------------

let second_id = document.querySelector("#main-container");

let getElementClass = (elements) => {
    let arr2 = [];

    arr2.push(elements.className);

    return arr2;
};

console.log(getElementClass(second_id));

//--------------------------------------

let pink_class = document.querySelector(".pink-color");

let getElementText = (element) => {
    return element.innerText;
};

console.log(getElementText(pink_class));

//--------------------------------------

let images = document.querySelectorAll(".images");
let altAtr = [...images];

let getElementAlt = (element) => {
    let arr3 = [];

    element.forEach((el) => arr3.push(el.getAttribute("alt")));

    return arr3;
};

console.log(getElementAlt(altAtr));
//--------------------------------------

let linkClass = document.querySelectorAll(".my-link");

let link = [...linkClass];

getElementHref = (element) => {
    let arr4 = [];
    element.forEach((el) => arr4.push(el.getAttribute("href")));
    return arr4;
};

console.log(getElementHref(link));
