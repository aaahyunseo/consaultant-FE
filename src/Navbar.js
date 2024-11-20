import React from 'react';
import './Navbar.css';

function Navbar({ onNavigateHome }) {
  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={onNavigateHome}>
        AI 면접 컨설턴트
      </div>
      <button className="navbar-home" onClick={onNavigateHome}>
        Home
      </button>
    </div>
  );
}

export default Navbar;
