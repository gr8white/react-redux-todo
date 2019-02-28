import React, { Component } from 'react';
import '../styles/App.css';

import ToDoApp from './TodoApp.js'
import Navbar from './NavBar.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="page-wrapper">
          <ToDoApp />
        </div>
      </React.Fragment>
      
    );
  }
}

export default App;
