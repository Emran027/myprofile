import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "MBA in Business Management",
      institution: "Dr. Maleka University College",
      period: "2025 – Present (Expected: 2027)",
      details: "Focusing on advanced management strategies and operational excellence."
    },
    {
      degree: "BBA in Management",
      institution: "Dr. Maleka University College",
      period: "2022",
      details: "Developed strong fundamentals in business administration."
    },
    {
      degree: "HSC (Business Studies)",
      institution: "Tatulia Degree College",
      period: "2017",
      details: "Completed Higher Secondary Certificate in Business Studies."
    },
    {
      degree: "SSC (Science Studies)",
      institution: "Tatulia Pilot High School",
      period: "2015",
      details: "Completed Secondary School Certificate in Science Studies."
    }
  ];

  const certifications = [
    { name: "Advanced Excel", provider: "Udemy" },
    { name: "Python Coding", provider: "w3schools" },
    { name: "Digital Marketing Tools", provider: "Various" }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Education Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
              <GraduationCap className="text-neonBlue" size={40} />
              Academic <span className="neon-text-blue">Background</span>
            </h2>

            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative pl-10 group">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 group-hover:bg-neonBlue/30 transition-colors" />
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-neonBlue shadow-[0_0_8px_#00f2ff]" />
                  
                  <p className="text-sm text-neonPurple font-semibold mb-1 uppercase tracking-widest">{item.period}</p>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-neonBlue transition-colors">{item.degree}</h3>
                  <p className="text-gray-300 font-medium mb-3">{item.institution}</p>
                  <p className="text-gray-500 text-sm max-w-xl">{item.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Languages */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Award className="text-neonPurple" size={28} />
                Certifications
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass p-5 rounded-2xl border-white/5 hover:border-neonPurple/30 transition-all">
                    <p className="text-white font-bold">{cert.name}</p>
                    <p className="text-gray-500 text-sm">{cert.provider}</p>
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
                {[
                  { name: "Bengali", level: "Native", p: 100 },
                  { name: "English", level: "Upper Intermediate", p: 80 },
                  { name: "Hindi", level: "Basic", p: 40 }
                ].map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-white font-medium">{lang.name}</span>
                      <span className="text-gray-500">{lang.level}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.p}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-neonBlue" 
                       />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
