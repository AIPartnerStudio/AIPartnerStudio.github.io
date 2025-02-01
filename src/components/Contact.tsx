import { motion } from 'framer-motion';
import { Send, User, Phone, Mail, ArrowRight, Building2 } from 'lucide-react';
import "../styles/fonts.css";

export default function Contact() {
  return (
    <div className="py-24 bg-white font-fit relative overflow-hidden">
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-orange-400/5 to-red-400/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-orange-400/5 to-red-400/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna Izquierda - Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-50 text-orange-500 mb-8">
              <ArrowRight className="w-5 h-5 mr-2" />
              Comienza Ahora
            </div>

            <h2 className="text-4xl md:text-5xl font-[500] tracking-tight text-slate-900 mb-6">
              ¿Listo para llevar tu negocio{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text font-bold">
                al siguiente nivel?
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-8 font-[400] leading-relaxed">
              Déjanos tus datos para organizar tu evaluación gratuita y ver cómo nuestras soluciones pueden impulsar tu éxito.
            </p>

            {/* Lista de beneficios */}
            <div className="space-y-4 mb-12">
              {[
                'Evaluación personalizada de tu negocio',
                'Plan de automatización a medida',
                'ROI estimado de la implementación',
                'Consultoría inicial sin costo'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center text-slate-700"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center mr-3">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  {benefit}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Columna Derecha - Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <form className="space-y-6">
              {/* Campo Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-orange-400" />
                    Nombre
                  </div>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400 transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Campo Número */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-orange-400" />
                    Número
                  </div>
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400 transition-colors"
                  placeholder="Tu número de contacto"
                />
              </div>

              {/* Campo Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-orange-400" />
                    Correo electrónico
                  </div>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400 transition-colors"
                  placeholder="Tu correo electrónico"
                />
              </div>

              {/* Campo Empresa */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 mr-2 text-orange-400" />
                    Empresa
                  </div>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400 transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              {/* Botón Enviar */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/51991281972?text=Hola+AIPartner,+estoy+interesado+en+su+servicio:', '_blank')}
                className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white py-4 px-6 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Enviar</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 