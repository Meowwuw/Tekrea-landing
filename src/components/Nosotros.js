import React from "react";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div className="servicios-vista-wrapper">
      <div className="decorative-rabbit-nosotros top-right"></div>
      <section className="servicios-vista">

      <div className="about-us-image">
        <img src="assets/Equipo.jpeg" alt="Sobre nosotros" />
      </div>
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

      <div className="our-team">
        <h2>Nuestro Equipo</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="assets/equipo1.png" alt="Miembro del equipo" />
          </div>
          <div className="team-member">
            <img src="assets/equipo2.png" alt="Miembro del equipo" />
          </div>
          <div className="team-member">
            <img src="assets/equipo3.png" alt="Miembro del equipo" />
          </div>
        </div>
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
    </section>
    <div className="decorative-rabbit-nosotros bottom-left"></div>
    </div>
  );
};

export default Nosotros;
