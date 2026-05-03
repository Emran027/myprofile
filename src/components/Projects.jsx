import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Play, Gamepad2, Layers, Map, X, CheckCircle2, ShieldAlert, Target, Rocket, Image } from 'lucide-react';

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
      subtitle: "Client Training & Support Automation Platform",
      client: "Sokrio Technology Ltd",
      role: "Project Lead & Content Architect",
      description: "40+ video tutorials and searchable support dashboard for client training.",
      tags: ["React", "Dashboard", "Video Support"],
      icon: <Layers className="text-neonPurple" />,
      color: "purple",
      link: "#",
      details: {
        overview: "GuideBox was developed as a specialized digital training resource for the clients of Sokrio Technology Ltd. It serves as a centralized, searchable support dashboard that empowers users to master the platform independently.",
        challenge: "The company needed to reduce repetitive manual training and speed up the client onboarding process, as clients relied heavily on support for minor technical queries.",
        solution: [
          "A library of 40+ high-quality video tutorials.",
          "A Searchable Support Dashboard for instant troubleshooting.",
          "Step-by-step guidance for end-to-end software utilization."
        ],
        impact: [
          "Reduced Support Load: Significantly decreased 'How-to' tickets.",
          "Accelerated Onboarding: Streamlined the client transition phase.",
          "24/7 Availability: Clients can access help anytime, anywhere."
        ],
        confidentialNote: "This project is proprietary. Specific internal workflows and direct links are restricted to ensure the security and privacy of the client."
      }
    },
    {
      title: "TheEduGame",
      subtitle: "Gamifying Accounting Education for the Next Generation",
      client: "Status: In Development (Ongoing)",
      role: "Full-Stack Developer & UI/UX Designer",
      description: "EdTech platform gamifying Accounting education for students.",
      tags: ["Python", "Flask", "Gamification"],
      icon: <Gamepad2 className="text-neonBlue" />,
      color: "blue",
      link: "#",
      details: {
        overview: "TheEduGame is an innovative EdTech platform designed to transform the way secondary and higher secondary students learn accounting. By integrating gamification mechanics into the core curriculum, the platform turns complex financial concepts into engaging, interactive challenges that promote better retention and student interest.",
        challenge: "Traditional accounting education often struggles with student engagement due to its heavy reliance on theory and repetitive practice. TheEduGame aims to solve this by creating a \"learn-by-playing\" environment where students can master journal entries, ledgers, and financial statements through quest-based learning and competitive milestones.",
        challengeTitle: "The Vision",
        solution: [
          "Gamified Content Architecture: Designing a curriculum-aligned level system where students earn rewards for accurately solving accounting problems.",
          "Secure Authentication Flow: Developing a custom authentication system to ensure student data privacy and progress tracking.",
          "Interactive UI/UX: Crafting a responsive, intuitive interface that feels more like a modern gaming app than a traditional textbook.",
          "Progress Dashboard: Implementing a visual tracker for students to monitor their mastery of different accounting topics in real-time."
        ],
        solutionTitle: "Current Progress & Features",
        impact: [
          "Increased Engagement: Helping students overcome the \"fear of numbers\" through a supportive, game-like atmosphere.",
          "Scalable Learning: A tool that can be used by teachers in classrooms or by students for independent study.",
          "Data-Driven Insights: Providing analytics to help educators identify exactly where students are struggling within the accounting cycle."
        ],
        impactTitle: "Future Impact",
        confidentialNote: "This is an active development project. I am currently refining the core gameplay loops and expanding the content library to cover the full secondary accounting syllabus.",
        noteTitle: "Project Note"
      }
    },
    {
      title: "Amader Shomobay",
      subtitle: "Digitizing Cooperative Society Management",
      client: "Community Project",
      role: "Full-Stack Developer",
      description: "A comprehensive management system for cooperative societies to automate finances and lottery processes.",
      tags: ["Supabase", "JavaScript", "Tailwind CSS"],
      icon: <Layers className="text-neonPurple" />,
      color: "purple",
      link: "https://shomobay.vercel.app/",
      details: {
        overview: "Amader Shomobay is a web-based management platform designed to digitize manual bookkeeping for cooperative societies (Somiti). It streamlines financial tracking, member contributions, and lottery operations with high transparency and real-time data automation.",
        challenge: "Traditional societies often rely on manual registers, leading to potential accounting errors, lack of transparency, and difficulty in tracking long-term member contributions and lottery histories.",
        solution: [
          "Member Dashboards: Individual portals for members to view savings and lottery status.",
          "Automated Tracking: Real-time logging of deposits with automated debt/arrears tracking.",
          "Lottery Logic System: A specialized algorithm for transparent and fair lottery management.",
          "Real-time Backend: Powered by Supabase for secure, instantaneous data synchronization."
        ],
        impact: [
          "Data Transparency: Every transaction is recorded and verifiable, eliminating disputes.",
          "Automation: Significant reduction in manual bookkeeping time and human error.",
          "Accessibility: Fully responsive design allowing members to access data on any device."
        ],
        confidentialNote: "This project is currently live and deployed on Vercel, providing a scalable solution for local group fund management.",
        noteTitle: "Deployment Note",
        screenshots: [
          "/projects/shomobay/register.png",
          "/projects/shomobay/signin.png",
          "/projects/shomobay/dashboard.png",
          "/projects/shomobay/admin.png"
        ]
      }
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
  const [selectedProject, setSelectedProject] = React.useState(null);

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
                    {project.details ? (
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="p-2 glass rounded-full hover:text-neonPurple transition-colors"
                      >
                        <Code size={18} />
                      </button>
                    ) : (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 glass rounded-full hover:text-neonBlue transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex overflow-y-auto bg-black/95 backdrop-blur-2xl p-4 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass max-w-3xl w-full rounded-[2.5rem] border-white/10 relative m-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>

              <div className="p-10 md:p-14">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 glass rounded-2xl text-neonPurple border-neonPurple/20">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                    <p className="text-neonPurple font-bold text-sm uppercase tracking-widest">{selectedProject.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 py-6 border-y border-white/5 mb-10 text-center md:text-left">
                  <div>
                    <p className="text-gray-500 text-[10px] font-bold uppercase mb-1 tracking-widest">{selectedProject.title === 'TheEduGame' ? 'Status' : 'Client'}</p>
                    <p className="text-white font-bold">{selectedProject.client}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-bold uppercase mb-1 tracking-widest">Role</p>
                    <p className="text-white font-bold">{selectedProject.role}</p>
                  </div>
                </div>

                <div className="space-y-10">
                  <section>
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Target className="text-neonPurple" size={20} /> Overview
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-lg italic">"{selectedProject.details.overview}"</p>
                  </section>

                  <section>
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <ShieldAlert className={selectedProject.color === 'blue' ? 'text-neonBlue' : 'text-neonPurple'} size={20} /> {selectedProject.details.challengeTitle || 'The Challenge'}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">{selectedProject.details.challenge}</p>
                  </section>

                  <div className="grid md:grid-cols-2 gap-10">
                    <section>
                      <h4 className={`text-xl font-bold mb-6 flex items-center gap-2 ${selectedProject.color === 'blue' ? 'text-neonBlue' : 'text-neonBlue'}`}>
                        <Code size={20} /> {selectedProject.details.solutionTitle || 'The Solution'}
                      </h4>
                      <ul className="space-y-4">
                        {selectedProject.details.solution.map((item, i) => (
                          <li key={i} className="flex gap-3 text-gray-300 text-sm">
                            <CheckCircle2 size={18} className="text-neonBlue shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h4 className={`text-xl font-bold mb-6 flex items-center gap-2 ${selectedProject.color === 'blue' ? 'text-neonBlue' : 'text-neonPurple'}`}>
                        <Rocket size={20} /> {selectedProject.details.impactTitle || 'Business Impact'}
                      </h4>
                      <ul className="space-y-4">
                        {selectedProject.details.impact.map((item, i) => (
                          <li key={i} className="flex gap-3 text-gray-300 text-sm">
                            <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${selectedProject.color === 'blue' ? 'text-neonBlue' : 'text-neonPurple'}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  {selectedProject.details.screenshots && (
                    <section>
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Image className="text-neonBlue" size={20} /> Project Gallery
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.details.screenshots.map((src, i) => (
                          <div key={i} className="rounded-xl overflow-hidden border border-white/10 glass group/img">
                            <img 
                              src={src} 
                              alt={`${selectedProject.title} screenshot ${i + 1}`} 
                              className="w-full h-auto object-cover transition-transform duration-500 group-hover/img:scale-110"
                            />
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  <div className={`mt-12 p-6 glass rounded-2xl border-white/5 ${selectedProject.color === 'blue' ? 'bg-neonBlue/5' : 'bg-yellow-500/5'}`}>
                    <p className={`text-xs font-bold leading-relaxed ${selectedProject.color === 'blue' ? 'text-neonBlue/80' : 'text-yellow-500/80'}`}>
                      <span className={`uppercase mr-2 ${selectedProject.color === 'blue' ? 'text-neonBlue' : 'text-yellow-500'}`}>{selectedProject.details.noteTitle || 'Note'}:</span>
                      {selectedProject.details.confidentialNote}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
