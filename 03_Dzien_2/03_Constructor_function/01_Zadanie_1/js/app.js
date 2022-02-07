function Basket() {
    (this.products = []),
        (this.sum = 0),
        (this.addProduct = function (name, price) {
            this.products.push(name, price);
            this.sum += price;
        }),
        (this.showBasket = function () {
            console.log(this.products, this.sum);
        });
}

const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor", 10);
aliceBasket.addProduct("arbuz", 40);
aliceBasket.showBasket();


const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();
