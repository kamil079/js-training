let addLi = document.querySelector("#menu");
let btn = document.querySelector(".btn");
let counter = 0;

btn.addEventListener("click", addEl);

function addEl() {
    let newLi = document.createElement("li");
    addLi.appendChild(newLi);
    counter++;
    newLi.classList.add('list-group-item');
    newLi.innerText=(`Element ${counter + 1} - w chwili dodania było ${counter} elementów`);
}
