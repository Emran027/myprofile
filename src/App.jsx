import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import StarBackground from './components/StarBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <StarBackground />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tighter">
            <span className="neon-text-blue">PORT</span>
            <span className="text-white">FOLIO</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Md. Emran Hossain. Built with React & Space Magic.
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/emran-hossain-508793304" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neonBlue transition-colors">LinkedIn</a>
            <a href="https://github.com/Emran027" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neonPurple transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
