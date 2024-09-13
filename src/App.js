import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MisionVision from './components/MisionVision';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';
import ServiciosVista from './components/ServiciosVista';
import Contactenos from './components/Contactenos';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MisionVision />
                <Servicios />
                <Contacto />
              </>
            }
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<ServiciosVista />} />
          <Route path="/contactenos" element={<Contactenos/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
