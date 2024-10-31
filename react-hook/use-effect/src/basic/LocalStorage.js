import React, { useState, useEffect } from 'react';

// Make a component that syncs a text input’s value with localStorage using useEffect.
// Load the stored value from localStorage when the component mounts.

const LocalStorage = () => {

    // Logic start here
    const [inputValue, setInputValue] = useState(localStorage.getItem('inputValue') || " ")
    useEffect(
        () => {
            localStorage.setItem = ('inputValue',inputValue)
        }
        ,[inputValue]);
    return (
        <div>
            <label htmlFor="inputvalue">Input Value</label> <br />
            <input type="text" placeholder='Input Value' name='inputValue' value={inputValue}  onChange={(e) => setInputValue(e.target.value)}/>
            
            <p>{inputValue}</p>

        </div>
    )

};


export default LocalStorage