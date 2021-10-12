//advanced state management

//adding property
function updateAddress(profile, city) {
    //update nested object
    //   return  {
    //       id:profile.id,
    //       name:profile.name,
    //       address: {
    //           city:city
    //       }
    //   }
    // return Object.assign({}, profile, {
    //     address: {
    //         city: city
    //     }
    // })
    return {
        ...profile, address: {
           city:city
        }
    }

}
//inital state
const profile = {
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'coimbatore'
    }
};
console.log(profile)

const updatedProfile = updateAddress(profile, 'chennai');

console.log(updatedProfile)

console.log('Same object(profile===updatedProfile)', profile === updatedProfile)

