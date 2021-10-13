import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


const Greeter = props => {
    console.log(props.name)
    return <h2>Hello! {props.name} </h2>
}


const App = () => <div>
    <Greeter name="Subramanian" />
    <Greeter name="Geetha" />
    <Greeter name="Ford" />
</div>


ReactDOM.render(<App />, document.getElementById('root'))