let childSt = document.querySelector(".first");
let childNd = document.querySelector("#second");
let childRd = document.querySelector("[data-ex=third]");
let divTh = document.querySelector(".forth");

let arrClass = childSt.children;
console.log(arrClass[0], arrClass[2]);

let parentOfNd = childNd.parentElement;
let arrId = childNd.children;
console.log(parentOfNd, arrId[3]);

let grandParentRd = childRd.parentElement.parentElement;
let arrData = childRd.children;
console.log(grandParentRd);
arrData[arrData.length - 1],
    arrData[0],
    arrData[Math.floor(arrData.length / 2)];

let parentForth = divTh.parentElement;
let firstChildForth = parentForth.querySelector("article");
let secondP = firstChildForth.querySelectorAll('p');
console.log(parentForth, firstChildForth, secondP[1]);
