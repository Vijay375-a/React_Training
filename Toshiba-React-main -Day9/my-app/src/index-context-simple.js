import React from 'react';
import ReactDOM from 'react-dom';

//create Context Object
export const ThemeContext = React.createContext('themecontext');
const theme = {
    "backgroundColor": "red",
    "color": "white"
}

const Toolbar = props => {
    return <ThemedButton />
}
const ThemedButton = props => {
    return <Button />
}
const Button = props => {

    return <ThemeContext.Consumer>
        {theme => {
            return <button style={theme}>MyButton</button>
        }}
    </ThemeContext.Consumer>

}


const App = props => {
    return <ThemeContext.Provider value={theme}>
        <Toolbar />
    </ThemeContext.Provider>
}

ReactDOM.render(<App />, document.getElementById('root'));