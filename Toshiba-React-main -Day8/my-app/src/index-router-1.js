import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

//components 
const Home = props => {
    return <div>
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
            Declarative views make your code more predictable and easier to debug.
        </p>
    </div>
}

const Blog = props => {

    useEffect(() => {
        document.title = 'Blog'

        //componentwillUnMount
        return () => {
            console.log('Component has removed')
        }
    });

    return <div>
        <h1>The Plan for React 18</h1>
        <p>The React team is excited to share a few updates:

            We’ve started work on the React 18 release, which will be our next major version.
            We’ve created a Working Group to prepare the community for gradual adoption of new features in React 18.
            We’ve published a React 18 Alpha so that library authors can try it and provide feedback.
            These updates are primarily aimed at maintainers of third-party libraries. If you’re learning, teaching, or using React to build user-facing applications, you can safely ignore this post. But you are welcome to follow the discussions in the React 18 Working Group if you’re curious!
        </p>
    </div>
}

const App = props => {

    return <div className="container">
        <h1>Single Page React Application</h1>
        
        <BrowserRouter >
            {/**Menus */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            {/**Router Rules : based on navigation what should i return */}
            <Switch>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))
