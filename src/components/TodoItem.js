import React from 'react'

const ToDoItem = ({text, idx, toggle, done}) => {

  return (
    <li onClick={() => toggle(idx)} 
      style={{textDecoration: done ? 'line-through' : 'none'}}>
      {text}
    </li>
  )
}

export default ToDoItem