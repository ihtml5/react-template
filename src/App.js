import React, { Component } from 'react';
import './App.css';
import { view as Todo } from './todos';
import { view as Filter } from './filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo/>
        <Filter/>
      </div>
    );
  }
}

export default App;
