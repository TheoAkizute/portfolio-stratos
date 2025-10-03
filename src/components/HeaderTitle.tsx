// src/components/HeaderTitle.tsx
import { motion } from 'framer-motion';

const HeaderTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }} // Commence invisible et décalé à gauche
      animate={{ opacity: 1, x: 0 }}   // Apparaît et se met en place
      transition={{ duration: 1, delay: 0.5 }} // Animation douce
      className="absolute top-8 left-8 z-20" // Positionnement
    >
      <h1 
        className="font-orbitron text-4xl font-bold text-white drop-shadow-lg"
        style={{ textShadow: '0 0 15px rgba(255,255,255,0.7), 0 0 25px rgba(255,255,255,0.5)' }}
      >
        PORTFOLIO
      </h1>
    </motion.div>
  );
};

export default HeaderTitle;