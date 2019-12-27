import React, {Component} from "react"

class TodoItem extends Component {

  render(){
    const completeStyles = {
      textDecoration: 'line-through',
      fontStyle: 'italic',
      color: "#cdcdcd"
    }

    return(
      <div className="todo-item">
         <input type="checkbox" checked={this.props.item.completed} onChange={() => this.props.changeHandler(this.props.item.id)}/>
         <p style={this.props.item.completed ? completeStyles : null}>{this.props.item.name}</p>
      </div>
    )
  }
}

export default TodoItem