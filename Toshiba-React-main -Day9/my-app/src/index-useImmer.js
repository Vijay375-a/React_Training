//React and immer
// import produce from 'immer';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useImmer } from 'use-immer';

//TodoList
const TodoList = props => {
    const initalState = [{
        id: 1,
        title: 'Learn React',
        done: false
    },
    {
        id: 2,
        title: 'Learn React With Immer',
        done: false
    }
    ];
    // const [todos, setTodos] = useState(initalState)
    const [todos, setTodos] = useImmer(initalState)

    //add new Todo
    const handleAddTodo = evt => {
        setTodos(state => {
            state.push({
                id: "todo_" + Math.random(),
                title: 'A new Todo',
                done: false
            })
        });
    }

    //toggling with immer
    const toggleTodo = id => {
        setTodos(state => {
            const todo = state.find(todo => todo.id === id)
            todo.done = !todo.done;
        })
    }



    return <div>
        <h1>Todo App Using Immer</h1>
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
            {
                todos.map((todo, index) => {
                    return <Todo todo={todo} onToggle={toggleTodo} key={todo.id} />;
                })
            }

        </ul>
        <h1>Tasks Left : {todos.filter(todo => { return todo.done === false }).length}</h1>
    </div>
};
const Todo = ({ todo, onToggle }) => {
    console.log(todo)
    return <li>
        <input type="checkbox" onClick={() => {
            onToggle(todo.id) //lifting up the state to parent component.
        }} />
        {todo.title}
    </li>
}



const App = () => {
    return <TodoList />
}

ReactDOM.render(<App />, document.getElementById('root'));

