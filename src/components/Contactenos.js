import React, { useState, useEffect } from 'react';
import './Contactenos.css';
import { MapPin, Phone, Mail } from 'lucide-react';
import axios from 'axios';  // Importa Axios

const Contactenos = () => {
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
    <section className="contactenos">
      <div className="gradient-section">
        <div className="contactenos-header">
          <h2>{contactData.contactTitle}</h2>
          <p>{contactData.contactDescription}</p>
        </div>
        <div className="map-container">
          <iframe
            src={mapIframe}  // Aquí debes usar la URL sin las comillas dobles
            width="600"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación"
          />
        </div>
      </div>

      <div className="contact-info">
        <div className="info-item">
          <MapPin size={24} className="info-icon" />
          <h3>{contactData.contactAddress}</h3>
          <p>{contactData.addressDescription}</p>
        </div>
        <div className="info-item">
          <Phone size={24} className="info-icon" />
          <h3>{contactData.contactPhone}</h3>
          <p>{contactData.phoneDescription}</p>
        </div>
        <div className="info-item">
          <Mail size={24} className="info-icon" />
          <h3>{contactData.contactEmail}</h3>
          <p>{contactData.emailDescription}</p>
        </div>
      </div>

      <div className="social-media">
        <img src="assets/contact.png" alt="Imagen de contacto" className="contact-image" />
        <div>
          <h2>Síguenos en:</h2>
          <div className="social-media-links">
            <div className="social-item">
              <a href={contactData.socialUrl1} target="_blank" rel="noopener noreferrer">
                <img src="assets/facebook.png" alt={contactData.socialTitle1} />
                <p>{contactData.socialTitle1}</p>
              </a>
            </div>
            <div className="social-item">
              <a href={contactData.socialUrl2} target="_blank" rel="noopener noreferrer">
                <img src="assets/instagram.png" alt={contactData.socialTitle2} />
                <p>{contactData.socialTitle2}</p>
              </a>
            </div>
            <div className="social-item">
              <a href={contactData.socialUrl3} target="_blank" rel="noopener noreferrer">
                <img src="assets/x.png" alt={contactData.socialTitle3} />
                <p>{contactData.socialTitle3}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactenos;
