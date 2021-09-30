class Product {
    constructor(id = 1, name = 'phone') {
        this.id = id;
        this.name = name;
    }
}
class Order {
    constructor(orderId = 'A001', product = new Product()) {
        this.orderId = orderId
        //has-a
        this.product = product;

    }
}
let product = new Product();
let order = new Order();
console.log(order)
//
order = new Order('A002', new Product(1, 'Books'))
console.log(order)