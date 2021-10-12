import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

const Feeback = props => {
    const initalState = { like: 10 }
    const [feeback, setFeedback] = useState(initalState);

    const giveFeedback = () => {
        // setFeedback(prevState => {
        //     console.log(prevState);
        //     return {
        //         like: prevState.like + 1
        //     }
        // })
        let like = feeback.like + 1;
        setFeedback({ ...feeback, like })
    }

    return <div>
        <h1>Feeback {feeback.like}</h1>
        <button onClick={giveFeedback}>+</button>
    </div>
}

const App = () => <Feeback />

ReactDOM.render(<App />, document.getElementById('root'));
