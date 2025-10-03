import React from 'react';
import Todo from './Todo';

export default function TodosList({ todos, onDeleteTodo, onToggleTodo }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="card">
          <div className="card-body">
            <h4 className="text-muted">No todos yet!</h4>
            <p className="text-muted">Add your first todo above.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h4 className="mb-3" style={{ color: "white" }}>Your Todos ({todos.length})</h4>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </div>
  );
}
