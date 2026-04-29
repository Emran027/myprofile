import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Play, Gamepad2, Layers, Map } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "GuideBox",
      description: "40+ video tutorials and searchable support dashboard for client training.",
      tags: ["React", "Dashboard", "Video Support"],
      icon: <Layers className="text-neonBlue" />,
      color: "blue"
    },
    {
      title: "TheEduGame",
      description: "EdTech platform gamifying Accounting education for students.",
      tags: ["Gamification", "EdTech", "Education"],
      icon: <Gamepad2 className="text-neonPurple" />,
      color: "purple"
    },
    {
      title: "Amader Shomobay",
      description: "Web app for managing local savings society records and lottery systems.",
      tags: ["Fintech", "Management", "Automation"],
      icon: <Layers className="text-neonBlue" />,
      color: "blue"
    },
    {
      title: "90's Dream",
      description: "Nostalgic retro-themed web application portfolio.",
      tags: ["Retro", "Portfolio", "UI/UX"],
      icon: <Play className="text-neonPurple" />,
      color: "purple"
    },
    {
      title: "Visual Mapper",
      description: "Data organizer tool for flat to hierarchical territory data transformations.",
      tags: ["Data Tool", "Mapping", "Hierarchical"],
      icon: <Map className="text-neonBlue" />,
      color: "blue"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -15 }}
              className="group relative glass p-8 rounded-[2rem] border-white/5 hover:border-neonBlue/30 hover:shadow-[0_20px_50px_rgba(0,242,255,0.1)] transition-all duration-500 overflow-hidden"
            >
              {/* Card Background Glow */}
              <div className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-[60px] opacity-20 transition-opacity group-hover:opacity-40 ${project.color === 'blue' ? 'bg-neonBlue' : 'bg-neonPurple'}`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 glass rounded-2xl border-white/10 ${project.color === 'blue' ? 'group-hover:border-neonBlue/50' : 'group-hover:border-neonPurple/50'} transition-colors`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 glass rounded-full hover:text-neonBlue transition-colors"><ExternalLink size={18} /></button>
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
