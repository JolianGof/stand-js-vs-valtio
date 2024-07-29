import { useState } from 'react';
import { addTodo } from '../../stores/valtio-store';

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



const AddTodo = () => {
  const [departmentName, setDepartmentName] = useState('');
  return (
    <div>
      <h2>Add Todo</h2>
      <input
        type="text"
        placeholder="Todo Description"
        value={departmentName}
        onChange={(e) => setDepartmentName(e.target.value)}
        style={inputStyle}
      />
      <button onClick={()=>addTodo(departmentName)} style={buttonStyle}>
        Add Todo
      </button>
    </div>
  );
};

export { AddTodo};
