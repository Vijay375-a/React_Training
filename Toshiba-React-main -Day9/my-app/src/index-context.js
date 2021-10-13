import React from 'react';
import ReactDOM from 'react-dom';

//create Context Object
export const { Provider, Consumer } = React.createContext('themecontext');
const theme = {
    "backgroundColor": "green",
    "color": "white"
}

const Toolbar = props => {
    return <ThemedButton />
}
const ThemedButton = props => {
    return <Button />
}
const Button = props => {

    return <Consumer>
        {theme => {
            return <button style={theme}>MyButton</button>
        }}
    </Consumer>

}


const App = props => {
    return <Provider value={theme}>
        <Toolbar />
    </Provider>
}

ReactDOM.render(<App />, document.getElementById('root'));