import React from 'react';

import './NavBar.css';

//components
import NavTitle from './NavTitle/NavTitle';
import NavItemlist from './NavItemlist/NavItemList';

const NavBar = () => {
  return (
    <div className = "nav__navbar">
      <NavTitle title="Project" />
      <NavItemlist />
    </div>
  );
}

export default NavBar;