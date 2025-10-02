// src/components/Satellite.tsx
import React from 'react';

type SatelliteProps = {
  label: string;
  icon: React.ReactNode; // Permet de passer une icône comme un composant
  onClick: () => void;
};

const Satellite = ({ label, icon, onClick }: SatelliteProps) => {
  return (
    <div
      onClick={onClick}
      className="group relative w-16 h-16 bg-slate-600 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-slate-400 hover:shadow-lg hover:shadow-white/30"
    >
      <div className="text-white transition-transform duration-300 group-hover:scale-125">
        {icon}
      </div>
      <p className="absolute -bottom-6 text-xs text-slate-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {label}
      </p>
    </div>
  );
};

export default Satellite;