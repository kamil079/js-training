const links = document.querySelector(".links").querySelectorAll("li");

let getDataInfo = (elements) => {
    let arr = [];
    arr.push([...elements]);
    return arr;
};

console.log(getDataInfo(links));