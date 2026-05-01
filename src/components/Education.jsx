import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, MapPin } from 'lucide-react';

const Education = () => {
  const degrees = [
    {
      degree: "MBA in Business Management",
      school: "Dr. Maleka University College",
      period: "2025 – Present",
      location: "Dhaka, Bangladesh"
    },
    {
      degree: "BBA in Management",
      school: "Dr. Maleka University College",
      period: "2022",
      location: "Dhaka, Bangladesh"
    },
    {
      degree: "HSC (Business Studies)",
      school: "Tatulia Degree College",
      period: "2017",
      location: "Satkhira, Bangladesh"
    },
    {
      degree: "SSC (Science Studies)",
      school: "Tatulia Pilot High School",
      period: "2015",
      location: "Satkhira, Bangladesh"
    }
  ];

  const certifications = [
    { name: "Advanced Excel", provider: "Udemy" },
    { name: "Python Coding", provider: "w3schools" },
    { name: "Digital Marketing Tools", provider: "Various" },
    { name: "2D Animation", provider: "Skill Development" }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient-white">Educational</span> <span className="neon-text-purple">Foundation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Degrees */}
          <div className="space-y-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-neonBlue via-neonPurple to-transparent opacity-30" />
            
            {degrees.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-space border-2 border-neonBlue z-10 shadow-[0_0_15px_rgba(0,209,255,0.5)]" />
                
                <div className="group glass p-8 rounded-2xl border-white/5 hover:border-neonBlue/30 hover:shadow-[0_10px_40px_rgba(0,209,255,0.15)] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-neonBlue text-sm font-bold px-3 py-1 glass rounded-full border-white/10 uppercase tracking-wider">{edu.period}</span>
                    <GraduationCap className="text-neonPurple" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neonBlue transition-colors">{edu.degree}</h3>
                  <p className="text-gray-400 font-medium mb-4">{edu.school}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={16} />
                    {edu.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Languages */}
          <div className="space-y-12">
            <div className="glass p-8 rounded-2xl border-white/5 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-neonPurple/10 rounded-full blur-[60px]" />
              
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Award className="text-neonPurple" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass p-5 rounded-2xl border-white/5 hover:border-neonPurple/30 transition-all">
                    <p className="text-white font-bold">{cert.name}</p>
                    <p className="text-gray-500 text-sm font-medium">{cert.provider}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <BookOpen className="text-neonBlue" size={28} />
                Languages
              </h3>
              <div className="space-y-4">
                { [
                  { name: "Bengali", level: "Native", p: 100 },
                  { name: "English", level: "Upper Intermediate", p: 80 },
                  { name: "Hindi", level: "Basic", p: 40 }
                ].map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-white font-bold">{lang.name}</span>
                      <span className="text-gray-500 font-medium">{lang.level}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-neonBlue shadow-[0_0_10px_rgba(0,242,255,0.3)]" 
                        style={{ width: `${lang.p}%` }}
                       />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
