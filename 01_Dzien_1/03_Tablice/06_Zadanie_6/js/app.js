function getEvenAverage(arr) {
    let avrArr = [];
    let res;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 != 0) {
            null;
        } else {
            avrArr.push(arr[i]);
            res = avrArr.reduce((p, c) => p + c) / avrArr.length;

        }
        
    }

    return res || null;
}

let arr = [1, 1, 1,2,4];
console.log(getEvenAverage(arr));
//not sure why but it works lol