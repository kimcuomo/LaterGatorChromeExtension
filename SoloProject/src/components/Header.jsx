import React from 'react';
import '../header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="appHeader">
      <img src={logo} alt="Logo" className="appLogo" />
      <h1>Couch Potato</h1>
      <h2>Pass the remote</h2>
    </header>
  );
};

export default Header;