import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Nosotros.css";
import { CheckCircle, Heart, Shield, Lightbulb, RefreshCcw, Award } from 'lucide-react'; 

const Nosotros = () => {
  const [aboutData, setAboutData] = useState({ title: "", text: "", values: [] });

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('https://tekrea-backend-255659019198.us-central1.run.app/api/about');
        setAboutData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos de Sobre Nosotros:", error);
      }
    };

    fetchAboutData();
  }, []);

  const iconMapping = {
    Eficiencia: <CheckCircle size={32} color="#fff" />,
    Pasión: <Heart size={32} color="#fff" />,
    Integridad: <Shield size={32} color="#fff" />,
    Innovación: <Lightbulb size={32} color="#fff" />,
    Adaptación: <RefreshCcw size={32} color="#fff" />,
    Compromiso: <Award size={32} color="#fff" />,
  };

  return (
    <div className="servicios-vista-wrapper">
      <div className="decorative-rabbit-nosotros top-right"></div>
      <section className="servicios-vista">
        <div className="about-us-image">
          <img src="assets/Equipo.jpeg" alt="Sobre nosotros" />
        </div>

        <div className="servicios-grid">
          <div className="servicios-header">
            <h2>{aboutData.title || "Sobre Nosotros"}</h2> 
          </div>
          <div className="servicio-text">
            <p>{aboutData.text || "Texto predeterminado de ejemplo..."}</p> 
          </div>
        </div>

        <section className="valores-section">
          <h2 className="valores-header">Nuestros Valores</h2>
          <div className="valores-grid">
            {aboutData.values.map((valor, index) => (
              <div className="valor-card" key={index}>
                <div className="valor-front">
                  {iconMapping[valor.title] || <CheckCircle size={32} />} 
                  <h3>{valor.title}</h3>
                </div>
                <div className="valor-back">
                  <p>{valor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="cta">
          <h2>Empieza tu proyecto con nosotros</h2>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book.
          </p>
          <a href="#contacto" className="cta-btn">
            Contáctanos
          </a>
        </div>
      </section>
      <div className="decorative-rabbit-nosotros bottom-left"></div>
    </div>
  );
};

export default Nosotros;
