import React from 'react';
import './Header.css';
import holbertonLogo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <div className="App-header">
      <img src={holbertonLogo} className="App-logo" alt="Holberton logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
