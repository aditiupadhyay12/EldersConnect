import React, { useState } from 'react';

const UserDetailsForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    // Handle form submission (e.g., store the user details)
    console.log('User details submitted:', { name, age });
  };

  return (
    <div>
      <h2>User Details Form</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Age:</label>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserDetailsForm;
