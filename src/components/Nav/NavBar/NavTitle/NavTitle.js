import React from 'react';

import './NavTitle.css';

const NavTitle = ({ title }) => {
  return (
    <div className="nav__title-container">
      <h1>{title}</h1>
    </div>
  );
}

export default NavTitle;