import React, { useState, useEffect } from 'react';
import { Shield, Code, Cloud, FileText } from 'lucide-react';
import axios from 'axios';
import './Servicios.css';

const ServiceCard = ({ icon: Icon, title, color }) => (
  <div className="service-card" style={{ backgroundColor: color }}>
    <Icon className="mb-4" size={24} />
    <h2 className="text-xl font-bold mb-2">{title}</h2>
  </div>
);

const Servicios = () => {
  const [services, setServices] = useState([]);

  // Fetch services data from backend
  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await axios.get('https://tekrea-backend-255659019198.us-central1.run.app/api/services');
        const servicesData = response.data.services;

        const mappedServices = servicesData.map((service) => {
          let icon;
          switch (service.title.toLowerCase()) {
            case 'ciberseguridad':
              icon = Shield;
              break;
            case 'fábrica de software':
              icon = Code;
              break;
            case 'cloud':
              icon = Cloud;
              break;
            case 'consultorías':
              icon = FileText;
              break;
            default:
              icon = FileText; 
          }
          return { ...service, icon };
        });

        setServices(mappedServices);
      } catch (error) {
        console.error('Error al obtener los servicios', error);
      }
    };

    fetchServicios();
  }, []);

  const colors = ['#F71973', '#2CBFBF', '#3E2956', '#AD326D']; 

  return (
    <section className="servicios">
      <div className="service-cards">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            color={colors[index % colors.length]}
          />
        ))}
      </div>
    </section>
  );
};

export default Servicios;
