let btn = document.querySelector('.btn');
let nrValue = document.querySelector('#orderId');
let itemValue = document.querySelector('#item');
let nrOfItemsValue = document.querySelector('#quantity');
let tBody = document.querySelector('tbody');

btn.addEventListener('click', adding);

function adding() {
    let newTr = document.createElement('tr');
    let nrTd = document.createElement('td');
    let itemTd = document.createElement('td');
    let quantityTd = document.createElement('td');

    tBody.appendChild(newTr);

    newTr.appendChild(nrTd);
    nrTd.innerText = nrValue.value;

    newTr.appendChild(itemTd);
    itemTd.innerText = itemValue.value;
    
    newTr.appendChild(quantityTd);
    quantityTd.innerText = nrOfItemsValue.value;
}