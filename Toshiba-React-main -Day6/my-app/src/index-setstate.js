import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


//state inside class Component

class Counter extends React.Component {

    state = {
        counter: 0
    };

    //listener
    onIncrement = () => {
        // this.state.counter = this.state.counter + 1;
        // console.log('inside listener')
        // console.log(this.state)
        //render call :dont do this
        //this.render();
        // this.setState(function (state) {
        //     //return new state object
        //     console.log('new state=>', state);
        //     return {
        //         counter: state.counter + 1
        //     };
        // })
        // this.setState(prvState => {
        //     return Object.assign({}, prvState, { counter: prvState.counter + 1 })
        // })
        // this.setState(prvState => {
        //     let counter = prvState.counter + 1;
        //     return { ...prvState, counter };
        // })
        let counter = this.state.counter + 1;
        this.setState({ counter });
    }

    render() {
        console.log('inside render method')
        console.log('old/Previous state =>', this.state);
        return <div className="container">
            <h1>Counter App-Using State and Event Handling</h1>
            <h2>Counter : {this.state.counter}</h2>
            <button onClick={this.onIncrement} className="btn btn-success">+</button>
        </div>
    }
}

const App = () => <Counter />

ReactDOM.render(<App />, document.getElementById('root'));