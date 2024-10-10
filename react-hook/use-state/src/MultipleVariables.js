import React, { useState } from 'react';

const FullName = () => {
  // Your state and logic here
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  return (
    <div>
      <input type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)}/>
      <input type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)}/>
      <p>Full Name: {firstName + " " + lastName}</p>
    </div>
  );
};

export default FullName;
