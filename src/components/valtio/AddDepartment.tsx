import React, { useState } from 'react';
import { addEmployee, addEngineering,  }  from '../../stores/valtio-store';

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
export const AddDepartment: React.FC = () => {
    const [departmentName, setDepartmentName] = useState('');

   console.log('first')
  
    return (
      <div>
        <h2>Add Department</h2>
        <input
          type="text"
          placeholder="Department Name"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          style={inputStyle}
        />
        <button onClick={()=>addEngineering({firstName:departmentName,lastName:departmentName})} style={buttonStyle}>
          Add Department
        </button>
      </div>
    );
  };