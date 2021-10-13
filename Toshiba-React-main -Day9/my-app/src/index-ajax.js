import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


class Todo extends Component {

    state = {
        error: null,
        isLoaded: false,
        todos: []
    }
    render() {
        const { error, isLoaded, todos } = this.state;
        console.log('render', error);
        //Conditional Rendering
        if (error) {
            console.log('inside error block')
            return <div>Error</div>;
        } else if (!isLoaded) {
            return <h1>Loading...</h1>;
        } else {
            return (
                <div className="container">
                    <h1>TODO App</h1>
                    <hr />
                    <ul className="list-group">
                        {todos.map((todo, index) => (
                            <li key={index}>
                                <span className="badge badge-pill badge-primary">
                                    {todo.id}
                                </span>
                                <span>
                                    {todo.title}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }



    }
    componentDidMount() {
        const todourl = 'https://jsonplaceholder.typicode.com/todos';
        fetch(todourl)
            .then(response => response.json())
            .then(todos => {
                this.setState(previousState => {
                    return { ...previousState, todos: previousState.todos.concat(todos), isLoaded: true };
                });
            }).catch(error => {
                console.log(error)
                this.setState({
                    isLoaded: true,
                    error
                });
            })
    }

}
const App = () => <Todo />

ReactDOM.render(<App />, document.getElementById('root'));
