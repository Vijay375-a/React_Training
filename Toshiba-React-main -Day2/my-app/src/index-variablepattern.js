//component creational pattern : variable pattern
import React from 'react';
import ReactDOM from 'react-dom' //render engine: browser

//create component using jsx language 
const Heading = <h1>Hello React!</h1>;
console.log(Heading);

//render Heading into browser
ReactDOM.render(Heading,document.getElementById('root'))