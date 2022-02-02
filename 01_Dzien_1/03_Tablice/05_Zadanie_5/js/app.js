let multiply = function(array) {
   return array.reduce((p,c) => p * c);
}

let array = [1,2,3,4,5,6,7]
console.log(multiply(array));