import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends React.Component {

    state = {
        counter: 10
    };

    //listener
    onIncrement = () => {
        let counter = this.state.counter + 1;
        this.setState({ counter });
    }

    render() {
        return <div className="container">
        <CounterUI counter={this.state.counter} onIncrement={this.onIncrement}  />
        </div>
    }
}

//presentational component
const CounterUI = props => {
    return <>
        <h1>Counter App-Using State and Event Handling</h1>
        <h2>Counter : {props.counter}</h2>
        <button onClick={props.onIncrement} className="btn btn-success">+</button>
    </>
}



const App = () => <Counter />

ReactDOM.render(<App />, document.getElementById('root'));