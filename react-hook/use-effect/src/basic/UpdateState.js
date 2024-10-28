import React, { useState, useEffect } from 'react';

const UpdateState = (props) => {
    const [prevCount, setPrevCount] = useState(null);
    const [count, setCount] = useState(props.count);

    // Use useEffect to update prevCount when count changes
    useEffect(() => {
        if (prevCount !== null) {
            console.log(`Previous count: ${prevCount}, New count: ${count}`);
        }
        setPrevCount(count - 1); // Set prevCount to current count
    }, [prevCount,count]); // Runs whenever `count` changes

    const handleIncreasement = () => {
        setCount(count + 1); // Update count
    };

    return (
        <div>
            <p>Previous count: {prevCount}</p>
            <h4>Current count: {count}</h4>
            <button onClick={handleIncreasement}>Increase count by 1</button>
        </div>
    );
};

export default UpdateState;
