import React from 'react';
import './Contactenos.css';
import { MapPin, Phone, Mail } from 'lucide-react'; // Iconos para contacto

const Contactenos = () => {
  return (
    <section className="contactenos">
      <div className="contactenos-header">
        <h2>Ubícanos</h2>
        <p>
          Si tienes alguna pregunta o deseas más información sobre nuestros
          servicios, no dudes en ponerte en contacto con nosotros.
        </p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31580.20985450101!2d-74.62666087657053!3d-8.349779581933221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a399896dd71a17%3A0x50c58850eb6bbd46!2sBUFEO&#39;S%20CLUB!5e0!3m2!1ses-419!2spe!4v1725496436049!5m2!1ses-419!2spe"
          width="600"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación"
        ></iframe>
      </div>
      <div className="contact-info">
        <div className="info-item">
          <MapPin size={24} className="info-icon" />
          <h3>Calle Ejemplo 123, Ciudad Ejemplo</h3>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting.</p>
        </div>
        <div className="info-item">
          <Phone size={24} className="info-icon" />
          <h3>+51 987 456 321</h3>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting.</p>
        </div>
        <div className="info-item">
          <Mail size={24} className="info-icon" />
          <h3>info@tekrea.com</h3>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting.</p>
        </div>
      </div>
      <div className="social-media">
        <h2>Síguenos en:</h2>
        <div className="social-media-links">
          <div className="social-item">
            <img src="assets/facebook-icon.png" alt="Facebook" />
            <p>Tekrea</p>
          </div>
          <div className="social-item">
            <img src="assets/instagram-icon.png" alt="Instagram" />
            <p>@Tekrea</p>
          </div>
          <div className="social-item">
            <img src="assets/twitter-icon.png" alt="Twitter" />
            <p>@Tekrea</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactenos;
