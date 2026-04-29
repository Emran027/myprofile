import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
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
          {/* Abstract Floating Visual with Profile Image */}
          <motion.div
            animate={{ 
              rotate: 360,
              y: [0, -20, 0]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center"
          >
            {/* Outer Rings */}
            <div className="absolute inset-0 border-2 border-neonBlue/20 rounded-full animate-pulse" />
            <div className="absolute inset-4 border border-neonPurple/10 rounded-full" />
            <div className="absolute inset-10 border border-white/5 rounded-full" />
            
            {/* Image Container */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-neonBlue/30 shadow-[0_0_50px_rgba(0,242,255,0.2)] z-20"
            >
              <img 
                src={myImage} 
                alt="Md. Emran Hossain" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neonBlue/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Orbiting Elements */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 glass rounded-lg rotate-45 flex items-center justify-center border-neonBlue/50 border shadow-[0_0_10px_rgba(0,242,255,0.5)]">
                <div className="w-2 h-2 bg-neonBlue rounded-full" />
              </div>
            </motion.div>

             <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute -bottom-2 right-1/4 w-6 h-6 glass rounded-full border-neonPurple/50 border shadow-[0_0_10px_rgba(188,19,254,0.5)]">
                 <div className="w-1.5 h-1.5 bg-neonPurple rounded-full" />
              </div>
            </motion.div>
          </motion.div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neonBlue/5 blur-[100px] rounded-full" />
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-10 rounded-full bg-gradient-to-b from-neonBlue to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
