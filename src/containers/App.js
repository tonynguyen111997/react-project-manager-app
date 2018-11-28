import React, { Component } from 'react';
import './App.css';

//components
import Nav from '../components/Nav/Nav';
import Login from '../components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Login />
      </div>
    );
  }
}

export default App;
