import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { USERS } from './mock-data/users';

export const UserMaster = props => {
    return props.users.map((user, index) => {
        return <UserDetails user={user} key={index} />
    })
}
export const UserDetails = props => {
    return <div>
        <h2>{props.user.id} details</h2>
        <h2>Name : {props.user.name}</h2>
        <h2>UserName : {props.user.username}</h2>
        <h2>email : {props.user.email}</h2>
        <Address address={props.user.address} />
    </div>
};
export const Address = props => {
    return <address>
        <p>{props.address.street}</p>
        <p>{props.address.suite}</p>
        <p>{props.address.city}</p>
        <p>{props.address.zip}</p>
        <Geo geo={props.address.geo} />
    </address>
}
//without Fragement
// export const Geo = props => {
//     return <div>
//         <p>{props.geo.lng}</p>
//         <p>{props.geo.lat}</p>
//     </div>
// }
//with Fragement
// export const Geo = props => {
//     return <React.Fragment>
//         <p>{props.geo.lng}</p>
//         <p>{props.geo.lat}</p>
//     </React.Fragment>
// };
//Fragment code refactoring
// export const Geo = props => {
//     return <Fragment>
//         <p>{props.geo.lng}</p>
//         <p>{props.geo.lat}</p>
//     </Fragment>
// };
//Fragment: Simplified - <></>
export const Geo = props => {
    return <>
        <p>{props.geo.lng}</p>
        <p>{props.geo.lat}</p>
    </>
};

export const App = () => {
    return <div className="container">
        <h1>User Management App</h1>
        <hr />
        <UserMaster users={USERS} />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));
