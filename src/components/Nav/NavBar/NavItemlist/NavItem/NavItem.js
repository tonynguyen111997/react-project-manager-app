import React from 'react';

import './NavItem.css';

const NavItem = ({ itemName }) => {
  return (
    <li className="nav__items">
      <a href="#">{itemName}</a>
    </li>
  );
}

export default NavItem;