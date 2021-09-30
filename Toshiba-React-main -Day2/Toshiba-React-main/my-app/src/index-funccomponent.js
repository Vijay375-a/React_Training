import React from 'react';
import ReactDOM from 'react-dom';


//create component
// function Heading(){
//     return <h1>Hello!</h1>; //return jsx - object
// }
const Heading = () => <h1>Hello!</h1>; //return jsx - object


//imperative function call
// ReactDOM.render(Heading(),document.getElementById('root'))
//declarative
ReactDOM.render(<Heading></Heading>, document.getElementById('root'))