import React from 'react';

export const BackgroundBlur = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Fondo blanco sólido */}
      <div className="absolute inset-0 bg-white" />

      {/* Efectos blur solo alrededor del video */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1000px] aspect-video">
        {/* Resplandor izquierdo */}
        <div className="absolute -left-[20%] top-1/2 -translate-y-1/2 w-[40%] h-[120%]">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-transparent rounded-full blur-[80px]" />
        </div>

        {/* Resplandor derecho */}
        <div className="absolute -right-[20%] top-1/2 -translate-y-1/2 w-[40%] h-[120%]">
          <div className="absolute inset-0 bg-gradient-to-l from-orange-400/30 to-transparent rounded-full blur-[80px]" />
        </div>

        {/* Resplandores sutiles animados */}
        <div className="absolute -left-[15%] top-1/2 -translate-y-1/2 w-[30%] h-[100%]">
          <div 
            className="absolute inset-0 bg-orange-300/20 rounded-full blur-[60px] animate-pulse"
            style={{ animationDuration: '8s' }}
          />
        </div>
        <div className="absolute -right-[15%] top-1/2 -translate-y-1/2 w-[30%] h-[100%]">
          <div 
            className="absolute inset-0 bg-orange-300/20 rounded-full blur-[60px] animate-pulse"
            style={{ animationDuration: '10s' }}
          />
        </div>
      </div>
    </div>
  );
}; 