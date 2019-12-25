import React, {Component} from 'react'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import itemsData from './itemsData'

import './Header.css'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = { items: itemsData }
  }
  
  render(){
    const todoItems = this.state.items.map((item) => <TodoItem item={item} key={item.id}/>)

    return (
      <div className="App">
        <Header/>

        <div className="todo-list">
          {todoItems}
        </div>
      </div>
    );
  }
}

export default App
