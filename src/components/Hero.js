import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Innovación Tecnológica<br />al Alcance de tu Empresa</h1>
        <p>En Tekrea, transformamos ideas en soluciones digitales poderosas</p>
        <a href="#contacto" className="hero-btn">Contáctanos</a>
      </div>
      <div className="hero-image">
        <img src="assets/logo.png" alt="Tekrea Logo" className="hero-image-large" />
        <img src="assets/logo2.png" alt="Orejas Logo" className="hero-image-small" />
      </div>
    </section>
  );
};

export default Hero;
