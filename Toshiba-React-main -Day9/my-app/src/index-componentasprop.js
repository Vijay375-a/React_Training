import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import logo from './logo.svg';

const Carousel = props => <div>
    {props.children}
</div>

const Image = props => <img src={logo} />
const Text = props => <h1 style={{textAlign:'center'}}>React Rocks!!</h1>

const App = () => {
    return <div className="container">
        <Carousel>
            {/*Image as prop */}
            <Image />
            <Text />
        </Carousel>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));
