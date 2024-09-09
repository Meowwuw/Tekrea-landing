import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/terminos" className="footer-link">Términos de servicios</a>
        <a href="/privacidad" className="footer-link">Políticas de privacidad</a>
      </div>
    </footer>
  );
};

export default Footer;