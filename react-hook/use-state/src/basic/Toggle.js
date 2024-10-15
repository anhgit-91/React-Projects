import React, { useState } from 'react';

const ToggleVisibility = () => {
  // Your state and logic here
  const [visibility, setVisibility] = useState(true);
  return (
    <div>
    <h1>Toggle Visibility</h1>
      <button onClick={() => setVisibility(!visibility)}>Show</button>
      {visibility === true && <p>Text to toggle</p>}
    </div>
  );
};

export default ToggleVisibility;
