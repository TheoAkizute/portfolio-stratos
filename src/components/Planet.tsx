// src/components/Planet.tsx

type PlanetProps = {
  projectName: string;
  size: string;
  texture: string; // <-- On déclare bien qu'on attend 'texture' et 'size'
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
        boxShadow: "inset 0 0 20px 5px rgba(0,0,0,0.5)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full transition-opacity duration-300 group-hover:bg-opacity-20"></div>
      <p className="relative z-10 p-2 text-center text-xs md:text-sm font-bold text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        {projectName}
      </p>
    </div>
  );
};

export default Planet;