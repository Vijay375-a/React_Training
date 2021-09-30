
//function declaration
function sayHello(name = 'foo') {
    return `Hello ${name}`
}
console.log(sayHello('subramanian'));

//store the function into a variable.
const hello = sayHello;
console.log(hello('ram'));

//way 2
//anonomous function ; funciton without name : es 5
const greeter = function(name='bar') {
    return `Hello ${name}`
};
console.log(greeter('ram'));