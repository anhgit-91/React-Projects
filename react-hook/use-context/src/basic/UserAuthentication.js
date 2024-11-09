import React, { createContext, useContext, useState } from "react";

/*
    Create a UserContext that stores information about a user, including username, email, and an isLoggedIn boolean.
    Add a Login component that sets isLoggedIn to true and updates the user information.
    Add a Logout component that clears the user information and sets isLoggedIn to false.
    Display a UserProfile component that only shows when the user is logged in.
*/

// Create a context to hold user information
const UserInfo = createContext();

const AuthenticationContext = () => {
    // Initialize the state with user info and login status
    const [userInfo, setUserInfo] = useState({
        name: "John Doe",
        email: "JohnDoe@gmail.com",
        isLoggedIn: false,
    });

    return (
        // Provide the context value to child components
        <UserInfo.Provider value={{ userInfo, setUserInfo }}>
            {/* Show the Login component only when the user is not logged in */}
            {userInfo.isLoggedIn ? (
                <>
                    <UserProfile />
                    <Logout />
                </>
            ) : (
                <Login />
            )}
        </UserInfo.Provider>
    );
};

// Component to display user profile information when logged in
const UserProfile = () => {
    const { userInfo } = useContext(UserInfo); // Access the user info from context

    return (
        <div>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Online: {userInfo.isLoggedIn ? "Yes" : "No"}</p>
        </div>
    );
};

// Component to handle login functionality
const Login = () => {
    const { userInfo, setUserInfo } = useContext(UserInfo); // Access context values

    const handleLogin = () => {
        // Update the user's isLoggedIn status to true and keep other data intact
        setUserInfo({ ...userInfo, isLoggedIn: true });
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* Show the UserProfile and Logout components only when logged in */}
        </div>
    );
};

// Component to handle logout functionality
const Logout = () => {
    const { userInfo, setUserInfo } = useContext(UserInfo); // Access context values

    const handleLogout = () => {
        // Update the user's isLoggedIn status to false and keep other data intact
        setUserInfo({ ...userInfo, isLoggedIn: false });
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default AuthenticationContext;
