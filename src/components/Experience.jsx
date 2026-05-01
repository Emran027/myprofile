import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Rocket, Users, Video, Search, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Executive – Business Development (Onboarding)",
      company: "Sokrio Technology Ltd.",
      period: "April 2024 – Present",
      icon: <Rocket className="text-neonBlue" />,
      description: "Onboarded 30+ FMCG companies and trained 1,500+ users. Developed GuideBox (40+ video tutorials) and searchable dashboard. Expert in master data structuring (product/price/territory mapping) and field activity insights.",
      highlights: ["30+ Companies Onboarded", "1,500+ Users Trained", "Master Data Expert"]
    },
    {
      title: "Business Development Executive",
      company: "The Tech Academy",
      period: "May 2024 - Sep 2024",
      icon: <Users className="text-neonPurple" />,
      description: "Managed client acquisition pipelines, conducted lead qualification, and maintained high conversion rates through strategic outreach and CRM management.",
      highlights: ["Pipeline Management", "Lead Conversion", "CRM Expert"]
    },
    {
      title: "Sales Validation Executive",
      company: "The Tech Academy",
      period: "Feb 2024 - May 2024",
      icon: <CheckCircle className="text-neonBlue" />,
      description: "Validated sales data, ensured accuracy in client records, and bridged communication between field teams and internal departments to optimize sales performance.",
      highlights: ["Data Validation", "Performance Analysis", "Sales Support"]
    },
    {
      title: "Digital Marketing Manager",
      company: "Ahmed Trading Ltd.",
      period: "Sept 2021 – June 2022",
      icon: <Users className="text-neonPurple" />,
      description: "Led a 6-member team and two designers. Improved client retention by 25% and maintained relationships with 15+ regular clients through performance tracking and social media strategy.",
      highlights: ["25% Retention Boost", "Led 6-member Team", "15+ Regular Clients"]
    },
    {
      title: "Merchandising Intern",
      company: "Midli Shoes Ltd.",
      period: "Feb 2019 – Jan 2020",
      icon: <Briefcase className="text-neonBlue" />,
      description: "Assisted in product sampling, quality control, and documentation. Gained hands-on experience in supply chain coordination and purchase order processes.",
      highlights: ["Quality Control", "Supply Chain", "Documentation"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient-white">Professional</span> <span className="neon-text-blue">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neonBlue via-neonPurple to-transparent opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-space border-2 border-neonBlue z-10 shadow-[0_0_20px_rgba(0,209,255,0.8)]" />

                {/* Main Card */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                  <div className="group relative glass p-8 rounded-2xl border-white/5 hover:border-neonBlue/30 hover:shadow-[0_20px_60px_rgba(0,209,255,0.25)] transition-[border-color,box-shadow,transform] duration-500 overflow-hidden">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 glass rounded-2xl bg-white/5 border-white/5 group-hover:scale-110 transition-transform">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-neonBlue transition-colors">{exp.title}</h3>
                        <p className="text-neonPurple text-sm font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-4 uppercase tracking-widest">
                      <Calendar size={14} />
                      {exp.period}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 uppercase tracking-tighter">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Side Metric Card (Fills Whitespace) */}
                <div className="hidden md:flex md:w-1/2 px-12 justify-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <div className="glass p-6 rounded-3xl border-white/5 hover:border-neonPurple/20 transition-colors group">
                      <div className="text-center">
                        <span className="block text-3xl font-black neon-text-blue mb-1">
                          {exp.highlights?.[0]?.split(' ')[0]}
                        </span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-tight block max-w-[120px]">
                          {exp.highlights?.[0]?.split(' ').slice(1).join(' ')}
                        </span>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-neonBlue/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
