import React, { useMemo } from 'react';

const StarBackground = () => {
  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 60; i++) {
      arr.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    return arr;
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#020202] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neonPurple/5 to-transparent opacity-20" />
      
      {/* Stars rendered with pure CSS animation */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${3 + star.delay}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Nebula glow — static, no animation */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-neonBlue/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-neonPurple/8 rounded-full blur-[120px]" />

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
