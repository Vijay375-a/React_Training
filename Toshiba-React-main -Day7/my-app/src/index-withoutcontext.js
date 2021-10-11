import React from 'react';
import ReactDOM from 'react-dom';


const Toolbar = props => {
    return <ThemedButton theme={props.theme} />
}
const ThemedButton = props => {
    return <Button theme={props.theme} />
}
const Button = props => {
    return <button style={props.theme}>MyButton</button>
}

const theme = {
    "backgroundColor": "red",
    "color": "white"
}
const App = props => {
    return <Toolbar theme={theme} />
}

ReactDOM.render(<App />, document.getElementById('root'));