import produce from "immer";
import { createStore } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux'

//reducer
const initalState = {
    value: 10
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
/////////////////////////////////////////////////////////////////////////////////////
//mapper function/selector
//state->app state
function mapStateToProps(state) {
    return {
        myvalue: state.value
        //react prop:reduxstate
    }
}
/////////////////////////////////////////////////////////////////////////////////////

//action creator
const increment = () => ({
    type: 'counter/increment',
    payload: undefined
});

//container component

const Counter = props => {
    //console.log(props)
    const { dispatch } = props;
    const onIncrement = evt => {
        //  props.dispatch(increment())
        dispatch(increment());
    }
    return <CounterDashBoard {...props} onIncrement={onIncrement} />
};
//presentational components
const CounterDashBoard = ({ myvalue, onIncrement }) => <>
    <h1>Value: {myvalue}</h1>
    <button onClick={onIncrement}>increment</button>
</>


//merge the View + Redux
const CounterHOC = connect(mapStateToProps)(Counter)

const App = () => <div>
    <h1>React - Redux Integration</h1>
    <Provider store={store}>
        <CounterHOC />
    </Provider>
</div>

ReactDOM.render(<App />, document.getElementById('root'));
