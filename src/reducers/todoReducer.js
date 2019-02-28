const initialState = {
  todos: []
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { 
        todos: [
          ...state.todos,
          {
            text: action.todoText,
            done: false
          }
        ]
      }
    
    case 'TOGGLE_TODO':
      const newTodos = state.todos.slice()
      newTodos[action.idx].done = !newTodos[action.idx].done 
      return {
        todos: newTodos
      }

    default: return state
  }
}

export default todoReducer