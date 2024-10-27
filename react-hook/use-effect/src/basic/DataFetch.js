import React, { useState, useEffect } from 'react';

// Build a component that fetches data from a placeholder API (like JSONPlaceholder) when it mounts.
// Display the fetched data in a list format.

const DataFetch = () => {

    //Logic
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch a list of todos from JSONPlaceholder API, limit to 5 users
        fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
            .then(response => {
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUserData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    },[]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div>
            <h1>Todo List</h1>
            { userData && (
            
                <ul>
                    {userData.map(todo => (
                        <li key={todo.id}>User ID: {todo.id} <br />
                        Username: {todo.username}
                        </li>
                    ))}
                    
                </ul>
            
            )}
        </div>
    );
};

export default DataFetch;

