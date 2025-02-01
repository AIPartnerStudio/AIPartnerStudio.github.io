import { motion } from 'framer-motion';
import { Calendar, Workflow, Bot, Wrench, TrendingUp } from 'lucide-react';
import "../styles/fonts.css";

const servicesData = [
  {
    icon: Calendar,
    title: 'AI Appointment Setter',
    description: 'Sistema inteligente de programación que optimiza tu agenda automáticamente.',
  },
  {
    icon: Workflow,
    title: 'Procesos Internos Automatizados',
    description: 'Optimización de flujos de trabajo para máxima eficiencia operativa.',
  },
  {
    icon: Bot,
    title: 'AI Ops',
    description: 'Operaciones inteligentes que mejoran la productividad y reducen errores.',
  },
];

// Variantes para la animación colectiva
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variantes para cada tarjeta
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Services() {
  return (
    <div className="py-24 bg-white font-fit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge de Servicios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50/80 backdrop-blur-sm">
            <Wrench className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-500 font-medium">Servicios</span>
          </div>
        </motion.div>

        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-[500] tracking-tight text-slate-900 mb-4">
            Desde embudos inteligentes hasta automatización avanzada, te ayudamos a{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text font-bold">
              multiplicar tus resultados
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-[400]">
            Nuestras soluciones están diseñadas para transformar tu negocio y llevarlo al siguiente nivel.
          </p>
        </motion.div>

        {/* Grid de servicios - Centrado con animaciones */}
        <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
          {/* AI Appointment Setter - Desde izquierda */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-orange-400" />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-[500] text-slate-900 mb-3">
                  AI Appointment Setter
                </h3>
                <p className="text-lg text-slate-600 font-[400]">
                  ¿Imaginas que cada cliente interesado reciba atención inmediata y personalizada, sin que tú hagas nada? Con nuestro Embudo de Ventas Inteligente, prospectamos, cualificamos y convertimos leads en clientes de forma automática.{' '}
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text text-xl font-bold">
                    Más ventas, menos esfuerzo.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Procesos Internos Automatizados - Desde derecha */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                <Workflow className="w-6 h-6 text-orange-400" />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-[500] text-slate-900 mb-3">
                  Procesos Internos Automatizados
                </h3>
                <p className="text-lg text-slate-600 font-[400]">
                  ¿Cansado de perder tiempo en tareas repetitivas y errores costosos? Con nuestra solución de automatización de procesos, transformamos tus flujos de trabajo en sistemas eficientes y libres de fallos.{' '}
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text text-xl font-bold">
                    Ahorra tiempo, reduce costos y enfócate en hacer crecer tu negocio.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* AI Ops - Desde izquierda */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                <Bot className="w-6 h-6 text-orange-400" />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-[500] text-slate-900 mb-3">
                  AI Ops
                </h3>
                <p className="text-lg text-slate-600 font-[400]">
                  Automatiza tus operaciones diarias y elimina errores humanos. Nuestra IA se encarga de las tareas repetitivas mientras tú te enfocas en la estrategia.{' '}
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text text-xl font-bold">
                    Máxima eficiencia, resultados garantizados.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-400 to-red-400 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all shadow-lg"
        >
          <span>Descubre cómo automatizar tu negocio</span>
          <TrendingUp className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}