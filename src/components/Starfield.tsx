// src/components/Starfield.tsx

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const Starfield = () => {
  // Cette fonction s'assure de charger le moteur de particules
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Le composant Particles avec toutes ses options de configuration
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#020817", // Notre couleur de fond principale
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Les étoiles fuient la souris
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 60,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff", // Couleur des étoiles
          },
          links: {
            enable: false, // On ne veut pas de liens entre les étoiles
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.1, // Vitesse de déplacement très lente
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120, // Nombre d'étoiles
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 }, // Taille aléatoire des étoiles
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Starfield;