// src/components/Planet.tsx

type PlanetProps = {
  projectName: string;
  size: string;
  texture: string; // On remplace 'color' par 'texture'
  onClick: () => void;
};

const Planet = ({ projectName, size, texture, onClick }: PlanetProps) => {
  const planetClasses = `group relative ${size} rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg`;

  return (
    <div
      className={planetClasses}
      onClick={onClick}
      style={{
        backgroundImage: `url(${texture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // Ajout d'une ombre interne pour un effet sphérique
        boxShadow: "inset 0 0 20px 5px rgba(0,0,0,0.5)",
      }}
    >
      {/* Ce div sert de voile sombre qui s'éclaircit au survol */}
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full transition-opacity duration-300 group-hover:bg-opacity-20"></div>

      {/* Le nom du projet n'apparaît qu'au survol */}
      <p className="relative z-10 p-2 text-center text-xs md:text-sm font-bold text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        {projectName}
      </p>
    </div>
  );
};

export default Planet;