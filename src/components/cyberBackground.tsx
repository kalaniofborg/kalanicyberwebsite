import { motion } from "framer-motion";

const CyberBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main grid */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline opacity-30" />
      
      {/* Floating circuit nodes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hex pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon
              points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4"
              fill="none"
              stroke="hsl(160 100% 50%)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>

      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(160 100% 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(160 100% 50%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(200 100% 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 L100,100 L100,200 L200,200 L200,300"
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          fill="none"
          className="animate-data-flow"
        />
        <path
          d="M1920,300 L1820,300 L1820,400 L1720,400 L1720,500"
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          fill="none"
          className="animate-data-flow"
        />
      </svg>
    </div>
  );
};

export default CyberBackground;