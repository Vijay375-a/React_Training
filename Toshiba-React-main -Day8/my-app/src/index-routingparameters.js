import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Route, Switch, useParams } from 'react-router-dom';

const EventDetails = props => {
    console.log(props);
    const { id } = props.match.params;
    return <div>
        <h3>Event Id {id} </h3>
    </div>
}

const App = props => {
    return <BrowserRouter>
        <h1>List of Events</h1>
        <ul>
            <li>
                <Link to="/react">React Training</Link>
            </li>
            <li>
                <Link to="/microservices" >Micro Services WorkShop</Link></li>
            <li>
                <Link to="/datascience">Data Science Expert Talks</Link>
            </li>
        </ul>
        <Switch>
            <Route path="/:id" children={EventDetails} />
        </Switch>
    </BrowserRouter>
}

ReactDOM.render(<div className="container">
    <App />
</div>, document.getElementById('root'));