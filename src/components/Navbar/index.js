import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>
        <h1>Logo here</h1>
      </Link>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/create'>New Blog</Link>
      </div>
    </div>
  );
}

export default Navbar;
