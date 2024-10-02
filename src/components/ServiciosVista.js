import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Shield, Code, Cloud, FileText } from 'lucide-react'; // Icons
import { motion, AnimatePresence } from 'framer-motion'; // Animation
import axios from 'axios'; // Para hacer peticiones HTTP
import './ServiciosVista.css'; // Import your styles

// Component for each expandable service
function ServicioExpandible({ servicio }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setExpandido(!expandido)}
        className="flex items-center justify-between w-full p-4 text-left bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        <div className="flex items-center">
          {servicio.icono}
          <span className="ml-3 text-lg font-medium">{servicio.title}</span>
        </div>
        {expandido ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {expandido && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 p-4 bg-gray-50 rounded-lg"
          >
            {/* Asegúrate de que servicio.subtitles existe y es un array */}
            {Array.isArray(servicio.subtitles) && servicio.subtitles.length > 0 ? (
              servicio.subtitles.map((subtitle, index) => (
                <div key={index} className="mb-3">
                  <h3 className="font-medium text-primary">{subtitle.subtitle}</h3>
                  {subtitle.items.length > 0 && (
                    <ul className="mt-1 ml-4 list-disc list-inside">
                      {subtitle.items.map((subitem, subindex) => (
                        <li key={subindex} className="text-sm text-gray-600">{subitem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <p>No hay contenido disponible para este servicio.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Main component for services view
export default function ServiciosVista() {
  const [servicios, setServicios] = useState([]);
  const [servicesTitle, setServicesTitle] = useState('');
  const [servicesText, setServicesText] = useState('');

  // Fetch services data from backend
  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await axios.get('https://tekrea-backend-255659019198.us-central1.run.app/api/services');
        const servicesData = response.data;

        setServicesTitle(servicesData.servicesTitle);
        setServicesText(servicesData.servicesText);

        // Mapea los servicios para incluir íconos
        const mappedServices = servicesData.services.map((service) => {
          let icono;
          switch (service.title.toLowerCase()) {
            case 'ciberseguridad':
              icono = <Shield className="w-6 h-6" />;
              break;
            case 'fábrica de software':
              icono = <Code className="w-6 h-6" />;
              break;
            case 'cloud':
              icono = <Cloud className="w-6 h-6" />;
              break;
            case 'consultorías':
              icono = <FileText className="w-6 h-6" />;
              break;
            default:
              icono = <FileText className="w-6 h-6" />; // Por defecto si no coincide
          }
          return { ...service, icono };  // Agrega el ícono al objeto del servicio
        });

        setServicios(mappedServices);
      } catch (error) {
        console.error("Error al obtener los datos de servicios", error);
      }
    };

    fetchServicios();
  }, []);

  return (
    <div className="servicios-vista-wrapper">
      <div className="decorative-rabbit top-right"></div>
      <section className="servicios-vista">
        <h2 className="text-3xl font-bold text-center mb-8">{servicesTitle}</h2>
        
        {/* Texto introductorio de la sección de servicios */}
        <p className="text-center mb-8 text-lg text-gray-700">
          {servicesText}
        </p>

        <div className="max-w-3xl mx-auto">
          {servicios.map((servicio, index) => (
            <ServicioExpandible key={index} servicio={servicio} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="cta bg-gray-200 text-center py-12">
        <h2 className="text-2xl font-bold">Empieza tu proyecto con nosotros</h2>
        <p className="mt-4 text-gray-700">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <a href="#contacto" className="cta-btn mt-6 inline-block px-6 py-3 bg-primary text-white rounded-full">
          Contáctanos
        </a>
      </div>

      <div className="decorative-rabbit bottom-left"></div>
    </div>
  );
}
