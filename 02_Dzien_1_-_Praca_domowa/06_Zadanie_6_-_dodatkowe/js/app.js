function getLastNumbers(nr, arr) {
    if (isNaN(nr) || nr == undefined) {
        return [];
    } else {
        return arr.slice(nr * -1);
    }
}

let number = 4;
let array = [1, 2, 3, 4, 5, 6, 7];

console.log(getLastNumbers(number, array));
