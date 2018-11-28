import React from 'react';

import './NavItemList.css';

import NavItem from './NavItem/NavItem';

const NavItemList = () =>{
  return (
    <ul>
      <NavItem itemName="Btn 1"/>
      <NavItem itemName="Btn 2"/>
      <NavItem itemName="Btn 3"/>
      <NavItem itemName="Btn 4"/>
    </ul>
  );
}

export default NavItemList;