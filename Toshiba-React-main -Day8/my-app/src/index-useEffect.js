import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//using side effects
//Side effects using old react style
// class Customer extends Component {


//     state = {
//           screen: 'Customer Manager App'
//     }
//     add = () => {
//           this.setState({ screen: 'Customer Manager App - Add ' })
//     }
//     render() {
//           return <div>
//                 <h1>Customer Manager App: using Side effects</h1>
//                 <button onClick={this.add} >Add</button>
//           </div>
//     }
//     //side effeects with inital / mount cycle
//     componentDidMount() {
//           //imperative dom
//           document.title = this.state.screen;
//     }
//     //side effects with update cycle
//     componentDidUpdate() {
//           document.title = this.state.screen;
//     }
//componentWillUnMount(){
//resourceclean up activit
//}
// }

const Customer = props => {
    const [screen, setScreen] = useState('Customer Manager App');
    //componentDidMount && componentDidUpdate
    useEffect(() => {
        console.log('useEffect is called ', screen)
        document.title = screen;

        //componentWillUnMount- clean upcode
        return () => {
            //clean upcode 
            console.log('component is destroyed')
        };
    })
    //listener function to change the state
    const changeTitle = () => {
        setScreen("Customer Manager App - Add")
    }

    return <div>
        <h1>Customer Manager App: using Side effects</h1>
        <button onClick={changeTitle} >ChangeTitle</button>
    </div>
}



const App = () => <Customer />

ReactDOM.render(<App />, document.getElementById('root'))