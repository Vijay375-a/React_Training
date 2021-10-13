import React from 'react';
import ReactDOM from 'react-dom';


const User = props => {
    return <UserDetails id={props.id} name={props.name} city={props.city} />
}
const UserDetails = props => {
    //props are read only : props are only for display not for mutation(changing)
   // props.name = "foo";
    return <div>
        <h2>Id : {props.id}</h2>
        <h3>Name {props.name}</h3>
        <h3>City {props.city}</h3>
    </div>
}


const App = () => <div>
    <User id={1} name="Subramanian" city="Coimbatore" />
</div>
ReactDOM.render(<App />, document.getElementById('root'))