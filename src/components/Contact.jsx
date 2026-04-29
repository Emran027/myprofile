import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink, Send, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl font-bold mb-8">Get In <span className="neon-text-blue">Touch</span></h2>
            <p className="text-gray-400 mb-12">
              Ready to streamline your business development and onboarding processes? Let's connect and discuss how I can add value to your team.
            </p>

            <div className="space-y-8">
              {[
                { icon: <MapPin className="text-neonBlue" />, label: "Location", value: "Dhaka, Bangladesh" },
                { icon: <Mail className="text-neonPurple" />, label: "Email", value: "emranhoseain220@gmail.com" },
                { icon: <Phone className="text-neonBlue" />, label: "Phone", value: "+880 1896-270282" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="p-4 glass rounded-2xl border-white/5 group-hover:border-neonBlue/30 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{item.label}</p>
                    <p className="text-white font-medium group-hover:text-neonBlue transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <a 
                href="https://www.linkedin.com/in/emran-hossain-508793304" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 glass rounded-2xl border-neonPurple/30 text-neonPurple font-bold hover:bg-neonPurple/10 hover:border-neonPurple transition-all"
              >
                <ExternalLink size={20} />
                Connect on LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="glass p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden">
               {/* Background Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-neonPurple/5 blur-[80px] rounded-full -mr-20 -mt-20" />
              
              <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neonBlue/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neonBlue/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neonBlue/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="How can I help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neonBlue/50 focus:bg-white/10 transition-all resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-neonBlue to-neonPurple text-black font-black rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,242,255,0.2)] hover:shadow-[0_15px_40px_rgba(188,19,254,0.3)] transition-all"
                  >
                    Send Message <Send size={20} />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
