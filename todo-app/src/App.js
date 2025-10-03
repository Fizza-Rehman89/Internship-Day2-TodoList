import React, { useState } from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TodosList from "./Components/TodosList";
import AddTodo from "./Components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  // Add new todo
  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Calculate stats
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="app">
      <Header />
      <main className="container mt-4">
        <AddTodo onAddTodo={addTodo} />
        <TodosList 
          todos={todos}
          onDeleteTodo={deleteTodo}
          onToggleTodo={toggleTodo}
        />
      </main>
      <Footer 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        pendingTodos={pendingTodos}
      />
    </div>
  );
}

export default App;
