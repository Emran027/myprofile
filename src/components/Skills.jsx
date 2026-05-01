import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    { name: 'SaaS Implementation', level: 90, color: 'neonBlue' },
    { name: 'Territory Hierarchy', level: 85, color: 'neonPurple' },
    { name: 'Data Validation', level: 95, color: 'neonBlue' },
    { name: 'Process Mapping', level: 80, color: 'neonPurple' },
  ];

  const operationalSkills = [
    { name: 'Field Force Enablement', level: 88, color: 'neonBlue' },
    { name: 'System Training', level: 92, color: 'neonPurple' },
    { name: 'KPI Tracking', level: 85, color: 'neonBlue' },
    { name: 'Advanced Excel', level: 98, color: 'neonPurple' },
  ];

  const tools = [
    'Google Workspace', 'Sokrio DMS', 'CRM Systems', 'Zoom', 'Basic Python', 'Canva', 'Adobe Photoshop', '2D Animation'
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid lg:grid-cols-2 gap-16"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-gradient-white">Core</span> <span className="neon-text-purple">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Purposeful Business Development Executive with firsthand experience in SaaS onboarding, client implementation, and structured data management. 
            </p>
            
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-white/80 border-l-2 border-neonBlue pl-4">Technical & Operational</h3>
              <div className="grid grid-cols-1 gap-6">
                {[...technicalSkills, ...operationalSkills].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span>{skill.name}</span>
                      <span className={skill.color === 'neonBlue' ? 'text-neonBlue' : 'text-neonPurple'}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        variants={{
                          hidden: { scaleX: 0, originX: 0 },
                          visible: { scaleX: 1 }
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`h-full rounded-full ${skill.color === 'neonBlue' ? 'bg-neonBlue shadow-[0_0_10px_rgba(0,242,255,0.3)]' : 'bg-neonPurple shadow-[0_0_10px_rgba(255,241,139,0.3)]'}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
             variants={{
               hidden: { opacity: 0, y: 30 },
               visible: { opacity: 1, y: 0 }
             }}
             className="space-y-12"
          >
             <div>
                <h3 className="text-xl font-bold text-white/80 border-l-2 border-neonPurple pl-4 mb-8">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-4">
                  {tools.map((tool) => (
                    <motion.div
                      key={tool}
                      variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      className="glass px-6 py-3 rounded-2xl border-white/5 text-sm font-medium text-gray-300 hover:border-neonBlue/30 hover:text-white transition-[border-color,color] cursor-default"
                    >
                      {tool}
                    </motion.div>
                  ))}
                </div>
             </div>

             <div className="glass p-8 rounded-2xl border-white/5 bg-gradient-to-br from-neonBlue/5 to-neonPurple/5">
                <h3 className="text-xl font-bold mb-4">Professional Summary</h3>
                <p className="text-gray-400 text-sm leading-relaxed italic">
                  "I am skilled in master data structuring, sales validation, and process optimization with a passion for automation and scalable training solutions."
                </p>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
