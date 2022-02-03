let sortArr = function(arr) {
    arr.sort((a, b) => a - b)
    return arr;
}


let arr = [2,3,42,54,23,1,4,554,6556,35,435,2342,42,654,56]
console.log(sortArr(arr));