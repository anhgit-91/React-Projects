import React, { createContext, useContext, useState } from 'react';

// Create the Preferences Context
const PreferencesContext = createContext();

// UserPreferences component that wraps the context provider
const UserPreferences = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('')

    // Method to update user preferences
    const updateUserPreference = (userName, key, value) => {
        setUsers(users.map(user =>
            user.name === userName ? { ...user, [key]: value } : user
        ));
    };

    return (
        <PreferencesContext.Provider value={{ users, setUsers, updateUserPreference, selectedUser, setSelectedUser }}>
            <AddUsers />
            <UserList />
        </PreferencesContext.Provider>
    );
};

// AddUsers component to add new users
const AddUsers = () => {
    const { users, setUsers, setSelectedUser } = useContext(PreferencesContext);
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
        const newUserObject = { id: Date.now(), name: newUser.trim(), theme: 'red', language: 'english', fontSize: '16px' };
        const updatedUsers = [...users, newUserObject];
        
        setUsers(updatedUsers);
        if (updatedUsers.length === 1) {
            setSelectedUser(newUserObject.name);
        }
        
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
    const { users, selectedUser, setSelectedUser } = useContext(PreferencesContext);

    return (
        <div>
            
            <label htmlFor="selectedUser">Select a User:</label>
            <select name="users" id="selectedUser" value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
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

    const mystyle = {
        color: selectedUser.theme,
        fontSize: selectedUser.fontSize,
      };

    return (
        <div>
            <h3>Settings for {selectedUser.name}</h3>
            
            <label>Theme:</label>
            <select
                value={selectedUser.theme}
                onChange={e => updateUserPreference(selectedUser.name, 'theme', e.target.value)}
            >
                <option value="red">Red</option>
                <option value="green">Green</option>
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
            <br />
            <h3>Sample text:</h3>
            <p style={mystyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    );
};

export default UserPreferences;
