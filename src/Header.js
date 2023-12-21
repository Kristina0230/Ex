// Header.js
import React from 'react';
import './Header.css';

const Header = ({ user }) => {
  return (
    <header>
      <h1>Usero App</h1>
      {user && <p>Current User: {user.name.first} {user.name.last}</p>}
    </header>
  );
};

export default Header;
