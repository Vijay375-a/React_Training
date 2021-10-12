import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


const DescriptionList = props => {
    return <dl>
        {props.items.map((item, index) => {
            return <Fragment key={index}>
                <dt>
                    {item.term}
                </dt>
                <dd>
                    {item.description}
                </dd>
            </Fragment>
        })}
    </dl>
}

const items = [{
    term: 'coffee',
    description: 'Cold Coffee'
},
{
    term: 'Milk',
    description: 'Milk has lot of protins'
},
]

export const App = () => {
    return <div className="container">
        <DescriptionList items={items} />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));