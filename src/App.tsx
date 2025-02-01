import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AutomatizacionInteligente from './components/AutomatizacionInteligente';
import Help from './components/Help';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import { BackgroundBlur } from './components/BackgroundBlur';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="automatizacion">
          <AutomatizacionInteligente />
        </div>
        <div id="testimonial">
          <Testimonial />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="help">
          <Help />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;