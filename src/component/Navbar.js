import React from 'react';
import './Navbar.css';

function Navbar() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={handleReload}>
        AI 면접 컨설턴트
      </div>
      <button className="navbar-home" onClick={handleReload}>
        Home
      </button>
    </div>
  );
}

export default Navbar;
