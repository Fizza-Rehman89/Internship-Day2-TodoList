import React, { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add New Todo</h5>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your todo..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
