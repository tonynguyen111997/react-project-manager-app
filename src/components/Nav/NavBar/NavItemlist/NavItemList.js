import React from 'react';

import './NavItemList.css';

import NavItem from './NavItem/NavItem';

const NavItemList = () =>{
  return (
    <ul className="nav__item-list">
      <NavItem itemName="Btn 1"/>
      <NavItem itemName="Btn 2"/>
      <NavItem itemName="Btn 3"/>
      <NavItem itemName="Login"/>
    </ul>
  );
}

export default NavItemList;