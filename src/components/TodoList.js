import React, { Component } from 'react'

import ToDoItem from './TodoItem'


class ToDoList extends Component {
  constructor(props) {
    super(props)
    
    this.state = { }
  }

  render() {
    return (
      <div className="content">
        <ul>
            {this.props.todos.map((todo, idx) => 
            <ToDoItem key={idx} idx={idx} done={todo.done} toggle= {this.props.toggleTodo} text={todo.text}/>)}
        </ul>
      </div>
    )
  }
}

export default ToDoList