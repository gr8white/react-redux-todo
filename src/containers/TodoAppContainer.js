import React, { Component } from 'react'
import { connect } from 'react-redux';

// Container definition:

class TodoAppContainer extends Component {
  
  addTodo() {
    this.props.addTodo('homework')
  }
  
  render() {
    console.log('props', this.props)
    return (
      <div>
        Boom it works
        <button onClick={() => this.addTodo()}>Add Todo</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ //Take data from my store (state) and use it as a prop
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todoText) => dispatch({type: 'ADD_TODO', text: todoText})
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoAppContainer) // Connect returns a function and the result (which is a functions) recieves TodoAppContainer as 

