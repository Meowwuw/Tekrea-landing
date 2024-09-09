import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Hamburguesa clickeada'); // Para verificar si el evento está funcionando
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="assets/logo.png" alt="Tekrea Logo" />
        <h1>Tekrea</h1>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contáctenos</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
