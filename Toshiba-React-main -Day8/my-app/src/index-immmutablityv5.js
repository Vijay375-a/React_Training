

function updateCustomer(customer, mobileno) {

    return {
        ...customer,
        contact: {
            ...customer.contact,
            communication: {
                ...customer.contact.communication,
                mobileno: mobileno
            }
        }
    }

}

let customer = {
    id: 1,
    name: 'Subramanian',
    contact: {
        address: {
            city: 'Coimbatore'
        },
        communication: {
            mobileno: '9000000000'
        }
    }
}
console.log(customer);
const updatedCustomer = updateCustomer(customer, '9003706368')
console.log(updatedCustomer)
console.log("Same Object (state===newState) ? =>", customer === updatedCustomer);