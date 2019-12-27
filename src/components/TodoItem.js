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
         <input type="checkbox" checked={this.props.item.completed} id={this.props.item.id} onChange={() => this.props.changeHandler(this.props.item.id)}/>
         <label style={this.props.item.completed ? completeStyles : null} for={this.props.item.id}>{this.props.item.name}</label>
      </div>
    )
  }
}

export default TodoItem