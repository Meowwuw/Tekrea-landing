import React, { useState, useEffect } from 'react';
import './MisionVision.css';
import axios from 'axios'; 

const MisionVision = () => {
  const [mision, setMision] = useState('');
  const [vision, setVision] = useState('');

  useEffect(() => {
    // Función para obtener los datos de misión y visión
    const fetchMisionVision = async () => {
      try {
        const response = await axios.get('https://tekrea-backend-255659019198.us-central1.run.app/api/hero'); 
        setMision(response.data.mision);  
        setVision(response.data.vision);  
      } catch (error) {
        console.error('Error al obtener los datos de Misión y Visión:', error);
      }
    };

    fetchMisionVision();  // Función para obtener los datos
  }, []);

  return (
    <section className="mision-vision">
      <div className="container">
        <div className="mision">
          <h2>Nuestra Misión</h2>
          <p>{mision}</p>  
        </div>
        <div className="vision">
          <h2>Nuestra Visión</h2>
          <p>{vision}</p>  
        </div>
      </div>
    </section>
  );
};

export default MisionVision;
