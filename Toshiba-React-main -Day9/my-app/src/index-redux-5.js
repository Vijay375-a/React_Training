import produce from "immer";
import { combineReducers, createStore } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from "react-redux";

//redux
const initalState = {
    value: 10
}
const incrementReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'counter/increment':
            return produce(state, draft => {
                draft.value++;
            });
        case 'counter/incrementByAmount':
            return produce(state, draft => {
                draft.value += action.payload;
            })
        default:
            return state;
    }
}


//create store
const store = createStore(incrementReducer);
const Counter = props => {
    // const value = useSelector(state => {
    //     return state.value
    // });
    // const value = useSelector(state => state.value);
    const value = useSelector(state => state.value);

    // const dispatch = useDispatch();
    const onIncrement = useDispatch();

    //action creator
    const increment = () => ({
        type: 'counter/increment',
        payload: undefined
    });
    // const onIncrement = evt => {
    //     dispatch(increment());
    // };
    return <>
        <h1>Counter Increment Value : {value} </h1>
        {/* <button onClick={onIncrement}>Increment</button> */}
        <button onClick={() => {
            onIncrement(increment())
        }}>Increment</button>

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
