import React from 'react';
import ReactDOM from 'react-dom';


// const User = props => {
//     //here we are rethrowing properties to Userdetails
//     return <UserDetails id={props.id} name={props.name} city={props.city} />
// }
//how to simply property rethrows : using spread operator: which object property into one
const User = props => {
    //here we are rethrowing properties to Userdetails
    return <UserDetails {...props} title="User details" />
}
const UserDetails = props => {
    return <div>
        <h1>{props.title}</h1>
        <h2>Id : {props.id}</h2>
        <h3>Name {props.name}</h3>
        <h3>City {props.city}</h3>
    </div>
}


const App = () => <div>
    <User id={1} name="Subramanian" city="Coimbatore" />
</div>
ReactDOM.render(<App />, document.getElementById('root'))