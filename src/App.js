import React from 'react';
import Header from './components/Header'
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="todo-list">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div>
    </div>
  );
}

export default App;
