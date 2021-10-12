import ReactDOM from 'react-dom';
import React from 'react';

//List Component
const NumberList = props => {
    //List View
    const { numbers } = props;
    const listItems = numbers.map((num, index) => {
        return <li key={index}>{num}</li>
    });
    return <ul>
        {listItems}
    </ul>
};

const App = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return <NumberList numbers={numbers} />
}


ReactDOM.render(<App />, document.getElementById('root'))