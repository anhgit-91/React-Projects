import React, { useState } from 'react';

const MultiCounter = () => {
  const [counters, setCounters] = useState([0]);

  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  const incrementCounter = (index) => {
    setCounters(counters.map((count, i) => i === index ? count + 1 : count));
  };

  const decrementCounter = (index) => {
    setCounters(counters.map((count, i) => i === index ? count - 1 : count));
  };

  const resetCounter = (index) => {
    setCounters(counters.map((count, i) => i === index ? 0 : count));
  };

  return (
    <div>
      <h1>Multi Counter</h1>
      {counters.map((counter, index) => (
        <div key={index}>
          <h3>Counter {index + 1}: {counter}</h3>
          <button onClick={() => incrementCounter(index)}>Increment</button>
          <button onClick={() => decrementCounter(index)}>Decrement</button>
          <button onClick={() => resetCounter(index)}>Reset</button>
        </div>
      ))}
      <button onClick={addCounter}>Add Counter</button>
    </div>
  );
};

export default MultiCounter;
