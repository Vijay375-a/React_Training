import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';


const Factorial = props => {

    const [num, setNum] = useState(1)
    const [count, setCount] = useState(0);

    const factorialOf = n => {
        console.log('Factorial of n is called',n);
        return n <= 0 ? 1 : n * factorialOf(n - 1);
    }
    const factorial = useMemo(() => factorialOf(num), [num]);

    const onChange = evt => {
        setNum(Number(evt.target.value))
    }
    const onClick = evt => {
        alert('rerendering')
        setCount(i => i + 1);
    }

    return <div>
        <input type="number" value={num} onChange={onChange} />
        <h3>{factorial}</h3>
        <button onClick={onClick}>Re render</button>
    </div>
}
const App = props => {
    return <Factorial />
}

ReactDOM.render(<App />, document.getElementById('root'));