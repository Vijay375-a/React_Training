//advanced state management

//adding property
function addSkill(profile, skill) {
    //    return {
    //        id:profile.id,
    //        name:profile.name,
    //        city:profile.city,
    //        skill:skill
    //    }
    //return Object.assign({}, profile, { skill: skill })
    return {
        ...profile, skill: skill
    }

}
//inital state
const profile = {
    id: 1,
    name: 'Subramanian',
    city: 'chenai'
};
let skill = 'Coding'
console.log(profile)

const updatedProfile = addSkill(profile, skill);

console.log(updatedProfile)

console.log('Same object(profile===updatedProfile)', profile === updatedProfile)

