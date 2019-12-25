import React, {Component} from "react"

class TodoItem extends Component {

  render(){
    return(
      <div className="todo-item">
         <input type="checkbox" checked={this.props.item.completed} onChange={() => this.props.changeHandler(this.props.item.id)}/>
         <p>{this.props.item.name}</p>
      </div>
    )
  }
}

export default TodoItem