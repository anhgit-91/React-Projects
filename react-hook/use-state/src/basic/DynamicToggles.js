import React, { useState } from 'react';
import './Counter.css';

const ClassToggler = () => {
    // logic start here
    const [colorClass, setColorClass] = useState('box');
    
    // Better function name to reflect the action
    const toggleColorClass = () => {
        setColorClass(prevClass => (prevClass === 'box' ? 'notBox' : 'box'));
    };
    
    return (
        <div>
            <button onClick={toggleColorClass}>Toggle Class</button>
            <div className={colorClass}>This is a box</div>
        </div>
    );
};

export default ClassToggler;
