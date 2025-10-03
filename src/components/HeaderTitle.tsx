// src/components/HeaderTitle.tsx
import { motion } from 'framer-motion';

// On ajoute une prop 'className' pour pouvoir le styliser depuis l'extérieur
type HeaderTitleProps = {
  className?: string;
};

const HeaderTitle = ({ className }: HeaderTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      // On utilise la className passée en prop pour le positionnement
      className={className}
    >
      <h1 
        className="font-orbitron text-3xl md:text-4xl font-bold text-white drop-shadow-lg text-center"
        style={{ textShadow: '0 0 15px rgba(255,255,255,0.7), 0 0 25px rgba(255,255,255,0.5)' }}
      >
        PORTFOLIO
      </h1>
    </motion.div>
  );
};

export default HeaderTitle;