import React, { createRef, useEffect } from 'react';
import ReactDOM from 'react-dom';


const Text = props => {
    const myref = createRef();

    useEffect(() => {
        console.dir(myref.current);
        console.log(myref.current.innerHTML)
    })
    return <div ref={myref}>
        <h1>Heading</h1>
    </div>
}

const App = () => {
    return <div>
        <Text />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));