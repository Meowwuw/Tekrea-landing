import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto" id="contacto">
      <div className="contacto-info">
        <h3 className="contact-title">Contáctanos</h3>
        <p className="contact-description">
          Si tienes alguna pregunta o deseas más información sobre nuestros
          servicios, no dudes en ponerte en contacto con nosotros.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <MapPin className="contact-icon" size={24} />
            <span>Calle Ejemplo 123, Ciudad Ejemplo</span>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon" size={24} />
            <span>+51 987 456 321</span>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" size={24} />
            <span>info@tekrea.com</span>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31580.20985450101!2d-74.62666087657053!3d-8.349779581933221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a399896dd71a17%3A0x50c58850eb6bbd46!2sBUFEO&#39;S%20CLUB!5e0!3m2!1ses-419!2spe!4v1725496436049!5m2!1ses-419!2spe"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contacto;
