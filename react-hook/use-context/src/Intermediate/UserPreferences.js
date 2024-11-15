import React, { createContext, useContext, useState } from 'react';

// Create the Preferences Context
const PreferencesContext = createContext();

// UserPreferences component that wraps the context provider
const UserPreferences = () => {
    const [users, setUsers] = useState([]);

    // Method to update user preferences
    const updateUserPreference = (userName, key, value) => {
        setUsers(users.map(user =>
            user.name === userName ? { ...user, [key]: value } : user
        ));
    };

    return (
        <PreferencesContext.Provider value={{ users, setUsers, updateUserPreference }}>
            <AddUsers />
            <UserList />
        </PreferencesContext.Provider>
    );
};

// AddUsers component to add new users
const AddUsers = () => {
    const { users, setUsers } = useContext(PreferencesContext);
    const [newUser, setNewUser] = useState('');

    const handleAdd = () => {
        if (!newUser.trim()) {
            alert("Username cannot be empty");
            return;
        }
        if (users.some(user => user.name === newUser)) {
            alert("User already exists");
            return;
        }
        setUsers([...users, { id: Date.now(), name: newUser.trim(), theme: 'white', language: 'english', fontSize: '16px' }]);
        setNewUser('');
    };

    return (
        <div>
            <label htmlFor="addUser">Add new user:</label> <br />
            <input
                type="text"
                id="addUser"
                name="addUser"
                value={newUser}
                placeholder="Enter new username"
                onChange={e => setNewUser(e.target.value)}
            />
            <button onClick={handleAdd} disabled={!newUser.trim()}>Add new user</button>
        </div>
    );
};

// UserList component to display the list of users
const UserList = () => {
    const { users } = useContext(PreferencesContext);
    const [selectedUser, setSelectedUser] = useState('');

    return (
        <div>
            <label htmlFor="selectUser">Select a User:</label>
            <select name="users" id="selectUser" onChange={e => setSelectedUser(e.target.value)}>
                {users && users.length > 0 ? (
                    users.map((user) => (
                        <option key={user.id} value={user.name}>{user.name}</option>
                    ))
                ) : (
                    <option>No users available</option>
                )}
            </select>
            <Setting user={selectedUser} />
        </div>
    );
};

// Setting component to modify user preferences
const Setting = ({ user }) => {
    const { users, updateUserPreference } = useContext(PreferencesContext);

    // Find the selected user
    const selectedUser = users.find(u => u.name === user);

    if (!selectedUser) {
        return <div>Please select a user to view settings.</div>;
    }

    return (
        <div>
            <h3>Settings for {selectedUser.name}</h3>
            
            <label>Theme:</label>
            <select
                value={selectedUser.theme}
                onChange={e => updateUserPreference(selectedUser.name, 'theme', e.target.value)}
            >
                <option value="white">White</option>
                <option value="dark">Dark</option>
                <option value="blue">Blue</option>
            </select>

            <label>Language:</label>
            <select
                value={selectedUser.language}
                onChange={e => updateUserPreference(selectedUser.name, 'language', e.target.value)}
            >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
            </select>

            <label>Font Size:</label>
            <input
                type="number"
                value={parseInt(selectedUser.fontSize)}
                onChange={e => updateUserPreference(selectedUser.name, 'fontSize', `${e.target.value}px`)}
            />
        </div>
    );
};

export default UserPreferences;
