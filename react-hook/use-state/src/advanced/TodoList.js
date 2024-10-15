import React, { useState } from "react";

const TodoList = () => {
    // Logic start here
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [Index, setIndex] = useState(null);

    const addTodo = () => {
        setTodos([
            ...todos,
            { id: Date.now(), title: newTodo, completed: false },
        ]);
        setNewTodo('');
    };

    const editTodo = (index) => {
        setIndex(index);
        setNewTodo(todos[index].title);
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, idx) => idx !== index));
    };

    const updateTodo = () => {
        const updatedTodos = todos.map((todo, idx) => 
        idx === Index ? {...todo, title: newTodo} : todo);
        setTodos(updatedTodos);
        setIndex(null);
        setNewTodo('');
    };
    return (
        <div>
            <h1>Todo List</h1>
            <input placeholder="New todo" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
            <button onClick={Index === null ? addTodo : updateTodo}>
                {Index === null ? 'Add' : 'Update'}
            </button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => editTodo(index)}>Edit</button>
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
