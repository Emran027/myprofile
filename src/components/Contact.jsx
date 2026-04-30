import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, ExternalLink, Send, Phone, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl font-bold mb-8">Get In <span className="neon-text-blue">Touch</span></h2>
            <p className="text-gray-400 mb-12">
              Ready to streamline your business development and onboarding processes? Let's connect and discuss how I can add value to your team.
            </p>

            <div className="space-y-8">
              {[
              { icon: <Mail className="text-neonBlue" />, label: "Email", value: "emranhossain027@gmail.com", link: "mailto:emranhossain027@gmail.com" },
              { icon: <Phone className="text-neonPurple" />, label: "Phone", value: "+880 1608-142137", link: "tel:+8801608142137" },
              { icon: <MapPin className="text-neonBlue" />, label: "Location", value: "Dhaka, Bangladesh", link: "#" }
            ].map((info, i) => (
              <motion.a
                key={i}
                href={info.link}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 glass rounded-2xl border-white/5 hover:border-neonBlue/30 transition-all group"
              >
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-bold">{info.label}</p>
                  <p className="text-white font-medium group-hover:text-neonBlue transition-colors">{info.value}</p>
                </div>
              </motion.a>
            ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <a 
                href="https://www.linkedin.com/in/emran-hossain-508793304" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 glass rounded-xl border-neonBlue/30 text-neonBlue font-bold hover:bg-neonBlue/10 hover:border-neonBlue transition-all"
              >
                <ExternalLink size={20} />
                Connect on LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="lg:w-2/3"
          >
            <div className="glass p-10 rounded-3xl border-white/5 relative overflow-hidden">
               {/* Background Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-neonBlue/5 blur-[80px] rounded-full -mr-20 -mt-20" />
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-neonBlue/20 rounded-full flex items-center justify-center mb-6 border border-neonBlue/50">
                      <CheckCircle2 size={40} className="text-neonBlue" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-gray-400 max-w-sm">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-neonPurple font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 ml-1">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-neonBlue/50 focus:bg-white/[0.06] transition-all text-white placeholder:text-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-neonBlue/50 focus:bg-white/[0.06] transition-all text-white placeholder:text-gray-700"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-bold text-gray-500 ml-1">Subject</label>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project Inquiry"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-neonBlue/50 focus:bg-white/[0.06] transition-all text-white placeholder:text-gray-700"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-bold text-gray-500 ml-1">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5" 
                        placeholder="How can I help you?"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-neonBlue/50 focus:bg-white/[0.06] transition-all resize-none text-white placeholder:text-gray-700"
                      ></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        className={`w-full md:w-auto px-12 py-4 bg-gradient-to-r from-neonBlue to-neonPurple text-black font-black rounded-xl flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(0,209,255,0.3)] hover:shadow-[0_15px_50px_rgba(255,241,139,0.4)] transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
