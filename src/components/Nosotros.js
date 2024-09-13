import React from "react";
import "./Nosotros.css";

const Nosotros = () => {
  return (
   
    <section className="nosotros">
       <div className="nosotros-right"></div>

      <div className="about-us-image">
        <img src="assets/Equipo.jpeg" alt="Sobre nosotros" />
      </div>

      <div className="about-us-content">
        <div className="about-us-text-title">
          <h2>Sobre Nosotros</h2>
        </div>
        <div className="about-us-text">
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets.
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

      <div className="nosotros-left"></div>
    </section>
  );
};

export default Nosotros;
