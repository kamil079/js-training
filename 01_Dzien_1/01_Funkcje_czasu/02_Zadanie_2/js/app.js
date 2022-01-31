
function countHello(n) {
    let counter = 1;
    for (let i = 0; i < n; i++) {
        let interval = setInterval(() => {
            if (i === n) {
                clearInterval(interval);
            } else {
                console.log('hello ' + counter);
            }
            counter++;
        }, n * 1000);
        // counter++;

    }
}


let n = 4;
countHello(n);
