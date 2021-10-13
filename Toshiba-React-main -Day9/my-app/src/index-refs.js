import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';


const Text = props => {
    const myref = useRef(null);

    useEffect(() => {
        myref.current.focus();
    })
    const onRead = event => {
        alert(myref.current.value);
    }
    return <div>
        <input type="text" ref={myref} value="Hello" />
        <button onClick={onRead}>ReadValue</button>
    </div>
}

const App = () => {
    return <div>
        <Text />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));