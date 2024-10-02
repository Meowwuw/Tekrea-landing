import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Hero.css';

const Hero = () => {
  const [heroTitle, setHeroTitle] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [heroButtonText, setHeroButtonText] = useState('');
  const [heroImage, setHeroImage] = useState('');

  // Cargar los datos del hero desde la API
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await axios.get('https://tekrea-backend-255659019198.us-central1.run.app/api/hero');
        const { title, description, buttonText, image } = response.data;
        setHeroTitle(title);
        setHeroDescription(description);
        setHeroButtonText(buttonText);
        setHeroImage(image);  // Actualizamos solo la imagen principal
      } catch (error) {
        console.error('Error al obtener los datos del Hero:', error);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{heroTitle || "Innovación Tecnológica al Alcance de tu Empresa"}</h1>
        <p>{heroDescription || "En Tekrea, transformamos ideas en soluciones digitales poderosas"}</p>
        <a href="#contacto" className="hero-btn">{heroButtonText || "Contáctanos"}</a>
      </div>
      <div className="hero-image">
        {/* Imagen principal dinámica */}
        <img 
          src={heroImage || 'assets/logo.png'}  
          alt="Tekrea Logo" 
          className="hero-image-large" 
        />
        <img 
          src="assets/logo2.png" 
          alt="Orejas Logo" 
          className="hero-image-small" 
        />
      </div>
    </section>
  );
};

export default Hero;
