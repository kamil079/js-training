let addTheSameNumbers = function (nr, arr) {
    let sumArr = [];
    let res;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] != nr) {
            null;
        } else {
            sumArr.push(arr[i]);
            res = sumArr.reduce((p, c) => p + c);
        }
    }

    return res || null;
};

let nr = 7;
let array = [4, 7, 24, 7, 0, 10];

console.log(addTheSameNumbers(nr, array));
