import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, ExternalLink, Send, Phone, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xdabalbj");

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const socials = [
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.205 24 24 23.227 24 22.271V1.729C24 .774 23.205 0 22.225 0z"/>
        </svg>
      ), 
      link: "https://www.linkedin.com/in/emran-hossain-508793304", 
      label: "LinkedIn" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      link: "https://www.facebook.com/share/14bPUYuA49Z/", 
      label: "Facebook" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ), 
      link: "https://github.com/Emran027", 
      label: "GitHub" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      link: "https://youtube.com/@ehossain007?si=LRiq-7wSJ5aUXZJu", 
      label: "YouTube" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ), 
      link: "https://wa.me/8801896270282", 
      label: "WhatsApp" 
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-gradient-white">Get In</span> <span className="neon-text-blue">Touch</span>
            </h2>
            <p className="text-gray-400 mb-12">
              Ready to streamline your business development and onboarding processes? Let's connect and discuss how I can add value to your team.
            </p>

            <div className="space-y-8">
              {[
              { icon: <Mail className="text-neonBlue" />, label: "Email", value: "emran.nextgen@gmail.com", link: "mailto:emran.nextgen@gmail.com" },
              { icon: <Phone className="text-neonPurple" />, label: "Phone", value: "+880 1896-270282", link: "tel:+8801896270282" },
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

            <div className="mt-12 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex flex-wrap gap-4">
                  {socials.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-neonPurple hover:border-neonPurple/50 transition-all border border-white/5"
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-2/3"
          >
            <div className="glass p-10 rounded-3xl border-white/5 relative overflow-hidden">
               {/* Background Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-neonBlue/5 blur-[80px] rounded-full -mr-20 -mt-20" />
              
              <AnimatePresence mode="wait">
                {state.succeeded ? (
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
                        id="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-neonBlue/50 focus:bg-white/[0.06] transition-all text-white placeholder:text-gray-700"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs ml-1" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-neonBlue/50 focus:bg-white/[0.06] transition-all text-white placeholder:text-gray-700"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs ml-1" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-bold text-gray-500 ml-1">Subject</label>
                      <input 
                        type="text" 
                        name="subject"
                        id="subject"
                        required
                        placeholder="Project Inquiry"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-neonBlue/50 focus:bg-white/[0.06] transition-all text-white placeholder:text-gray-700"
                      />
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs ml-1" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-bold text-gray-500 ml-1">Message</label>
                      <textarea 
                        name="message"
                        id="message"
                        required
                        rows="5" 
                        placeholder="How can I help you?"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-neonBlue/50 focus:bg-white/[0.06] transition-all resize-none text-white placeholder:text-gray-700"
                      ></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs ml-1" />
                    </div>
                    <div className="md:col-span-2">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={state.submitting}
                        className={`w-full md:w-auto px-12 py-4 bg-gradient-to-r from-neonBlue to-neonPurple text-black font-black rounded-xl flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(0,209,255,0.3)] hover:shadow-[0_15px_50px_rgba(255,241,139,0.4)] transition-all ${state.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {state.submitting ? 'Sending...' : 'Send Message'} <Send size={20} />
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
