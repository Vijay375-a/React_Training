//Arrow

//es 5 function literal
let hello = function () {
    console.log('hello')
};
hello();

//replace the above one with arrow syntax.
hello = () => {
    console.log('hello')
};
hello();
//function body has only one line of code: remove {}
hello = () => console.log('hello');
hello();

//args and params : multi parameter with default value

let add = (a = 1, b = 2) => {
    let r = a + b;
    console.log(r);
};
add()

//single parameter without default value:remove ()
let saySomething = message => console.log(message);
saySomething('hello');
///
let multiply = () => {
    return 10 * 10;
};
console.log(multiply());
//if function has only return statment : remove {} and return statement
multiply = () => 10 * 10;
console.log(multiply());

//single parameter no default value, and return the same
let isActive = active => !active;
console.log(isActive('active'));

const login = (username, password, success, failure) => {
    if (username === 'admin' && password === 'admin') {
        success('Login success')
    } else {
        failure('Login failed')
    }
}

// login(function(status){},(err)=>{})
login(status => console.log(status), err => console.log(err));



