function Employee() {
    //declare instance variables and methods
    this.id = 1;
    this.name = 'ram';
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}
//Employee() - constructor call.
const emp = new Employee();
//access object properties
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
console.log(`Salary ${emp.calculateSalary()}`)

class Customer {
    id = 1;
    name = "Subramaian";
    constructor() {
        console.log('customer init....')
    }
    //methods
    calculateInvoice() {
        return 100;
    }
}
const cust = new Customer();
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)
console.log(`Invoice ${cust.calculateInvoice()}`)

//literal patterns
let product = {
    id: 1,
    name: 'phone',
    // getQty: function () {
    //     return 100;
    // },
    getQty: () => {
        return 100;
    },
    //methods
    calculateInvoice() {
        return 100;
    }
};
console.log(`id ${product.id}`)
console.log(`Name ${product.name}`)
console.log(`Qty ${product.getQty()}`)
console.log(`Invoice ${product.calculateInvoice()}`)