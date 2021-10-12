import produce from "immer";
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
            // return { ...state, value: state.value + 1 };
            return produce(state, draft => {
                draft.value++;
            });
        case 'counter/incrementByAmount':
            console.log("Old state", state, "action", action)
            //return { ...state, value: state.value + action.payload };
            return produce(state, draft => {
                draft.value += action.payload;
            });
        default:
            return state;
    }
}
const store = createStore(counterReducer);

//response listener
store.subscribe(() => console.log("Current State", store.getState()))

const increment = () => ({
    type: 'counter/increment',
    payload: undefined
});

//action creator
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

const incrementByAmount = payload => ({
    type: 'counter/incrementByAmount',
    payload //destructured syntax
})
store.dispatch(incrementByAmount(10));





