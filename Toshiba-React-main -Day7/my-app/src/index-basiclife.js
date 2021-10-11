import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


class Counter extends React.Component {
    state = {}
    //life cycle methods
    constructor() {
        super();
        console.log('Counter- constructor is called')
     
    }
    render() {
        console.log('Counter- render is called')
        return <div>
            <h1>Counter</h1>
        </div>
    }
    componentDidMount(){
        console.log('Counter- componentDidMount is called')
        //

    }
}
const App = () => <Counter />

ReactDOM.render(<App />, document.getElementById('root'));
