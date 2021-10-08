import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { USERS } from './mock-data/users';


const Grid = props => {

    return <table className="table">
        <thead class="thead-dark">
            <Columns />
        </thead>
        <GridBody users={props.datasource} />
    </table>
}
const Columns = props => {
    return <>
        <th>id</th>
        <th>name</th>
        <th>email</th>
    </>
}
const GridBody = props => {
    return <>
        <tbody>
            {
                props.users.map((user, index) => {
                    return <tr key={index}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                })
            }

        </tbody>
    </>
}

export const App = () => {
    return <div className="container">
        <h1>User Management App</h1>
        <hr />
        <Grid datasource={USERS} />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));