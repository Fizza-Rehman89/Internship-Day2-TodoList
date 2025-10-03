import React from 'react';

export default function Todo({ todo, onDeleteTodo, onToggleTodo }) {
  return (
    <div className={`card mb-2 ${todo.completed ? 'bg-light' : ''}`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <span 
            className={todo.completed ? 'text-decoration-line-through text-muted' : ''}
          >
            {todo.text}
          </span>
          <div>
            <button
              className={`btn btn-sm me-2 ${
                todo.completed ? 'btn-warning' : 'btn-success'
              }`}
              onClick={() => onToggleTodo(todo.id)}
            >
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
