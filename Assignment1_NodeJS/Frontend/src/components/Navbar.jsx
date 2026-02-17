import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/abes.png'; // Make sure the path matches

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="ABES Logo" className="logo" />
      </div>
      <div className="nav-links">
        <Link to="/" className="link">Home</Link>
        <Link to="/work" className="link">Work</Link>
      </div>
    </nav>
  );
};

export default Navbar;