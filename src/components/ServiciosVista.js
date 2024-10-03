import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Shield, Code, Cloud, FileText } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import axios from 'axios'; 
import './ServiciosVista.css'; 

// Servicio expandible que recibe el color por props
function ServicioExpandible({ servicio, color }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setExpandido(!expandido)}
        className="flex items-center justify-between w-full p-4 text-left rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{ backgroundColor: color, borderColor: '#e5e5e5', color: 'white' }}
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 p-4 bg-gray-50 rounded-lg"
          >
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

export default function ServiciosVista() {
  const [servicios, setServicios] = useState([]);
  const [servicesTitle, setServicesTitle] = useState('');
  const [servicesText, setServicesText] = useState('');

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await axios.get('https://tekrea-backend-255659019198.us-central1.run.app/api/services');
        const servicesData = response.data;

        setServicesTitle(servicesData.servicesTitle);
        setServicesText(servicesData.servicesText);

        const mappedServices = servicesData.services.map((service) => {
          let icono, color;
          switch (service.title.toLowerCase()) {
            case 'ciberseguridad':
              icono = <Shield className="w-6 h-6" />;
              color = '#F71973'; // Color para Ciberseguridad
              break;
            case 'fábrica de software':
              icono = <Code className="w-6 h-6" />;
              color = '#2CBFBF'; // Color para Fábrica de Software
              break;
            case 'cloud':
              icono = <Cloud className="w-6 h-6" />;
              color = '#3E2956'; // Color para Cloud
              break;
            case 'consultorías':
              icono = <FileText className="w-6 h-6" />;
              color = '#AD326D'; // Color para Consultorías
              break;
            default:
              icono = <FileText className="w-6 h-6" />;
              color = '#AD326D'; // Color por defecto
          }
          return { ...service, icono, color };
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
        
        <p className="text-center mb-8 text-lg text-gray-700">
          {servicesText}
        </p>

        <div className="max-w-3xl mx-auto">
          {servicios.map((servicio, index) => (
            <ServicioExpandible key={index} servicio={servicio} color={servicio.color} />
          ))}
        </div>
      </section>

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
