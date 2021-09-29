
const getUser = (resolve, reject) => {
    let user = { id: 1, name: 'ram' };
    //user=null;
    if (user) {
        setTimeout(resolve, 1000, user);
    } else {
        setTimeout(reject, 1000, { message: 'No user found' });
    }
};

const login = (user, resolve, reject) => {
    if (user.name === 'ram') {
        setTimeout(resolve, 1000, 'login success');
    } else {
        setTimeout(reject, 1000, { message: 'login failed' });
    }
}
const showPage = (status, resolve, reject) => {
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'You are registered User');
    } else {
        setTimeout(reject, 1000, { message: 'You are guest' });
    }
}

getUser(user => {
    login(user, status => {
        showPage(status, page => {
            console.log(page)
        }, err => {
            console.log(err);
        });
    }, err => {
        console.log(err);
    })
}, err => console.log(err));
