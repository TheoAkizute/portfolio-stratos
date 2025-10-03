// src/components/Starfield.tsx
import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

// On définit la configuration de l'étoile filante une seule fois pour la réutiliser
const shootingStarParticles = {
    move: {
        enable: true,
        outModes: { default: "destroy" },
        speed: 15,
        straight: true,
        trail: {
            enable: true,
            length: 10,
            fill: { color: "#ffffff" },
        },
    },
    opacity: {
        value: { min: 0.1, max: 1 },
        animation: {
            enable: true,
            speed: 0.7,
            startValue: "max",
            destroy: "min",
        },
    },
    size: {
        value: 2,
    },
};

const Starfield = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = useCallback(async () => {}, []);

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    background: { color: { value: "#020817" } },
                    fpsLimit: 120,
                    interactivity: { events: { onHover: { enable: true, mode: "repulse" } }, modes: { repulse: { distance: 60 } } },
                    particles: {
                        color: { value: "#ffffff" },
                        move: { direction: "none", enable: true, outModes: { default: "out" }, random: true, speed: 0.1 },
                        number: { density: { enable: true }, value: 160 },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 2 } },
                    },
                    detectRetina: true,
                    emitters: [
                        {
                            direction: "bottom-right",
                            rate: { quantity: 1, delay: 7 },
                            position: { x: 0, y: 30 },
                            size: { width: 0, height: 0 },
                            particles: shootingStarParticles,
                        },
                        {
                            direction: "bottom-left",
                            rate: { quantity: 1, delay: 7 },
                            position: { x: 100, y: 30 },
                            size: { width: 0, height: 0 },
                            particles: shootingStarParticles,
                        },
                        {
                            direction: "top-right",
                            rate: { quantity: 1, delay: 10 },
                            position: { x: 0, y: 80 },
                            size: { width: 0, height: 0 },
                            particles: shootingStarParticles,
                        },
                    ],
                }}
            />
        );
    }

    return null;
};

export default Starfield;