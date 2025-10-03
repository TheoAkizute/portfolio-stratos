// src/components/Sun.tsx
import { User, Download, Send } from 'lucide-react';
import Satellite from './Satellite';

type SunProps = {
  onAboutClick: () => void;
  onCvClick: () => void;
  onContactClick: () => void;
};

const Sun = ({ onAboutClick, onCvClick, onContactClick }: SunProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-48 h-48 md:w-64 md:h-64 group">
      
      {/* L'image du soleil avec l'effet d'ombre directement appliqué */}
      <img
        src="/sun.png"
        alt="Soleil"
        className="absolute w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
        // L'effet de boxShadow est maintenant sur l'image
        style={{ boxShadow: '0 0 50px 10px rgba(255, 165, 0, 0.5)' }} 
      />
      
      {/* L'ancien div qui créait l'espace noir est SUPPRIMÉ */}
      {/* <div 
        className="absolute w-[110%] h-[110%] rounded-full transition-all duration-500"
        style={{ boxShadow: '0 0 50px 10px rgba(255, 165, 0, 0.5)'}}
      ></div> */}
      
      <div className="text-center z-10 transition-opacity duration-300 group-hover:opacity-0">
        <h1 
          className="font-display text-3xl md:text-4xl text-white"
          style={{ textShadow: '0 0 10px #994500' }}
        >
          Théo CORBIER
        </h1>
        <p 
          className="mt-2 text-sm md:text-base text-slate-200"
          style={{ textShadow: '0 0 5px #994500' }}
        >
          Développeur Full-Stack
        </p>
      </div>

      <div className="absolute w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Satellite label="À propos" icon={<User size={24} />} onClick={onAboutClick} />
        </div>
        <div className="absolute bottom-[5%] right-[5%] translate-x-1/4 translate-y-1/4">
          <Satellite label="CV" icon={<Download size={24} />} onClick={onCvClick} />
        </div>
        <div className="absolute bottom-[5%] left-[5%] -translate-x-1/4 translate-y-1/4">
          <Satellite label="Contact" icon={<Send size={24} />} onClick={onContactClick} />
        </div>
      </div>
    </div>
  );
};

export default Sun;