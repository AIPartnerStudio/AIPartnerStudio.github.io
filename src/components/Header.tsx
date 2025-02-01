import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/IMG/Ia png.PNG" alt="AI Partner" className="h-16 w-auto" />
          </div>

          {/* Enlaces de navegación desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-orange-500 transition-colors"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-600 hover:text-orange-500 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-orange-500 transition-colors"
            >
              Cómo Empezar
            </button>
            <button
              onClick={() => scrollToSection('help')}
              className="text-slate-600 hover:text-orange-500 transition-colors"
            >
              Ayuda
            </button>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Menú móvil expandido */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-orange-500 transition-colors"
              >
                Sobre Nosotros
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-slate-600 hover:text-orange-500 transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 hover:text-orange-500 transition-colors"
              >
                Cómo Empezar
              </button>
              <button
                onClick={() => scrollToSection('help')}
                className="text-slate-600 hover:text-orange-500 transition-colors"
              >
                Ayuda
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}