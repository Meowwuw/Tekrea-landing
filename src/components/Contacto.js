import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contacto.css';
import axios from 'axios';

const Contacto = () => {
  const [contactData, setContactData] = useState(null); // Estado para almacenar los datos de contacto

  // Obtener los datos de contacto desde la API
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get('https://tekrea-backend-255659019198.us-central1.run.app/api/contact'); // Cambia el URL según corresponda
        setContactData(response.data); // Actualiza el estado con los datos obtenidos
        console.log('Datos de contacto:', response.data); // Mostrar en consola los datos
      } catch (error) {
        console.error('Error al obtener los datos de contacto:', error);
      }
    };

    fetchContactData(); // Llamar a la función para obtener los datos
  }, []);

  // Si aún no hay datos, muestra un mensaje de carga
  if (!contactData) {
    return <div>Cargando datos de contacto...</div>;
  }

  // Eliminar las comillas dobles adicionales en mapIframe
  const mapIframe = contactData.mapIframe.replace(/['"]+/g, '');

  return (
    <section className="contacto" id="contacto">
      <div className="contacto-info">
        <h3 className="contact-title">{contactData.contactTitle}</h3>
        <p className="contact-description">{contactData.contactDescription}</p>
        <div className="contact-details">
          <div className="contact-item">
            <MapPin className="contact-icon" size={24} />
            <span>{contactData.contactAddress}</span>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon" size={24} />
            <span>{contactData.contactPhone}</span>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" size={24} />
            <span>{contactData.contactEmail}</span>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src={mapIframe}  // Aquí debes usar la URL sin las comillas dobles
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
