function getNumber(nr, arr) {
    if (arr.includes(nr)) {
        return true;
    } else {
        return false;
    }
}

let nr = 6;
let arr = [1, 2, 3, 4, 5];

console.log(getNumber(nr, arr));