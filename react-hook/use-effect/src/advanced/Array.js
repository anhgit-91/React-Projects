import React, { useEffect, useState } from "react";

// Create a component with multiple state values.
// Experiment with adding/removing dependencies in useEffect to control 
//      which state changes trigger the effect.


const Array = () => {

    // logic here
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    useEffect(
    () => {
        console.log("Count A trigger effect")
    }
    ,[countA])
    return (
        <div>
            <div>
                <p>{countA}</p>
                <button onClick={() => setCountA(countA + 1)}>Increase Count A</button>
            </div>
            <div>
                <p>{countB}</p>
                <button onClick={() => setCountB(countB + 1)}>Increase Count B</button>
            </div>
        </div>
    );
};

export default Array;