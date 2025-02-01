import { motion } from 'framer-motion';
import { Mail, Instagram, ArrowRight, Shield, FileText, HelpCircle, Users, Wrench, Rocket, MessageCircle } from 'lucide-react';
import "../styles/fonts.css";

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-16 font-fit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Columna 1 - Logo e info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <img src="/IMG/Ia png.PNG" alt="AI Partner Studio" className="h-16 w-auto" />
            <p className="text-slate-600 leading-relaxed">
              Transformando empresas con inteligencia artificial y automatización.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:aipartnerstudio@gmail.com"
                className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 hover:bg-orange-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/aipartnerstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 hover:bg-orange-100 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Columna 2 - Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-orange-500" />
              Empresa
            </h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-slate-600 hover:text-orange-500 transition-colors flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-slate-600 hover:text-orange-500 transition-colors flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-600 hover:text-orange-500 transition-colors flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Cómo Empezar
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Columna 3 - Soporte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-orange-500" />
              Soporte
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:aipartnerstudio@gmail.com"
                  className="text-slate-600 hover:text-orange-500 transition-colors flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/bazanjuan25/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-orange-500 transition-colors flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  CEO Instagram
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Columna 4 - Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-orange-500" />
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="/privacidad" className="text-slate-600 hover:text-orange-500 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="text-slate-600 hover:text-orange-500 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Términos
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-100 mt-12 pt-8 text-center text-slate-600"
        >
          <p>&copy; {new Date().getFullYear()} AI Partner Studio. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}