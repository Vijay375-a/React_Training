

function incrementPointsByTwo(state) {

    return {
        ...state, //level -0
        house: {
            ...state.house,  // level -1
            points: state.house.points + 2
        }
    }
}

let state = {
    house: {
        name: 'RavenClaw',
        points: 10
    }
}
console.log('oldState ==>', state)
let newState = incrementPointsByTwo(state);
console.log('newState =>', newState)

console.log("Same Object (state===newState) ? =>", state === newState);