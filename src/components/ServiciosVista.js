import React from "react";
import "./ServiciosVista.css";
import { Code, Smartphone, Cloud } from 'lucide-react';


const ServiceCard = ({ icon: Icon, title, description, color }) => (
    <div className={`servicio-card rounded-lg p-6 text-white ${color}`}>
      <Icon size={24} className="mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
  
const ServiciosVista = () => {
  return (
    <section className="servicios-vista">
      <div className="servicios-right"></div>

      <div className="servicios-grid">
        <div className="servicios-header">
          <h2>Nuestros Servicios</h2>
        </div>
        <div className="servicio-text">
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s
          </p>
          <p>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
        </div>
      </div>

      
      <div className="servicios-section">
          <div className="servicio-text">
            <p>
              is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s.
            </p>
            <p>
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>
          </div>
          <ServiceCard
            icon={Code}
            title="Desarrollo web"
            description="Creamos sitios web y aplicaciones a medida para impulsar tu negocio."
            color="bg-pink-500"
          />
        </div>

        <div className="servicios-section">
          <ServiceCard
            icon={Smartphone}
            title="Desarrollo móvil"
            description="Desarrollamos aplicaciones móviles nativas e híbridas para Android e iOS."
            color="bg-teal-500"
          />
          <div className="servicio-text">
            <p><strong>is simply dummy text of the printing and typesetting industry.</strong></p>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting.</p>
          </div>
        </div>

        <div className="servicios-section">
          <div className="servicio-text">
            <p><strong>is simply dummy text of the printing and typesetting industry.</strong></p>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </div>
          <ServiceCard
            icon={Cloud}
            title="Servicios en la nube"
            description="Ofrecemos soluciones de alojamiento, infraestructura y plataformas en la nube."
            color="bg-indigo-700"
          />
        </div>

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
      <div className="servicios-left"></div>
    </section>
  );
};

export default ServiciosVista;
