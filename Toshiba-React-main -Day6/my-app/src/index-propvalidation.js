import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types';

const Profile = ({ id, firstName, lastName, status, city, contact: { email } }) => <div className="container">
    <h1>Id: {id}</h1>
    <h2>Name {firstName} {lastName}</h2>
    <h2>Status {status ? "Available" : "Not Available"}</h2>
    <h2>Contact {city} {email}</h2>
</div>
//default Props
Profile.defaultProps = {
    id: 0,
    firstName: "firstName",
    lastName: "lastName",
    status: false,
    city: "city",
    contact: {
        email: 'admin@foo.com',
        mobile: 9999999999
    }
}
//property validation
Profile.propTypes = {
    id: PropTypes.number,
    firstName: PropTypes.string
}



const App = () => {

    const city = "Coimbatore"
    const status = true;
    const contact = {
        email: 'subramanian.md@gmail.com',
        mobile: 1234567890
    }

    return <div>
        <Profile
            id={"1"}
            firstName="Subramanian"
            lastName="Murugan"
        />
        <Profile
            id={2}
            firstName="Subramanian"
            lastName="Murugan"
            city={city}
            status={status}
        />
        <Profile
            id={3}
            firstName="Subramanian"
            lastName="Murugan"
            city={city}
            contact={contact}
        />
    </div>
}


ReactDOM.render(<App />, document.getElementById('root'))