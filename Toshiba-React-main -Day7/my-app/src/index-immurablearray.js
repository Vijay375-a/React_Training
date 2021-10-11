//array

// function addNewItem(state, item) {
//     //using spread operator
//     return [...state, item] // adding at end of the array
//     //return [item,...state]; //adding at begining of the array
// }

//without spread 
function addNewItem(state,item){
    const newState = state.slice();
    newState.push(item);
    return newState;
}

//state 
const state = [
    {
        id: 1,
        name: 'Subramanian'
    },
    {
        id: 2,
        name: 'Ram'
    },
];
console.log(`Old State=>`, state);
const newState = addNewItem(state, { id: 3, name: 'foo' });
console.log(`New State=>`, newState);

console.log(`Same (State===newState)`, state === newState);


