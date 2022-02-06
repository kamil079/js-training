function getMissingElement(arr) {
    let nr;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i + 1] - arr[i] == 2) {
            nr = arr[i] + 1;
        }
    }

    return nr;
}

let array = [6, 7, 8, 10, 11, 12, 13, 14, 15];

console.log(getMissingElement(array));
