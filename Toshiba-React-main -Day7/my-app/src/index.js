import produce from "immer";

function updateProfile(profile, city) {
    // return { ...profile, city: city }
    return produce(profile, draft => {
        //mutable version of immutable
        draft.city = city;
    })
}

//inital state
const profile = {
    id: 1,
    name: 'Subramanian',
    city: 'chenai'
};
console.log(profile)
const updatedProfile = updateProfile(profile, 'Coimbatore');

console.log(updatedProfile)

console.log('Same object(profile===updatedProfile)', profile === updatedProfile)
/////////////////////////////////////////////////.................


function updateCustomer(customer, mobileno) {

    // return {
    //     ...customer,
    //     contact: {
    //         ...customer.contact,
    //         communication: {
    //             ...customer.contact.communication,
    //             mobileno: mobileno
    //         }
    //     }
    // }
    return produce(customer, draft => {
        draft.contact.communication.mobileno = mobileno
    });

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