//function declaration

function sayHello() {
    //function body
    console.log('Hello')
}
//execute()
sayHello();
//function with some logic
function validate() {
    let name = 'ram';
    let password = 'ram';
    let response = (name === 'ram') && (password === 'ram') ? 'valid' : 'invalid'
    console.log(response);
}
validate();
//message arg
function sayHello(message) {
    console.log(`Message is ${message}`)
}
//hello is parameter
sayHello('Hello')
sayHello()

//default args
function multiply(a = 0, b = 0) {
    console.log(`a=${a} b=${b}`)
    let result = a * b;
    console.log(`Multiplication ${result}`)
}
multiply(10, 10)
multiply();

//es 5
// function log(){
//    console.log(arguments)
// }

//es 6 : Rest operator to collect args:  ...
function log(...info) {
    console.log(info)
}
log()
log('app')
log('app', 'error')
log('app', 'error', 'in myfile.txt')

function getA() {
    return 10; // return hardcoded value
}
let value = getA()
console.log(value);
console.log(getA())

function getB() {
    let b = 10;
    return b; // return variable
}
console.log(getB());

function calculate(a = 1, b = 1) {
    return a * b; // return expression- computed value
}
console.log(calculate(4, 5))

function isValid() {
    return; // undefined
}
console.log(isValid() ? 'valid' : 'invalid');