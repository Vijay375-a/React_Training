import React from 'react';
import ReactDOM from 'react-dom';

//invalid jsx
//const Heading = () => <h1>Hello!
// const Heading = () =><h1>Hello</h1><p>Welcome</p>

const Heading = () => <div>
    <h1>Hello</h1>
    <p>Welcome</p>
</div>;

ReactDOM.render(<Heading></Heading>, document.getElementById('root'))