import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useWindowWidth } from './windowhooks/useWindowHook';

const Customer = props => {
    //Application state
    const [screen, setScreen] = useState('Customer Manager App')
    const width = useWindowWidth();
    //title update
    useEffect(() => {
        document.title = screen;
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