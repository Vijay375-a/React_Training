//setState + Event Listener
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Todo extends Component {

    //state
    state = {
        items: [],
        text: ''
    }
    //getting todo item
    //e is variable holding SyntheticEvent object reference
    onHandleChange = e => {
        //Getting Text Box reference
        let inputBox = e.target;
        this.setState({ text: inputBox.value })
    }
    handleSubmit = e => {
        //to stop auto form submission
        e.preventDefault();
        //form validation
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        //update the items array
        this.setState(state => {
            return {
                items: state.items.concat(newItem),
                text: ''
            }
        })
    }


    render() {
        return <div className="container">
            <h1>Todo App</h1>
            <hr />
            <h2>Todos</h2>
            <ul>
                {this.state.items.map((todo, index) => {
                    return <li key={index}>{todo.text}</li>
                })}
            </ul>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">What needs to be done?</label>
                <br />
                <input onChange={this.onHandleChange} value={this.state.text} />
                <button className="btn btn-success">Add #{this.state.items.length + 1}</button>
            </form>
        </div>
    }
}

const App = () => <Todo />

ReactDOM.render(<App />, document.getElementById('root'))
