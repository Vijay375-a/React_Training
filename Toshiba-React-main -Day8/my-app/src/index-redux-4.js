import produce from "immer";
import { createStore, combineReducers } from "redux";

// multiple reducers
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
/////////////////////////////////////////////////////////////////////////////////////
//Profile Reducer
const initalProfileState = {
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
};
const profileReducer = (state = initalProfileState, action) => {
    switch (action.type) {
        case 'profile/updateContact':
            return produce(state, draft => {
                draft.contact.communication.mobileno = action.payload;
            });
        default:
            return state;
    }
};

//store can take only one reducer as parameter, what if i have many reducers.

const rootReducer = combineReducers({
    counter: counterReducer,
    profile: profileReducer
})

const store = createStore(rootReducer);
/**
 * const appState = {
 *  counter: {
 * 
 *  },
 *  profile: {
 * 
 *  }
 * }
 */
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

//update Profile reducer
const updateContact = payload => ({
    type: 'profile/updateContact',
    payload
});
store.dispatch(updateContact('9003706368'))









