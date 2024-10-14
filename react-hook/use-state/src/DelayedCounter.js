import React, {useState} from 'react';

const DelayedCounter = () => {
    // Your state and logic here
    const [counter, setCounter] = useState(0);
    function handleCounter () {
        setTimeout(() => {
            setCounter(counter + 1);
        }, 1000)
    }
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleCounter}>Increment after 1s</button>
        </>
    );
};

export default DelayedCounter;