import { motion } from "framer-motion";
import React from 'react';

type InfoModalProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

const InfoModal = ({ title, children, onClose }: InfoModalProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-11/12 max-w-2xl p-8 bg-panel-blue rounded-lg shadow-xl text-light-gray"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl hover:text-electric-cyan">&times;</button>
        <h2 className="font-display text-3xl text-electric-cyan mb-4">{title}</h2>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default InfoModal;