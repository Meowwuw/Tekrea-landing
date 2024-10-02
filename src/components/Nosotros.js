import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Nosotros.css";
import { CheckCircle, Heart, Shield, Lightbulb, RefreshCcw, Award } from 'lucide-react'; // Importar iconos

const Nosotros = () => {
  const [aboutData, setAboutData] = useState({ title: "", text: "", values: [] });

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('https://tekrea-backend-255659019198.us-central1.run.app/api/about'); // Asegúrate de que la URL esté correcta
        setAboutData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos de Sobre Nosotros:", error);
      }
    };

    fetchAboutData();
  }, []);  // El array vacío asegura que la solicitud solo se haga una vez, cuando el componente se monte

  // Asocia cada valor con su icono correspondiente
  const iconMapping = {
    Eficiencia: <CheckCircle size={32} color="#F71973" />,
    Pasión: <Heart size={32} color="#2CBFBF" />,
    Integridad: <Shield size={32} color="#3E2956" />,
    Innovación: <Lightbulb size={32} color="#F71973" />,
    Adaptación: <RefreshCcw size={32} color="#2CBFBF" />,
    Compromiso: <Award size={32} color="#3E2956" />,
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
            <h2>{aboutData.title || "Sobre Nosotros"}</h2> {/* Muestra el título obtenido de la API */}
          </div>
          <div className="servicio-text">
            <p>{aboutData.text || "Texto predeterminado de ejemplo..."}</p> {/* Muestra el texto obtenido de la API */}
          </div>
        </div>

        <section className="valores-section">
          <h2 className="valores-header">Nuestros Valores</h2>
          <div className="valores-grid">
            {aboutData.values.map((valor, index) => (
              <div className="valor-card" key={index}>
                {iconMapping[valor.title] || <CheckCircle size={32} />}  {/* Icono dinámico */}
                <h3>{valor.title}</h3>
                <p>{valor.description}</p>
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
