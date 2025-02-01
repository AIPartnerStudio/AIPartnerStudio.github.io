import { motion } from 'framer-motion';
import { DollarSign, Shield, TrendingUp } from 'lucide-react';
import "../styles/fonts.css";

const beneficios = [
  {
    icon: DollarSign,
    title: 'Reduce costos operativos',
    description: 'Elimina tareas manuales y optimiza recursos.',
  },
  {
    icon: Shield,
    title: 'Minimiza errores',
    description: 'Tecnología inteligente que aprende y se adapta a tus necesidades.',
  },
  {
    icon: TrendingUp,
    title: 'Escala sin límites',
    description: 'Prepárate para crecer sin preocuparte por cuellos de botella.',
  },
];

export default function AutomatizacionInteligente() {
  return (
    <div className="py-24 bg-white font-fit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge similar al de About */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-50 text-orange-500 mb-8">
          <TrendingUp className="w-5 h-5 mr-2" />
          Automatización IA
        </div>

        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-[500] tracking-tight text-slate-900 mb-6">
            Automatización Inteligente para tu{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text font-bold">
              Negocio Online
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-[400] leading-relaxed">
            ¿Imaginas un negocio donde las tareas repetitivas se gestionan solas, los errores desaparecen y la eficiencia se dispara? Con nuestra plataforma de automatización impulsada por IA, transformamos tus procesos internos en un sistema fluido y eficiente.
          </p>
        </motion.div>

        {/* Grid de beneficios */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={beneficio.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mb-6">
                <beneficio.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-[500] text-slate-900 mb-4">
                {beneficio.title}
              </h3>
              <p className="text-lg text-slate-600">
                {beneficio.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center space-x-2 shadow-lg">
            <span>Descubre cómo automatizar tu negocio</span>
            <TrendingUp className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
} 