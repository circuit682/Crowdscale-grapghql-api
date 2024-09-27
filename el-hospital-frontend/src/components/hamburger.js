import React, { useState } from 'react';
import './navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-brand">
        <h2>El-Hospital</h2>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#minted">Minted</a>
        <a href="#transfers">Transfers</a>
        <a href="#upgrades">Upgrades</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
