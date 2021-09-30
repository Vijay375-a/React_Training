
const getUser = () => {
    return new Promise((resolve, reject) => {
        let user = { id: 1, name: 'ram' };
        // user=null;
        if (user) {
            setTimeout(resolve, 1000, user);
        } else {
            setTimeout(reject, 1000, { message: 'No user found' });
        }
    })
};

const login = user => {
    return new Promise((resolve, reject) => {
        if (user.name === 'ram') {
            setTimeout(resolve, 1000, 'login success');
        } else {
            setTimeout(reject, 1000, { message: 'login failed' });
        }
    });
}
const showPage = status => {
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'You are registered User');
        } else {
            setTimeout(reject, 1000, { message: 'You are guest' });
        }
    })
}

// getUser(user => {
//     login(user, status => {
//         showPage(status, page => {
//             console.log(page)
//         }, err => {
//             console.log(err);
//         });
//     }, err => {
//         console.log(err);
//     })
// }, err => console.log(err));

getUser()
    .then(user => {
        return login(user)
    })
    .then(status => {
        return showPage(status)
    })
    .then(page => {
        console.log(page);
    })
    .catch(err => console.log(err));

getUser()
    .then(user => login(user))
    .then(status => showPage(status))
    .then(page => console.log(page))
    .catch(err => console.log(err));

async function main() {
    try {
        const user = await getUser();
        const status = await login(user);
        const page = await showPage(status);
        console.log('async function ', page)
    }
    catch (err) {
        console.log(err);
    }
}
main();