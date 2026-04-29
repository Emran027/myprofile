import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import myImage from '../assets/myimage.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Hi, I am <br />
            <span className="neon-text-blue">Md. Emran Hossain</span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-lg">
            Purposeful Business Development Executive specializing in <span className="text-neonBlue">SaaS Onboarding</span> & <span className="text-neonPurple">Master Data Management</span>.
            <span className="block mt-4 text-gray-500 text-base font-normal">
              Onboarded 30+ companies and trained 1,500+ users with a passion for automation and scalable training solutions.
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neonBlue text-black font-bold rounded-xl flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]"
            >
              View Projects <ChevronRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-neonPurple/50 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-neonPurple/10 transition-all hover:border-neonPurple hover:shadow-[0_0_20px_rgba(188,19,254,0.3)]"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <div className="relative flex justify-center items-center">
          {/* Profile Image with CSS-only ring animations */}
          <div className="hero-orbital relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
            {/* Outer Rings - CSS animation */}
            <div className="absolute inset-0 border-2 border-neonBlue/20 rounded-full hero-ring-slow" />
            <div className="absolute inset-4 border border-neonPurple/10 rounded-full hero-ring-reverse" />
            <div className="absolute inset-10 border border-white/5 rounded-full" />
            
            {/* Image Container - static, no counter-rotation */}
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-neonBlue/30 shadow-[0_0_50px_rgba(0,242,255,0.2)] z-20">
              <img 
                src={myImage} 
                alt="Md. Emran Hossain" 
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neonBlue/20 to-transparent pointer-events-none" />
            </div>

            {/* Orbiting dot - CSS only */}
            <div className="absolute inset-0 hero-orbit-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-neonBlue/20 backdrop-blur-sm rounded-lg rotate-45 border border-neonBlue/50 shadow-[0_0_10px_rgba(0,242,255,0.4)] flex items-center justify-center">
                <div className="w-2 h-2 bg-neonBlue rounded-full" />
              </div>
            </div>

            <div className="absolute inset-0 hero-orbit-2">
              <div className="absolute -bottom-2 right-1/4 w-5 h-5 bg-neonPurple/20 backdrop-blur-sm rounded-full border border-neonPurple/50 shadow-[0_0_10px_rgba(188,19,254,0.4)]" />
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neonBlue/5 blur-[100px] rounded-full" />
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</span>
        <div className="w-1 h-10 rounded-full bg-gradient-to-b from-neonBlue to-transparent hero-scroll-pulse" />
      </div>

      <style>{`
        .hero-ring-slow { animation: spin 30s linear infinite; }
        .hero-ring-reverse { animation: spin 20s linear infinite reverse; }
        .hero-orbit-1 { animation: spin 15s linear infinite reverse; }
        .hero-orbit-2 { animation: spin 10s linear infinite; }
        .hero-scroll-pulse { animation: scrollBounce 2s ease-in-out infinite; }
        .hero-orbital { animation: heroFloat 6s ease-in-out infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes heroFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes scrollBounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(10px); } }
      `}</style>
    </section>
  );
};

export default Hero;
