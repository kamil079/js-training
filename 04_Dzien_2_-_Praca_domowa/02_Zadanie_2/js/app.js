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

let images = document.querySelectorAll(".images[alt]");

let getElementAlt = (element) => {
    let arr3 = [];
    arr3.push(element.forEach((el) => el.getAttribute("alt")));

    return arr3;
};

console.log(getElementAlt([...images]));
//its not working

//--------------------------------------

let linkClass = document.querySelectorAll(".my-link");

console.log(linkClass);

getElementHref = (element) => {
    let arr4 = [];

    arr4.push(element.forEach(el => el.))

    return arr4;
};

console.log(getElementHref([...linkClass]));

//also not woking