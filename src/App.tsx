// src/App.tsx
import { useState } from "react";
import Starfield from "./components/Starfield";
import Planet from "./components/Planet";
import ProjectModal from "./components/ProjectModal";
import InfoModal from "./components/InfoModal";
import Sun from "./components/Sun"; // On importe notre nouveau composant
import { AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Project: Nebula-Art",
    texture: "/planet1.png",
    description: "Une application web qui utilise un modèle d'IA pour générer des images artistiques à partir de mots-clés. L'interface est épurée et futuriste, conçue pour guider même les novices.",
    technologies: ["React", "TypeScript", "Vite", "Stable Diffusion API", "TailwindCSS"],
    color: "bg-pink-500", size: "w-28 h-28", orbitSpeed: "30s", orbitRadius: 280,
  },
  {
    id: 2,
    name: "Project: Star-Tracker",
    texture: "/planet2.png",
    description: "Un script Python qui récupère et analyse des données en temps réel de l'API de la NASA sur les objets géocroiseurs. Le défi était de transformer des données brutes complexes en visualisations claires et interactives.",
    technologies: ["Python", "Pandas", "Matplotlib", "NASA API", "DataViz"],
    color: "bg-blue-500", size: "w-20 h-20", orbitSpeed: "20s", orbitRadius: 200,
  },
  {
    id: 3,
    name: "Project: Echo-Log",
    texture: "/planet3.png",
    description: "Une plateforme de type blog full-stack sur le thème d'un journal de bord spatial. L'accent a été mis sur une authentification sécurisée via JWT et une expérience utilisateur fluide grâce à une architecture SPA.",
    technologies: ["Vue.js", "Python", "Flask", "PostgreSQL", "JWT", "Full-Stack"],
    color: "bg-teal-500", size: "w-24 h-24", orbitSpeed: "45s", orbitRadius: 320,
  },
];

type Project = typeof projects[0] | null;

function App() {
  const [selectedProject, setSelectedProject] = useState<Project>(null);
  const [activeModal, setActiveModal] = useState<'about' | 'contact' | null>(null);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Theo_CORBIER.pdf';
    link.download = 'CV_Theo_CORBIER.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="relative flex flex-col h-screen overflow-hidden">
      <Starfield />

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* On utilise notre nouveau composant SOLEIL ici */}
        <Sun 
          onAboutClick={() => setActiveModal('about')}
          onCvClick={handleDownloadCV}
          onContactClick={() => setActiveModal('contact')}
        />

        {/* --- Logique d'orbite des planètes --- */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="absolute top-1/2 left-1/2 z-10 pointer-events-none"
            style={{
              animation: `orbit ${project.orbitSpeed} linear infinite`,
              width: `${project.orbitRadius * 2}px`,
              height: `${project.orbitRadius * 2}px`,
              margin: `-${project.orbitRadius}px 0 0 -${project.orbitRadius}px`,
            }}
          >
            <div
              className="absolute top-0 left-0 pointer-events-auto"
              style={{ animation: `orbit ${project.orbitSpeed} linear infinite reverse` }}
            >
              <Planet
                projectName={project.name}
                texture={project.texture}
                size={project.size}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* --- Gestion des Modals --- */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        {activeModal === 'about' && (
          <InfoModal title="À Propos de Moi" onClose={() => setActiveModal(null)}>
            <p>Mon exploration a débuté dans les mondes du commerce et de la stratégie (BTS MUC, Licence Pro RDC), où j'ai appris à décrypter les besoins et à piloter des projets. Aujourd'hui, chez Epitech, je me forge une expertise technique pour maîtriser le "Comment".</p>
            <p className="mt-4">Mon objectif : combiner ma vision stratégique avec des compétences techniques robustes pour construire des solutions numériques cohérentes, performantes et pertinentes. Je suis un pont entre deux mondes.</p>
          </InfoModal>
        )}
        {activeModal === 'contact' && (
          <InfoModal title="Prendre Contact" onClose={() => setActiveModal(null)}>
            <p className="mb-4">Une question, une proposition ou juste envie de discuter ? N'hésitez pas à m'envoyer un message.</p>
            <form action="https://formspree.io/f/VOTRE_ID_FORMSPREE" method="POST" className="flex flex-col gap-4">
              <input type="email" name="email" placeholder="Votre email" required className="p-2 rounded bg-deep-blue border border-slate-600 focus:outline-none focus:border-cyan-400"/>
              <textarea name="message" placeholder="Votre message" rows={4} required className="p-2 rounded bg-deep-blue border border-slate-600 focus:outline-none focus:border-cyan-400"></textarea>
              <button type="submit" className="p-2 bg-cyan-600 hover:bg-cyan-500 rounded font-bold transition-colors">Envoyer</button>
            </form>
          </InfoModal>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;