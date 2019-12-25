import React from "react"

class TodoItem extends React.Component {
  render(){
    return(
      <div className="todo-item">
         <input type="checkbox" defaultChecked={this.props.item.completed} />
         <p>{this.props.item.name}</p>
      </div>
    )
  }
}

export default TodoItem