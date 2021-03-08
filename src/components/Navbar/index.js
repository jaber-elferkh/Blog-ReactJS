import React from 'react';
import './styles.scss';

function Navbar() {
  return (
    <div className="navbar">
      <h1>Logo here</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </div>
  );
}

export default Navbar;
