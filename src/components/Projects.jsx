import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Play, Gamepad2, Layers, Map } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Dino Bhai",
      description: "A professional, high-definition endless runner game with a modern neon aesthetic.",
      tags: ["HTML5 Canvas", "JavaScript", "Game Dev"],
      icon: <Gamepad2 className="text-neonBlue" />,
      color: "blue",
      link: "https://emran027.github.io/dinobhai/"
    },
    {
      title: "GuideBox",
      description: "40+ video tutorials and searchable support dashboard for client training.",
      tags: ["React", "Dashboard", "Video Support"],
      icon: <Layers className="text-neonPurple" />,
      color: "purple",
      link: "#"
    },
    {
      title: "TheEduGame",
      description: "EdTech platform gamifying Accounting education for students.",
      tags: ["Gamification", "EdTech", "Education"],
      icon: <Gamepad2 className="text-neonBlue" />,
      color: "blue",
      link: "#"
    },
    {
      title: "Amader Shomobay",
      description: "Web app for managing local savings society records and lottery systems.",
      tags: ["Fintech", "Management", "Automation"],
      icon: <Layers className="text-neonPurple" />,
      color: "purple",
      link: "#"
    },
    {
      title: "90's Dream",
      description: "Nostalgic retro-themed web application portfolio.",
      tags: ["Retro", "Portfolio", "UI/UX"],
      icon: <Play className="text-neonBlue" />,
      color: "blue",
      link: "#"
    },
    {
      title: "Visual Mapper",
      description: "Data organizer tool for flat to hierarchical territory data transformations.",
      tags: ["Data Tool", "Mapping", "Hierarchical"],
      icon: <Map className="text-neonPurple" />,
      color: "purple",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient-white">My Creative</span> <span className="neon-text-blue">Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10 }}
              className="group relative glass p-8 rounded-2xl border-white/5 hover:border-neonBlue/30 hover:shadow-[0_20px_60px_rgba(0,209,255,0.25)] transition-[border-color,box-shadow,transform] duration-300 overflow-hidden will-change-transform"
            >
              {/* Card Background Glow */}
              <div className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-[60px] opacity-20 transition-opacity group-hover:opacity-40 ${project.color === 'blue' ? 'bg-neonBlue' : 'bg-neonPurple'}`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 glass rounded-2xl border-white/10 ${project.color === 'blue' ? 'group-hover:border-neonBlue/50' : 'group-hover:border-neonPurple/50'} transition-colors`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 glass rounded-full hover:text-neonBlue transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 bg-white/5 uppercase tracking-wider text-gray-400 group-hover:border-neonBlue/30 group-hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle hover border overlay */}
              <div className="absolute inset-0 pointer-events-none border border-transparent group-hover:border-white/5 rounded-[2rem]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
