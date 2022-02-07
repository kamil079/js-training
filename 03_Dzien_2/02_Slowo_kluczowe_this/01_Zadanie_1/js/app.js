let car = {
    color: 'białe',
    brand: 'BMW',
    numberOfKilometers: 0 + ' km',
    printCarinfo: function() {
        console.log(this.brand, this.color, this.numberOfKilometers);
    },
    drive: function(km) {
        this.numberOfKilometers = km;
    },
    carReview: [],
    addReview: function(rvw) {
        this.carReview.push(rvw);
    },
    logAllReview: function() {
        console.log(this.carReview);        
    }
};

let milage = 60000;

car.drive(milage);

car.printCarinfo();

car.addReview('19-01-2020');
car.addReview('18-01-2021');
car.addReview('15-01-2022');

car.logAllReview();