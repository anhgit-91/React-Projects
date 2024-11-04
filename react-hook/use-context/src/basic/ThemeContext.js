import React, { createContext, useContext, useState } from "react";

// Create a ThemeContext that stores a theme, either "light" or "dark".
// Build a simple component structure where:
// A top-level ThemeProvider provides the theme context.
// A button toggles between the light and dark themes.
// A Header component displays the current theme.
// Make the background color change based on the theme.

const ThemeContext = createContext();

const Theme = () => {
    // logic
    const [themeLight, setThemeLight] = useState(true)
    return (
        <ThemeContext.Provider value={{themeLight, setThemeLight}}>
            <h3>Change the them color</h3>
            <button onClick={() => setThemeLight(!themeLight)}>
                { themeLight ? "Set Dark Theme" : "Set Light Theme" }
            </button>
            <Header />
        </ThemeContext.Provider>
    );
}

const Header = () => {
    const {themeLight} = useContext(ThemeContext);
    return (
        <div>
            <h3>Current theme color: 
                <p style={{
                    backgroundColor: themeLight ? "lightblue" : "darkblue",
                    color: themeLight ? "black" : "white",
                    padding: "10px",
                    borderRadius: "5px",
                }}>
                    { themeLight ? "Light Theme" : "Dark Theme" }
                </p>
            </h3>
        </div>
    );
}

export default Theme;

/*
import React, { createContext, useContext, useState } from "react";

// Create a ThemeContext that stores a theme, either "light" or "dark".
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // Initialize theme state
    const [themeLight, setThemeLight] = useState(true);

    return (
        // Provide both themeLight and setThemeLight to context consumers
        <ThemeContext.Provider value={{ themeLight, setThemeLight }}>
            {children}
        </ThemeContext.Provider>
    );
}

const Theme = () => {
    return (
        <ThemeProvider>
            <h3>Change the theme color</h3>
            <ToggleThemeButton />
            <Header />
        </ThemeProvider>
    );
}

// Component to toggle theme
const ToggleThemeButton = () => {
    const { themeLight, setThemeLight } = useContext(ThemeContext);
    return (
        <button onClick={() => setThemeLight(!themeLight)}>
            {themeLight ? "Set Dark Theme" : "Set Light Theme"}
        </button>
    );
}

// Header component to display current theme
const Header = () => {
    const { themeLight } = useContext(ThemeContext);
    return (
        <div>
            <h3>Current theme color:</h3>
            <p
                style={{
                    backgroundColor: themeLight ? "lightblue" : "darkblue",
                    color: themeLight ? "black" : "white",
                    padding: "10px",
                    borderRadius: "5px",
                }}
            >
                {themeLight ? "Light Theme" : "Dark Theme"}
            </p>
        </div>
    );
}

export default Theme;


*/