function distFromAverage(arr) {
    let arr2 = [];

    let nr = (arr.reduce((p, c) => p + c)) / arr.length;

    arr.forEach((el) => arr2.push(el - nr));

    return arr2;
}

let arr = [2, 8, 3, 7];

console.log(distFromAverage(arr));