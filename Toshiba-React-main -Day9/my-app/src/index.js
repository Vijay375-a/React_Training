import produce from "immer";
import { combineReducers, createStore } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import logger from 'redux-logger'

//redux
const state = {
    value: 10
}

// const increment = createAction('counter/increment');
// const decrement = createAction('counter/decrement');

// console.log(increment())

//here builder is variable holding Builder Object which has switch...case methods
// const incrementReducer = createReducer(initalState, builder => {
//     builder
//         .addCase(increment, (state, action) => {
//             state.value++;
//         })
//         .addDefaultCase((state, action) => { })
// });

// const decrementReducer = createReducer(initalState, builder => {
//     builder
//         .addCase(decrement, (state, action) => {
//             state.value--;
//         })
//         .addDefaultCase((state, action) => { })
// });
//Map Object Notation:
// const incrementReducer = createReducer(initalState, {
//     [increment]: (state, action) => {
//         state.value++;
//     }
// });
// const decrementReducer = createReducer(initalState, {
//     [decrement]: (state, action) => {
//         state.value--;
//     }
// })

const incrementSlice = createSlice({
    name: 'counterinc',
    initialState: state,
    reducers: {
        increment(state, action) {
            state.value++;
        }
    }
});

const decrementSlice = createSlice({
    name: 'counterdec',
    initialState: state,
    reducers: {
        decrement(state, action) {
            state.value--;
        }
    }
});

// console.log(incrementSlice)
const { increment } = incrementSlice.actions;
const { decrement } = decrementSlice.actions;
//reducers
// const incrementred = incrementSlice.reducer
// console.log(incrementred

// console.log(actions)
// console.log(increment())


const rootReducer = combineReducers({
    increment: incrementSlice.reducer,
    decrement: decrementSlice.reducer
})

//create store
//const store = createStore(rootReducer);
const store = configureStore({ reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) })

const Counter = props => {

    const incrementValue = useSelector(state => state.increment.value);
    const decrementValue = useSelector(state => state.decrement.value);

    const onIncrement = useDispatch();
    const onDecrement = useDispatch();

    return <>
        <h1>Counter Increment Value : {incrementValue}  Counter Decrement Value {decrementValue}</h1>
        <button onClick={() => {
            onIncrement(increment())
        }}>Increment</button>
        <button onClick={() => {
            onDecrement(decrement())
        }}>Decrement</button>
    </>
}

const App = props => {
    return <div>
        <Provider store={store}>
            <Counter />
        </Provider>
    </div>
};
ReactDOM.render(<App />, document.getElementById('root'));