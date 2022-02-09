const childElements = document
    .querySelector(".offers")
    .querySelectorAll("div, h2, p");

let getTags = (elements) => {
    let arrTags = [];
    elements.forEach((el) => arrTags.push(el.tagName));
    return arrTags;
};

let arr = [...childElements];
console.log(getTags(arr));
