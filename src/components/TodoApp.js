import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ToDoList from './TodoList';

class ToDoApp extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      todoValue: ''
    }

    this.toggleTodo = this.toggleTodo.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addTodo(this.state.todoValue)
    this.setState({todoValue: ''})
  }
  
  handleTodoChange(e) {
    this.setState({todoValue: e.target.value})
  }

  toggleTodo(idx) {
    console.log('toggling')
    this.props.toggleTodo(idx)
  }

  render() {
    const {todos} = this.props
    return (
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="box m-auto">
            <h4 className="title is-4">My ToDo List</h4>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className="field has-addons">
                <div className="control">
                  <input className="input"
                          type="text" 
                          placeholder="Add a todo item..." 
                          onChange={(e) => this.handleTodoChange(e)}
                            value={this.state.todoValue} />
                </div>
                <div className="control">
                  <button className="button is-primary" type="submit">
                    Add
                  </button>
                  </div>
              </div>
            </form>
            <ToDoList todos={todos} toggleTodo={this.toggleTodo} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch({type: 'ADD_TODO', todoText: text}),
  toggleTodo: (idx) => dispatch({type: 'TOGGLE_TODO', idx: idx})
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp)