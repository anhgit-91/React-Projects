import React, { useState, useEffect } from 'react';

const SynchronizedComponent = () => {
    const [value, setValue] = useState("");

    // Initialize the component state with the value from localStorage
    useEffect(() => {
        const storedValue = localStorage.getItem('syncValue');
        if (storedValue) {
            setValue(storedValue);
        }
    }, []);

    // Update localStorage whenever the component's state changes
    useEffect(() => {
        localStorage.setItem('syncValue', value);
    }, [value]);

    // Listen for storage events from other tabs and update state
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'syncValue') {
                setValue(event.newValue || "");
            }
        };
        
        // Listen to storage events
        window.addEventListener('storage', handleStorageChange);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        <div>
            <label>Synchronize across tabs:</label>
            <input 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder="Type something..."
            />
        </div>
    );
};

export default SynchronizedComponent;
