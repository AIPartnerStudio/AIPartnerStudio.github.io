import { motion } from 'framer-motion';
import { Bot, ArrowRight } from 'lucide-react';
import "../styles/fonts.css";

export default function Testimonial() {
  return (
    <div className="py-24 bg-gray-50 font-fit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Columna Izquierda - Imagen/Ilustración */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/IMG/servic.svg"
              alt="AI Services Illustration"
              className="w-full h-auto"
            />
            
            {/* Círculos decorativos */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-gradient-to-r from-orange-400/10 to-red-400/10 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-r from-orange-400/10 to-red-400/10 -z-10" />
          </motion.div>

          {/* Columna Derecha - Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge actualizado */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-50 text-orange-500 mb-8">
              <Bot className="w-5 h-5 mr-2" />
              Optimiza
            </div>

            {/* Título */}
            <h2 className="text-4xl md:text-5xl font-[500] tracking-tight text-slate-900 mb-6">
              Revoluciona tu Negocio con{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text font-bold">
                IA
              </span>
            </h2>

            {/* Descripción */}
            <p className="text-xl text-slate-600 mb-12 font-[400] leading-relaxed">
              Revolucione las tareas, reduzca los errores y aumente la eficacia con tecnología inteligente, agilizando las operaciones para lograr una productividad sin precedentes. Con nuestra solución de automatización basada en IA, optimiza tus procesos, minimiza costos y lleva tu negocio al siguiente nivel.
            </p>

            {/* Testimonial actualizado con la imagen correcta */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-lg text-slate-600 italic mb-6">
                "Con la ayuda de AI Partner, logramos automatizar varios procesos clave en nuestro ecommerce. Desde implementar un agente de ventas automático hasta escalar nuestras operaciones, su tecnología ha sido fundamental para nuestro crecimiento."
              </p>
              <div className="flex items-center">
                <img
                  src="/IMG/alegrated.jpg"
                  alt="Alegrated Logo"
                  className="w-12 h-12 mr-4 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-slate-900 font-medium">Jefferson Sánchez</h4>
                  <p className="text-slate-500 text-sm">
                    CEO de ALEGRÍA, la tienda de peluches más grande de Latinoamérica
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 inline-flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              <span>Descubre cómo optimizar tu negocio</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 