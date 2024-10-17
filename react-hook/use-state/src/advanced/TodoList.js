import React, { useState } from 'react';

const TodoList = () => {
    // logic start here
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewToDo] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleAdd = () => {
        setTodos([...todos,{id: Date.now(), title: newTodo, complete: false}])
        setNewToDo('');
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setNewToDo(todos[index].title);
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((_,idx) => idx !== index));
    }

    const handleUpdate = () => {
        const updateTodos = todos.map((todo, idx) => idx=== editIndex ? {...todo, title: newTodo} : todo);
        setTodos(updateTodos);
        setEditIndex(null);
        setNewToDo('');
    }

    return (
        <div style={{margin: '20px'}}>
            <label htmlFor="todo">Add your new todo</label>
            <input 
            type="text" 
            name='todo' 
            id='todo' 
            placeholder='New todo' 
            value={newTodo}
            onChange={e => setNewToDo(e.target.value)}
            />
            <button onClick={editIndex === null ? handleAdd : handleUpdate}>
                {editIndex === null ? 'Add' : 'Update'}
            </button>

            <ul>
                {todos.map((todo, index) => (
                <li key={todo.id}>
                    {todo.title}
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
                ))}
                
            </ul>
        
        </div>
    );
};

export default TodoList;