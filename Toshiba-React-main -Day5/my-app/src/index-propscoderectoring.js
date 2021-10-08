import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

/**
const Profile = props => {
    const { id, firstName, lastName, status, city,contact: { email } } = props;
    return <div className="container">
        <h1>Id: {id}</h1>
        <h2>Name {firstName} {lastName}</h2>
        <h2>Status {status ? "Available" : "Not Available"}</h2>
        <h2>Contact {city} {email}</h2>
    </div>
}
 */
const Profile = ({ id, firstName, lastName, status, city, contact: { email } }) => <div className="container">
    <h1>Id: {id}</h1>
    <h2>Name {firstName} {lastName}</h2>
    <h2>Status {status ? "Available" : "Not Available"}</h2>
    <h2>Contact {city} {email}</h2>
</div>



const App = () => {

    const city = "Coimbatore"
    const status = true;
    const contact = {
        email: 'subramanian.md@gmail.com',
        mobile: 1234567890
    }

    return <div>
        <Profile
            id={1}
            firstName="Subramanian"
            lastName="Murugan"
            city={city}
            status={status}
            contact={contact}
        />
        <Profile
            id={2}
            firstName="Subramanian"
            lastName="Murugan"
            city={city}
            status={status}
            contact={contact}
        />
        <Profile
            id={3}
            firstName="Subramanian"
            lastName="Murugan"
            city={city}
            status={status}
            contact={contact}
        />
    </div>
}


ReactDOM.render(<App />, document.getElementById('root'))