const blocks = document.querySelectorAll(".block");

let arr = [...blocks];

arr.map(el => el.innerText = 'Nowa wartość diva o klasie blocks');
arr.forEach(el => console.log(el.innerText));