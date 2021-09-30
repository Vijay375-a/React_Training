
function Employee(id = 1, name = 'ram') {
    //declare instance variables and methods
    this.id = id
    this.name = name;
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}
let emp = new Employee();
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
console.log(`Salary ${emp.calculateSalary()}`)
//constructor parameter
emp = new Employee(23, 'John')
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)

class Customer {
    //declare instance variables and methods
   constructor(id = 1, name = 'ram') {
        this.id = id;
        this.name = name;
    }
    calculateInvoice() {
        return 1000;
    }
}
let cust = new Customer(23, 'Miller')
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)