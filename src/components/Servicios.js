
import React from 'react';
import { Code, Smartphone, Cloud } from 'lucide-react';
import './Servicios.css';

const ServiceCard = ({ icon: Icon, title, description, color }) => (
  <div className="service-card" style={{ backgroundColor: color }}>
    <Icon className="mb-4" size={24} />
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-sm">{description}</p>
  </div>
);

const Servicios = () => (
  <section className="servicios">
    <div className="service-cards">
      <ServiceCard
        icon={Code}
        title="Desarrollo Web"
        description="Creamos sitios web y aplicaciones a medida para impulsar tu negocio."
        color="#F71973"  
      />
      <ServiceCard
        icon={Smartphone}
        title="Desarrollo Móvil"
        description="Desarrollamos aplicaciones móviles nativas e híbridas para Android e iOS."
        color="#2CBFBF"  
      />
      <ServiceCard
        icon={Cloud}
        title="Servicios en la Nube"
        description="Ofrecemos soluciones de alojamiento, infraestructura y plataformas en la nube."
        color="#3E2956" 
      />
    </div>
  </section>
);

export default Servicios;
