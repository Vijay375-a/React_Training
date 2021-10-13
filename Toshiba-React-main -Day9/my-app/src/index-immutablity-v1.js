//advanced state management

//pure function

function updateProfile(profile, city) {

    // return {
    //     id: profile.id,
    //     name: profile.name,
    //     city: city
    // }
    //return Object.assign({}, profile, { city: city });
    return { ...profile, city: city }

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

