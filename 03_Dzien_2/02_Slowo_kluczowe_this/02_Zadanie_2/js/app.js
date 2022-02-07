const calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function () {
        console.log(this.a + this.b);
    },
    multiply: function () {
        console.log(this.a * this.b);
    },
};

calculator.save(2, 3);
calculator.sum();
calculator.multiply();
