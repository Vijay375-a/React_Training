//highorder function

//action=function(){}
function connect(action) {
    action();
}
connect(function () {
    console.log('connect')
});

function requestHandler(action) {
    action('Hello');
}
requestHandler(function (res) {
    console.log(res)
});

//anonmous function
const login = function (resolve, reject) {
    //biz logic
    let userName = 'admin';
    let password = 'admin';
    if (userName === 'admin' && password === 'admin') {
        resolve('login success')
    } else {
        reject('login failed')
    }

};
login(function (status) {
    console.log(status)
}, function (err) {
    console.log(err);
});