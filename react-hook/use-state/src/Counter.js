import React, { useState } from "react";
import './Counter.css'
const Counter = () => {
    // Your state and logic here
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default Counter;
