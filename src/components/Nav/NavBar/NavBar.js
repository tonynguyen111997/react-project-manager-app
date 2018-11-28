import React from 'react';

import './NavBar.css';

import NavItemlist from './NavItemlist/NavItemList';

const NavBar = () => {
  return (
    <div className = "nav__navbar">
      <NavItemlist />
    </div>
  );
}

export default NavBar;