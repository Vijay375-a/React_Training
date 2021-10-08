import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

const Counter = props => {
    //state declartion
    const [count, setCount] = useState(10);
    const [like, setLike] = useState(100);

    //listener
    const onIncrement = () => {
        //  setCount(count + 1);
        setCount(prevState => {
            console.log(prevState);
            return prevState + 1
        })
    };
    return <div className="container">
        <h1>Counter App Using Hooks</h1>
        <h1>Counter : {count} Like {like}</h1>

        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            setCount(count - 1)
        }}>-</button>
        <hr />
        <div>
            <button onClick={() => setLike(like + 1)}>like</button>
        </div>

    </div>
}


const App = () => <Counter />

ReactDOM.render(<App />, document.getElementById('root'));
