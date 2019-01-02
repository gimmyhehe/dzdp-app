import React, { Component } from 'react';
import Home from './pages/Home/index.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          this is header
        </header>
        <Home></Home>
      </div>
    );
  }
}

export default App;
