// src/App.tsx
import { useState } from "react";
import Starfield from "./components/Starfield";
import Planet from "./components/Planet";
import ProjectModal from "./components/ProjectModal";
import InfoModal from "./components/InfoModal";
import Sun from "./components/Sun";
import HeaderTitle from "./components/HeaderTitle"; // <-- LIGNE N°1 À AJOUTER (L'IMPORTATION)
import { AnimatePresence } from "framer-motion";
import { User, Download, Send } from "lucide-react";

const projects = [
    {
        id: 1,
        name: "Project: Nebula-Art",
        texture: "/planet1.png",
        description: "Une application web qui utilise un modèle d'IA (via API) pour générer des images artistiques à partir de mots-clés. L'interface est épurée et futuriste, conçue pour guider même les novices.",
        technologies: ["React", "TypeScript", "Vite", "REST API", "TailwindCSS"],
        size: "w-28 h-28",
        orbitSpeed: "40s", orbitRadius: 240,
    },
    {
        id: 2,
        name: "Project: Star-Tracker",
        texture: "/planet2.png",
        description: "Un script Python qui récupère et analyse un jeu de données de la NASA sur les exoplanètes. Le script utilise Pandas pour le traitement et Matplotlib pour créer des visualisations de données.",
        technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
        size: "w-20 h-20",
        orbitSpeed: "40s", orbitRadius: 260,
    },
    {
        id: 3,
        name: "Project: Echo-Log",
        texture: "/planet3.png",
        description: "Une plateforme de type blog full-stack simple. L'accent est mis sur une API back-end avec Flask et une base de données SQLite, consommée par un front-end React.",
        technologies: ["React", "Python", "Flask", "SQLite", "Full-Stack"],
        size: "w-24 h-24",
        orbitSpeed: "40s", orbitRadius: 220,
    },
    {
        id: 4,
        name: "Project: Weather-Watch",
        texture: "/planet4.png",
        description: "Une application météo simple page qui interroge l'API OpenWeatherMap. L'utilisateur peut rechercher une ville et obtenir la température et les conditions météorologiques actuelles en temps réel.",
        technologies: ["React", "API Fetch", "State Management", "CSS"],
        size: "w-24 h-24",
        orbitSpeed: "40s", orbitRadius: 250,
    },
    {
        id: 5,
        name: "Project: Canvas-Snake",
        texture: "/planet5.png",
        description: "Le jeu Snake classique, recréé en JavaScript pur et utilisant l'élément HTML Canvas. Le projet se concentre sur la logique de la boucle de jeu, la gestion des collisions et les contrôles au clavier.",
        technologies: ["JavaScript (ES6+)", "HTML Canvas", "Game Logic"],
        size: "w-16 h-16",
        orbitSpeed: "40s", orbitRadius: 230,
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
            <HeaderTitle /> {/* <-- LIGNE N°2 À AJOUTER (L'APPEL) */}

            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                
                <Sun
                    onAboutClick={() => setActiveModal('about')}
                    onCvClick={handleDownloadCV}
                    onContactClick={() => setActiveModal('contact')}
                />

                <div className="hidden md:block">
                    {projects.map((project, index) => {
                        const totalPlanets = projects.length;
                        const speedInSeconds = parseFloat(project.orbitSpeed);
                        const delay = -(index / totalPlanets) * speedInSeconds;

                        return (
                            <div
                                key={project.id}
                                className="absolute top-1/2 left-1/2 z-10 pointer-events-none"
                                style={{
                                    animation: `orbit ${project.orbitSpeed} linear infinite`,
                                    animationDelay: `${delay}s`,
                                    width: `${project.orbitRadius * 2}px`,
                                    height: `${project.orbitRadius * 2}px`,
                                    margin: `-${project.orbitRadius}px 0 0 -${project.orbitRadius}px`,
                                }}
                            >
                                <div
                                    className="absolute top-0 left-0 pointer-events-auto"
                                    style={{
                                        animation: `orbit ${project.orbitSpeed} linear infinite reverse`,
                                        animationDelay: `${delay}s`,
                                    }}
                                >
                                    <Planet
                                        projectName={project.name}
                                        texture={project.texture}
                                        size={project.size}
                                        onClick={() => setSelectedProject(project)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="block md:hidden mt-12 w-full px-4 overflow-y-auto">
                    <h2 className="text-center font-display text-2xl text-cyan-400 mb-6">Projets</h2>
                    <div className="flex flex-col items-center gap-8 pb-8">
                        {projects.map((project) => (
                            <Planet
                                key={project.id}
                                projectName={project.name}
                                texture={project.texture}
                                size={project.size}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                </div>

            </div>

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