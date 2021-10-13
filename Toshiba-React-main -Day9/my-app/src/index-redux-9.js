import produce from "immer";
import { combineReducers, createStore } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createReducer } from "@reduxjs/toolkit";

//redux
const initalState = {
    value: 10
}

//here builder is variable holding Builder Object which has switch...case methods
// const incrementReducer = createReducer(initalState, builder => {
//     builder
//         .addCase('counter/increment', (state, action) => {
//             state.value++;
//         })
//         .addDefaultCase((state, action) => { })
// });

// const decrementReducer = createReducer(initalState, builder => {
//     builder
//         .addCase('counter/decrement', (state, action) => {
//             state.value--;
//         })
//         .addDefaultCase((state, action) => { })
// });
//Map Object Notation:
const incrementReducer = createReducer(initalState, {
    'counter/increment': (state, action) => {
        state.value++;
    }
});
const decrementReducer = createReducer(initalState, {
    'counter/decrement': (state, action) => {
        state.value--;
    }
})





const rootReducer = combineReducers({
    increment: incrementReducer,
    decrement: decrementReducer
})

//create store
//const store = createStore(rootReducer);
const store = configureStore({ reducer: rootReducer })

const Counter = props => {

    //should selected state based on reducer
    // const value = useSelector(state => state.reducer.reducerstatevariable);
    const incrementValue = useSelector(state => state.increment.value);
    const decrementValue = useSelector(state => state.decrement.value);

    const onIncrement = useDispatch();
    const onDecrement = useDispatch();

    //action creators
    const increment = () => ({
        type: 'counter/increment',
        payload: undefined
    });
    const decrement = () => ({
        type: 'counter/decrement',
        payload: undefined
    });

    return <>
        <h1>Counter Increment Value : {incrementValue}  Counter Decrement Value {decrementValue}</h1>
        {/* <button onClick={onIncrement}>Increment</button> */}
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
