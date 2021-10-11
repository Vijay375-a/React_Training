//Custom Hooks
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Customer = props => {
    //Application state
    const [screen, setScreen] = useState('Customer Manager App')
    const [width, setWidth] = useState(window.innerWidth);

    //title update
    useEffect(() => {
        document.title = screen;
    });
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        //add window resize listener
        window.addEventListener('resize', handleResize)
        //clean up code
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    return <div>
        <h1>Custom Hooks</h1>
        <h2>Current Window width {width}</h2>
        <button onClick={() => {
            setScreen('CustomerManager App-Update')
        }}>Update Title</button>
    </div>

}

const App = () => {
    return <div>
        <Customer />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));