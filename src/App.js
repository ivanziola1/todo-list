import React from 'react'
import Header from './components/Header'
import './App.css'
import TodoItem from './components/TodoItem'
import './Header.css'

function App() {
  const items = [
    { name: 'First Item' },
    { name: 'Second Item' },
    { name: 'Third Item' },
    { name: 'Fourth Item' },
    { name: 'Fifth Item' },
    { name: 'Other' }
  ]

  return (
    <div className="App">
      <Header/>
      
      <div className="todo-list">
        {items.map((item) => <TodoItem item={item}/>)}
      </div>
    </div>
  );
}

export default App;
