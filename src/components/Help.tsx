import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight, HelpCircle } from 'lucide-react';
import "../styles/fonts.css";

export default function Help() {
  return (
    <div className="py-24 bg-white font-fit relative overflow-hidden">
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-orange-400/5 to-red-400/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-400/5 to-red-400/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge de Ayuda */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-50 text-orange-500"
          >
            <HelpCircle className="w-5 h-5 mr-2" />
            Ayuda
          </motion.div>
        </div>

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-[500] tracking-tight text-slate-900 mb-6">
            ¿Necesitas{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text font-bold">
              Ayuda
            </span>
            ?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-[400] leading-relaxed">
            Estamos aquí para ayudarte en cada paso. Contáctanos por cualquiera de estos medios.
          </p>
        </motion.div>

        {/* Tarjetas de contacto */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-[500] text-slate-900 mb-4">Email</h3>
            <p className="text-slate-600 mb-6">
              Envíanos un correo y te responderemos en breve.
            </p>
            <motion.a
              href="mailto:aipartnerstudio@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 text-orange-500 font-medium hover:text-red-500 transition-colors"
            >
              <span>Enviar Email</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* WhatsApp - Cambiamos el ícono a MessageCircle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-[500] text-slate-900 mb-4">WhatsApp</h3>
            <p className="text-slate-600 mb-6">
              Contáctanos por WhatsApp para atención inmediata.
            </p>
            <motion.a
              href="https://wa.me/51991281972?text=Hola+AIPartner,+estoy+interesado+en+su+servicio:"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 text-orange-500 font-medium hover:text-red-500 transition-colors"
            >
              <span>Escribir por WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}