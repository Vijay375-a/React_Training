import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//parent components

class Counter extends React.Component {

    state = {
        counter: 10
    };
    constructor() {
        super();
        console.log('counter constructor is called')
    }
    //listener
    onIncrement = () => {
        let counter = this.state.counter + 1;
        this.setState({ counter });
    }
    componentDidMount() {
        console.log('counter componentDidMount is called')

    }
    componentDidUpdate(){
        console.log('counter componentDidUpdate is called')

    }

    render() {
        console.log('counter render is called')

        return <div className="container">
            <CounterUI counter={this.state.counter} onIncrement={this.onIncrement} />
        </div>
    }
}

//presentational component
class CounterUI extends React.Component {
    constructor() {
        super();
        console.log('CounterUI constructor is called')
    }
    componentDidMount() {
        console.log('CounterUI componentDidMount is called')

    }
    componentDidUpdate(){
        console.log('CounterUI componentDidUpdate is called')

    }
    render() {

        console.log('CounterUI render is called')

        return <>
            <h1>Counter App-Using  Life Cycle methods</h1>
            <h2>Counter : {this.props.counter}</h2>
            <button onClick={this.props.onIncrement} className="btn btn-success">+</button>
        </>
    }
}




const App = () => <Counter />

ReactDOM.render(<App />, document.getElementById('root'));