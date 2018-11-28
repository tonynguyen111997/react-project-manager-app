import React, { Component } from 'react';

import NavBar from './NavBar/NavBar';

import './Nav.css';

class Nav extends Component{
  render(){
    return (
      <header>
        <nav className="nav">
          <NavBar />
        </nav>
      </header>
    );
  }
}

export default Nav;