import React, { useState } from 'react';
import { addEmployee, store }  from '../../stores/valtio-store';
import { useSnapshot } from 'valtio';

const inputStyle = {
  margin: '5px',
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '8px 16px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
};




export const AddEngineeringEmployee= () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const handleAddEmployee = () => {
      addEmployee('engineering', { firstName, lastName });
      setFirstName('');
      setLastName('');
    };
  
    return (
      <div>
        <h2>Add Engineering Employee</h2>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleAddEmployee} style={buttonStyle}>
          Add Employee
        </button>
      </div>
    );
  };