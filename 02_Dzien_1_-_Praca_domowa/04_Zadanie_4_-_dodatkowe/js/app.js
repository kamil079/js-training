function factors(n) {
    let arr = [];

    for ( let i = 1; i <= n; i++) {
        if (n % i == 0) {
            // console.log(n);
            // console.log(i);
            arr.push(i);
        } else if (nr <= 0) {
            arr = [];
        }
    }
    return arr.sort((a, b) => b - a);
}

let nr = 54;

console.log(factors(nr));
