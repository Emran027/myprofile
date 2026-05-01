import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import OffTheClock from './components/OffTheClock';
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
        <OffTheClock />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tighter">
            <span className="text-neonBlue">PORT</span>
            <span className="bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent">FOLIO</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">
            © 2024 Md. Emran Hossain. Built with React & Nature's Code.
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/emran-hossain-508793304" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neonBlue transition-colors font-bold">LinkedIn</a>
            <a href="https://github.com/Emran027" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neonPurple transition-colors font-bold">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
