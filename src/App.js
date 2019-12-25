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
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(id) {
    this.setState(prevState => {
      const updatedItems = prevState.items.map(item => {
        if (item.id === id){
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })

      return {
        items: updatedItems
      }
    })
  }
  
  render(){
    const todoItems = this.state.items.map((item) => {
      return <TodoItem item={item} changeHandler={this.changeHandler} key={item.id}/>
    })

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
