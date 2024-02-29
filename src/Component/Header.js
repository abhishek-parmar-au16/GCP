// Header.js

import React from 'react';
import "./Header.css"
function Header({ currentPage }) {
  return (
    <header>
      <h1>{currentPage.toUpperCase()} Page</h1>
    </header>
  );
}

export default Header;
