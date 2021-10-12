import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Route, Switch, useRouteMatch,useParams } from 'react-router-dom';


const Home = props => <div>
    <h1>Home</h1>
</div>
const Events = props => {

    const { url, path } = useRouteMatch();
    console.log(url, path);

    return <div>
        <h1>Events</h1>
        <ul>
            <li>
                {/** "/events/react" */}
                <Link to={`${url}/react`}>React Training</Link>
            </li>
            <li>
                {/** "/events/react" */}
                <Link to={`${url}/microservices`}>Microservices</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path={path}>
                <h1>Please Select Your Choice</h1>
            </Route>
            <Route path={`${path}/:eventId`}>
                <Event />
            </Route>
        </Switch>
    </div>
}

const Event = props => {
    const params = useParams();
    console.log(params);
    return <div>
        <h1>Your Event is {params.eventId} </h1>
    </div>
};

const App = () => {
    return <div className="container">
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/events">Events </Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/events">
                    <Events />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));