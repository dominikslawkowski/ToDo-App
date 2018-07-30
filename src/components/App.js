import React, { Component } from 'react';
import '../App.css';
import ToDoList from '../containers/ToDo_List';
import CurrentTask from '../containers/CurrentTask';

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
        <CurrentTask />
      </div>
    );
  }
}

export default App;
