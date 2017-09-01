import React from 'react';
// import { Login } from '../';
// <Login />
const Header = ({ styles }) => {
  return (
    <div id={`header`} className={`${styles}`}>
      <h1 className="logo">Twin Bridges Lake</h1>
    </div>
  );
};

export default Header;
