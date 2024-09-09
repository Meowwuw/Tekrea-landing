import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MisionVision from './components/MisionVision';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MisionVision />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;