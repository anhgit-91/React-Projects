import React, { useState } from 'react';

const InputTracker = () => {
  // Your state and logic here
  const [input,setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <input type="text" onChange={handleChange}/>
      <p >Current Input: {input}</p>
    </div>
  );
};

export default InputTracker;
