let parentEl = document.querySelector('.container');

parentEl.addEventListener('click', remove);

function remove() {
    this.parentElement.removeChild(this);
}