let allDivs = document.querySelectorAll('div');
let offerClass = document.querySelectorAll('.offers');
let link = document.querySelectorAll('[href]');

let arrDivs = [...allDivs];
let arrClass = [...offerClass];
let arrLinks = [...link];

console.log(arrDivs.length);
console.log(arrClass.length);
console.log(arrLinks.length);