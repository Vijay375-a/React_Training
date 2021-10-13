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
export const store = createStore(counterReducer);

//response listener
store.subscribe(() => console.log("Current State", store.getState()))

//action 
const increment = {
    type: 'counter/increment',
    payload: undefined
}

//dispatch action : send request.

store.dispatch(increment)
store.dispatch({
    type: 'counter/increment',
    payload: undefined
})
for (let i = 0; i < 10; i++) {
    store.dispatch({
        type: 'counter/increment',
        payload: undefined
    })
}