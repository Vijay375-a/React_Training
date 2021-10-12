import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


const Home=props=>{
    return <div>
        <h1>Home</h1>
    </div>
}
const Today=props=>{
    return <div>
        <h1>Today</h1>
    </div>
}

const Events=props=>{
    return <div>
        <h1>List of Events</h1>
    </div>
}
const App = props => {
    return <BrowserRouter basename="/toshiba">
            <nav>
                <Link to="/today">Today</Link>|
                <Link to="/events">Events</Link>

            </nav>
            <Route>
                <Switch>
                    <Route path="/today">
                        <Today/>
                    </Route>
                    <Route path="/events">
                        <Events/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Route>
    </BrowserRouter>
}

ReactDOM.render(<div className="container">
    <App />
</div>, document.getElementById('root'));