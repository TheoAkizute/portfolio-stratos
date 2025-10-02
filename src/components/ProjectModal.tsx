// src/components/ProjectModal.tsx
import { motion } from "framer-motion";
import React from 'react'; // <-- AJOUT DE CET IMPORT

// On définit le type de données que le projet va recevoir
type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
};

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    // Le fond semi-transparent qui ferme le modal au clic
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Le panneau du modal, qui ne se ferme pas au clic */}
      <motion.div
        className="relative w-11/12 max-w-2xl p-8 bg-panel-blue rounded-lg shadow-xl text-light-gray"
        // --- LA LIGNE CORRIGÉE EST ICI ---
        onClick={(e: React.MouseEvent) => e.stopPropagation()} // On précise le type de 'e'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl hover:text-electric-cyan transition-colors"
        >
          &times;
        </button>
        <h2 className="font-display text-3xl text-electric-cyan mb-4">{project.name}</h2>
        <p className="mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          <h3 className="w-full text-lg font-bold">Technologies :</h3>
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-deep-blue rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;