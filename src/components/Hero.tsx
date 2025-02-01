import { motion } from "framer-motion";
import { ArrowDown, Play, TrendingUp } from "lucide-react";
import { BackgroundBlur } from "./BackgroundBlur";
import "../styles/fonts.css";

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden font-fit">
      <BackgroundBlur />

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-[500] tracking-tight text-slate-900 mb-6"
        >
          Automatiza tu E-commerce con{' '}
          <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text font-bold">
            Inteligencia Artificial
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 font-[400] leading-relaxed"
        >
          Descubre cómo nuestras soluciones de IA están revolucionando la forma en que los negocios operan, aumentan sus ventas y mejoran la experiencia del cliente.
        </motion.p>

        {/* Indicador de video importante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center space-y-4 mb-8"
        >
          <div className="inline-flex items-center space-x-2 text-orange-500 font-medium">
            <Play className="w-5 h-5" />
            <span>IMPORTANTE VER</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Contenedor del Video con efectos */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full max-w-[1000px] mx-auto px-4 relative"
      >
        {/* Marco borroso */}
        <div className="absolute -inset-4 bg-white/50 backdrop-blur-xl rounded-3xl -z-10" />
        
        {/* Círculos decorativos */}
        <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-r from-orange-400/20 to-red-400/20 blur-2xl -z-10" />
        <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-r from-orange-400/20 to-red-400/20 blur-2xl -z-10" />
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Overlay decorativo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/10 to-red-400/10 pointer-events-none z-10" />
          
          {/* Video */}
          <div className="aspect-video relative">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/BGBy4SmlacQ?si=V-JP2HygmwMdUTCI&autoplay=1&mute=1"
              title="AI Partner Studio - Automatización Inteligente"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-400 to-red-400 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all shadow-lg"
        >
          <span>Comienza Ahora</span>
          <TrendingUp className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Métricas o social proof */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto px-4"
      >
        {[
          { number: "95%", label: "Satisfacción" },
          { number: "2x", label: "Más Ventas" },
          { number: "-40%", label: "Costos Operativos" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text">
              {stat.number}
            </div>
            <div className="text-slate-600 text-sm md:text-base">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}