import { createStore } from "redux";

//reducer
const initalState = {
    value: 0
}
const counterReducer = (state = initalState, action) => {
    //logic
    switch (action.type) {
        case 'counter/increment':
            console.log("Old state", state, "action", action)
            return { ...state, value: state.value + 1 };
        default:
            return state;
    }
}
const store = createStore(counterReducer);

//response listener
store.subscribe(() => console.log("Current State", store.getState()))

//action creator
// function increment() {
//     return {
//         type: 'counter/increment',
//         payload: undefined
//     }
// }

const increment = () => ({
    type: 'counter/increment',
    payload: undefined
});
store.dispatch(increment());




