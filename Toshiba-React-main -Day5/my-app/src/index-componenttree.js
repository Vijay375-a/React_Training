import React from 'react';
import ReactDOM from 'react-dom';


const Header = () => <h1>Header</h1>;

const Footer = () => <h1>Footer</h1>;

const Body = () => <div>
    <h2>Learn Once, Write Anywhere</h2>
    <p>
        We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

        React can also render on the server using Node and power mobile apps using React Native.
    </p>
</div>


const App = () => <div>
     <Header/>
     <Body/>
     <Footer/>
</div>



ReactDOM.render(<App />, document.getElementById('root'))