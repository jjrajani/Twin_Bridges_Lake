import React, { Component } from 'react';
import { Login } from '../';

const Header = ({ styles }) => {
  return (
    <div id={`header`} className={`${styles}`}>
      <h1 className="logo">Twin Bridges Lake</h1>
      <Login />
    </div>
  );
};

export default Header;
