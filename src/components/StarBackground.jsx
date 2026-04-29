import React, { useEffect, useState } from 'react';

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const starCount = 150;
      const newStars = [];
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 10,
          opacity: Math.random() * 0.7 + 0.3,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#020202] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neonPurple/5 to-transparent opacity-30" />
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            boxShadow: star.size > 2 ? `0 0 10px white` : 'none',
          }}
        />
      ))}
      {/* Space Nebula effects */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-neonBlue/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-neonPurple/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
    </div>
  );
};

export default StarBackground;
