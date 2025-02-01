import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import "../styles/fonts.css";

export default function About() {
  return (
    <div className="py-24 bg-white font-fit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge de Sobre Nosotros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-start mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50/80 backdrop-blur-sm">
            <User className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-500 font-medium">Sobre Nosotros</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-[500] tracking-tight text-slate-900 mb-6">
              Liderando la{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text font-bold">
                Transformación Digital
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 font-[400] leading-relaxed">
              Somos una StartUp líder en soluciones de automatización impulsadas por inteligencia artificial. Ayudamos a las empresas e-Commerce a ahorrar tiempo, maximizar la eficiencia, escalar su negocio y aumentar la satisfacción del cliente.
            </p>

            {/* Botón actualizado con scroll suave */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              <span>Conoce Más</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Equipo trabajando"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
            
            {/* Círculos decorativos */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-gradient-to-r from-orange-400/10 to-red-400/10 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-r from-orange-400/10 to-red-400/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}