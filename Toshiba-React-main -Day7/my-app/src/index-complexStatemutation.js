import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Customer = props => {

    const [customer, setCustomer] = useState(props.customer)

    const onUpdate = evt => {
        setCustomer(prevState => {
            console.log(prevState);
            return {
                ...customer,
                contact: {
                    ...customer.contact,
                    communication: {
                        ...customer.contact.communication,
                        mobileno: '9003706368'
                    }
                }
            }
        })
    }

    return <div>
        <h1>Customer Info</h1>
        <p>
            {JSON.stringify(customer)}
        </p>
        <button onClick={onUpdate}>Update Customer</button>
    </div>
};


let customer = {
    id: 1,
    name: 'Subramanian',
    contact: {
        address: {
            city: 'Coimbatore'
        },
        communication: {
            mobileno: '9000000000'
        }
    }
}
const App = props => {
    return <Customer customer={customer} />
}

ReactDOM.render(<App />, document.getElementById('root'));