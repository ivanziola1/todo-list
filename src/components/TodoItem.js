import React from "react"

const TodoItem = (props) => {
  return(
    <div className="todo-item">
       <input type="checkbox" defaultChecked={props.item.completed} />
       <p>{props.item.name}</p>
    </div>
  )
}

export default TodoItem