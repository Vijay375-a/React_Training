import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Route, Switch, useRouteMatch, useParams, useHistory } from 'react-router-dom';


const Home = props => {
    const history = useHistory()


    function handleClick() {
        history.push("/events");
    }
    return <div>
        <h1>Home</h1>
        <button type="button" onClick={handleClick}>
            Go Events
        </button>
    </div>
}
const Events = props => {

    const { url, path } = useRouteMatch();
    console.log(url, path);

    return <div>
        <h1>Events</h1>
        <ul>
            {
                props.events.map((event, index) => {
                    return <li key={index}>
                        <Link to={`${url}/${event.name}`}>{event.name}</Link>
                    </li>
                })
            }
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

//events data
const events = [
    {
        id: 1,
        name: 'React Training'
    },
    {
        id: 2,
        name: 'Microservices'
    },
    {
        id: 3,
        name: 'Data Science'
    },
    {
        id: 4,
        name: 'Dev ops'
    },
    {
        id: 5,
        name: 'Cloud'
    }
];

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
                    <Events events={events} />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));