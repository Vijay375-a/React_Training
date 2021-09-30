//Object destructuring

let getEmployee = (employee) => {
    console.log(`id : ${employee.id}`)
    console.log(`name : ${employee.name}`)
    console.log(`City : ${employee.address.city}`)
};

getEmployee({ id: 1, name: 'Subramanian', address: { city: 'Coimbatore' } })
//with destructuring
getEmployee = employee => {
    const { id, name, address } = employee;
    console.log(`id : ${id}`)
    console.log(`name : ${name}`)
    console.log(`City : ${address.city}`)
};
getEmployee({ id: 1, name: 'Subramanian', address: { city: 'Coimbatore' } })

getEmployee = employee => {
    const { id, name, address: { city } } = employee;
    console.log(`id : ${id}`)
    console.log(`name : ${name}`)
    console.log(`City : ${city}`)
};
getEmployee({ id: 1, name: 'Subramanian', address: { city: 'Coimbatore' } })

getEmployee = ({ id, name, address: { city } }) => {
    console.log(`id : ${id}`)
    console.log(`name : ${name}`)
    console.log(`City : ${city}`)
};
getEmployee({ id: 1, name: 'Subramanian', address: { city: 'Coimbatore' } })
/////////////////////////////////////////////////////////////////////////////////////
//Object Destructuring and returning object

// function setConfig() {
//     return {
//         host: 'localhost',
//         port: 8080
//     };
// }
let setConfig = () => {
    return {
        host: 'localhost',
        port: 8080
    };
}
console.log(setConfig())

setConfig = (host = 'localhost', port = 8080) => {
    return {
        host: host,
        port: port
    };
}
console.log(setConfig())
console.log(setConfig('mydomain', 9999))

setConfig = (host = 'localhost', port = 8080) => {
    return {
        //objectKey:localvariable - host:host
        //if objectkey:localvariable is same - we can remove one
        host,
        port
    };
}
console.log(setConfig('mydomain', 9999))

setConfig = (host = 'localhost', port = 8080) => ({
    host,
    port
});
console.log(setConfig('mydomain', 9999))