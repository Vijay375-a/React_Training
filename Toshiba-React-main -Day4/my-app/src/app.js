import React from 'react';
// import { Header } from './header/header';
// import { Footer } from './footer/footer';
import { Header,MenuBar } from './header';
import { Footer } from './footer';
// import { Body } from './body/body';
import { Body } from './body';


const App = () => <div className="container">
    <Header />
    <MenuBar/>
    <Body />
    <Footer />
</div>

export default App;