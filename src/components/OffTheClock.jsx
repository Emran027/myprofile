import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Heart, Info, Palette, Compass, ChevronLeft, ChevronRight } from 'lucide-react';

// Import mosque images
import img1 from '../assets/mosque/উলবাদান জামে মসজিদ.jpg';
import img2 from '../assets/mosque/কসাইটুলি জামে মসজিদ.jpg';
import img3 from '../assets/mosque/কার্তালাব খান মসজিদ.jpg';
import img4 from '../assets/mosque/খান মোহাম্মদ মসজিদ.jpg';
import img5 from '../assets/mosque/ট্যানারি মোড় মসজিদ.jpg';
import img6 from '../assets/mosque/তারা মসজিদ.jpg';
import img7 from '../assets/mosque/বায়তুল মোকাররম মসজিদ.jpg';
import img8 from '../assets/mosque/বিনত বিবির মসজিদ .jpg';
import img9 from '../assets/mosque/মুসা খান মসজিদ.jpg';
import img10 from '../assets/mosque/লালবাগ কেল্লা মসজিদ.jpg';
import img11 from '../assets/mosque/লালবাগ শাহী মসজিদ.jpg';
import img12 from '../assets/mosque/সাত গম্বুজ মসজিদ.jpg';
import img13 from '../assets/mosque/হাজী শাহাবাজ মসজিদ.jpg';

// Import photography images
import photo1 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.22.16 PM.jpeg';
import photo2 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.23.18 PM.jpeg';
import photo3 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.24.40 PM.jpeg';
import photo4 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.25.46 PM.jpeg';
import photo5 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.26.16 PM.jpeg';
import photo6 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.26.58 PM.jpeg';
import photo7 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.27.49 PM.jpeg';
import photo8 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.31.28 PM (1).jpeg';
import photo9 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.31.28 PM.jpeg';
import photo10 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.31.29 PM (1).jpeg';
import photo11 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.31.29 PM.jpeg';
import photo12 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.31.30 PM.jpeg';
import photo13 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.31.31 PM (1).jpeg';
import photo14 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.31.31 PM.jpeg';
import photo15 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.31.32 PM (1).jpeg';
import photo16 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.31.32 PM.jpeg';
import photo17 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.31.33 PM (1).jpeg';
import photo18 from '../assets/photography/WhatsApp Image 2026-05-01 at 1.31.33 PM.jpeg';

const OffTheClock = () => {
  const [activeTab, setActiveTab] = useState('sacred');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const photoScrollRef = React.useRef(null);

  const tabs = [
    { id: 'sacred', label: 'The Sacred Trails', icon: <Compass size={18} /> },
    { id: 'photography', label: 'Wild Lens', icon: <Camera size={18} /> },
    { id: 'sketches', label: 'Sketches & Strokes', icon: <Palette size={18} /> },
  ];

  const photos = [
    photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9,
    photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18
  ];

  const mosques = [
    { name: "Binat Bibi Mosque", localName: "বিনত বিবির মসজিদ", img: img8, year: "1454", location: "Narinda" },
    { name: "Tara Mosque (Star Mosque)", localName: "তারা মসজিদ", img: img6, year: "18th Century", location: "Armanitola" },
    { name: "Sat Gambuj Mosque", localName: "সাত গম্বুজ মসজিদ", img: img12, year: "1680", location: "Mohammadpur" },
    { name: "Lalbagh Fort Mosque", localName: "লালবাগ কেল্লা মসজিদ", img: img10, year: "1678", location: "Lalbagh" },
    { name: "Khan Mohammad Mridha Mosque", localName: "খান মোহাম্মদ মসজিদ", img: img4, year: "1704", location: "Lalbagh" },
    { name: "Kasaituli Jame Mosque", localName: "কসাইটুলি জামে মসজিদ", img: img2, year: "1919", location: "Old Dhaka" },
    { name: "Kartalab Khan Mosque", localName: "কার্তালাব খান মসজিদ", img: img3, year: "1701", location: "Begum Bazar" },
    { name: "Musa Khan Mosque", localName: "মুসা খান মসজিদ", img: img9, year: "18th Century", location: "Dhaka University" },
    { name: "Haji Shahbaz Mosque", localName: "হাজী শাহাবাজ মসজিদ", img: img13, year: "1679", location: "Ramna" },
    { name: "Baitul Mukarram", localName: "বায়তুল মোকাররম মসজিদ", img: img7, year: "1968", location: "Paltan" },
    { name: "Lalbagh Shahi Mosque", localName: "লালবাগ শাহী মসজিদ", img: img11, year: "1706", location: "Lalbagh" },
    { name: "Tannery More Mosque", localName: "ট্যানারি মোড় মসজিদ", img: img5, year: "Historical", location: "Hazaribagh" },
    { name: "Ulbadan Jame Mosque", localName: "উলবাদান জামে মসজিদ", img: img1, year: "Historical", location: "Old Dhaka" }
  ];

  // Auto-slide for photography
  useEffect(() => {
    if (activeTab === 'photography' && selectedPhotoIndex === null) {
      const timer = setInterval(() => {
        setActivePhotoIndex((prev) => (prev + 1) % photos.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [activeTab, selectedPhotoIndex, photos.length]);

  // Scroll to active photo
  useEffect(() => {
    if (photoScrollRef.current && activeTab === 'photography') {
      const container = photoScrollRef.current;
      const cardWidth = window.innerWidth < 768 ? 320 : 420; // card width (280/380) + gap (40)
      container.scrollTo({
        left: activePhotoIndex * cardWidth - (container.offsetWidth / 2) + (cardWidth / 2),
        behavior: 'smooth'
      });
    }
  }, [activePhotoIndex, activeTab]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  const nextPhoto = () => setSelectedPhotoIndex((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setSelectedPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);

  // Auto-rotate slides for Sacred Trails
  useEffect(() => {
    if (activeTab === 'sacred') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % mosques.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [activeTab, mosques.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % mosques.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + mosques.length) % mosques.length);

  return (
    <section id="off-the-clock" className="py-24 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient-white">Off The</span> <span className="neon-text-blue">Clock</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full mb-12" />
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 border ${
                  activeTab === tab.id 
                    ? 'glass border-neonBlue text-neonBlue shadow-[0_0_20px_rgba(0,209,255,0.2)]' 
                    : 'border-white/5 text-gray-500 hover:border-white/20 hover:text-gray-300'
                }`}
              >
                {tab.icon}
                <span className="font-bold text-sm tracking-wide">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'sacred' && (
            <motion.div 
              key="sacred"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Story Header */}
              <div className="max-w-4xl mx-auto mb-20">
                <div className="glass p-8 md:p-10 rounded-3xl border-white/5 relative">
                  <h3 className="text-2xl font-bold mb-8 text-white italic text-center">"আত্মিক প্রশান্তি: <span className="neon-text-blue">নিজের খোঁজে স্রষ্টার পথে</span>"</h3>
                  <div className="space-y-6 text-gray-300 leading-relaxed text-lg text-justify font-light">
                    <p>
                      "কথায় আছে, কিছু জ্ঞান বইয়ের পাতায় থাকে না, তা থাকে পথের বাঁকে আর ব্যক্তিগত অভিজ্ঞতার গভীরে। তেমনি এক অজানাকে জানার তৃষ্ণা থেকে অনেক আগে আমি বেরিয়ে পড়েছিলাম এক অনন্য সফরে—যার গন্তব্য ছিল আমাদের ইতিহাসের সাক্ষী হয়ে দাঁড়িয়ে থাকা প্রাচীন সব মসজিদ।
                    </p>
                    <p>
                      এই সফরটি আমার কাছে কেবল ভ্রমণ ছিল না, বরং এটি ছিল এক আধ্যাত্মিক রূপান্তর। নির্জন সেই প্রাচীন মসজিদগুলোর কারুকাজ আর শান্ত পরিবেশের প্রতিটি মুহূর্ত আমাকে নতুন করে ভাবতে শিখিয়েছে। শিখিয়েছে প্রতিটি নিঃশ্বাসে মহান আল্লাহ সুবহানাহু ওয়া তা’আলার প্রতি কৃতজ্ঞ থাকার প্রকৃত মহিমা।
                    </p>
                    <p>
                      মানুষের পথচলা তখনই সুন্দর হয় যখন পাশে থাকে অকৃত্রিম কিছু বন্ধু। এই দীর্ঘ যাত্রায় আমার প্রতিটা পদক্ষেপের সঙ্গী ছিল প্রিয় কিছু মানুষ। আর প্রতিটি স্মৃতির ফ্রেমকে জীবন্ত করে রাখার জন্য বিশেষ কৃতজ্ঞতা আমার প্রিয় বন্ধু <span className="text-neonPurple font-bold">হৃদয় মাহমুদ খান</span>-এর প্রতি, যার ক্যামেরার লেন্স আমার এই অর্থবহ মুহূর্তগুলোকে পরম মমতায় বন্দি করে রেখেছে।"
                    </p>
                  </div>
                </div>
              </div>

              {/* 3D Carousel / Slider */}
              <div className="relative h-[500px] md:h-[600px] flex items-center justify-center perspective-1000">
                <div className="relative w-full max-w-[320px] md:max-w-[450px] h-full">
                  {mosques.map((mosque, index) => {
                    const offset = (index - currentSlide + mosques.length) % mosques.length;
                    const isActive = offset === 0;
                    
                    if (offset > 2 && offset < mosques.length - 2) return null;

                    return (
                      <motion.div
                        key={index}
                        initial={false}
                        animate={{
                          x: offset === 0 ? 0 : offset === 1 ? '40%' : offset === 2 ? '70%' : offset === mosques.length - 1 ? '-40%' : '-70%',
                          scale: offset === 0 ? 1 : offset === 1 || offset === mosques.length - 1 ? 0.85 : 0.7,
                          zIndex: 10 - Math.abs(offset === 0 ? 0 : offset > mosques.length / 2 ? mosques.length - offset : offset),
                          opacity: offset === 0 ? 1 : offset === 1 || offset === mosques.length - 1 ? 0.6 : 0.3,
                          rotateY: offset === 0 ? 0 : offset === 1 || offset === 2 ? -25 : 25,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="absolute inset-0 cursor-pointer"
                        onClick={() => setCurrentSlide(index)}
                      >
                        <div className="h-full w-full glass p-3 rounded-[2rem] border-white/10 shadow-2xl group">
                          <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden">
                            <img 
                              src={mosque.img} 
                              alt={mosque.name} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            
                            {/* Card Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform group-hover:translate-y-[-5px]">
                              <div className="flex items-center gap-2 text-neonBlue mb-2">
                                <MapPin size={16} />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">{mosque.location}</span>
                              </div>
                              <h4 className="text-2xl font-black text-white mb-1">{mosque.name}</h4>
                              <p className="text-neonPurple text-sm font-bold mb-4">{mosque.localName}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">EST. {mosque.year}</span>
                                <Heart size={20} className="text-white/20 group-hover:text-red-500 transition-colors" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Slider Controls */}
                <div className="absolute inset-x-0 bottom-[-80px] flex justify-center items-center gap-8">
                  <button onClick={prevSlide} className="w-14 h-14 glass rounded-full flex items-center justify-center text-gray-400 hover:text-neonBlue hover:border-neonBlue transition-all border border-white/5">
                    <ChevronLeft size={24} />
                  </button>
                  <div className="flex gap-2">
                    {mosques.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-neonBlue' : 'w-2 bg-white/10'}`} 
                      />
                    ))}
                  </div>
                  <button onClick={nextSlide} className="w-14 h-14 glass rounded-full flex items-center justify-center text-gray-400 hover:text-neonBlue hover:border-neonBlue transition-all border border-white/5">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'photography' && (
            <motion.div 
              key="photography"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              {/* Scroll Hint */}
              <div className="flex flex-col items-center mb-8">
                <div className="flex items-center gap-4 text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">
                  <motion.div
                    animate={{ x: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ChevronLeft size={14} className="text-neonBlue" />
                  </motion.div>
                  Swipe to Explore
                  <motion.div
                    animate={{ x: [10, -10, 10] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ChevronRight size={14} className="text-neonBlue" />
                  </motion.div>
                </div>
              </div>

              {/* Side Masks for Depth */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none md:block hidden" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none md:block hidden" />

              <motion.div 
                ref={photoScrollRef}
                className="flex overflow-x-auto gap-10 pb-16 pt-8 px-8 md:px-40 no-scrollbar scroll-smooth snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1 : 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 0,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  style={{ perspective: "1000px" }}
                  className="flex-none w-[280px] md:w-[380px] relative group cursor-pointer snap-center"
                  onClick={() => setSelectedPhotoIndex(index)}
                >
                  <div className="glass p-4 rounded-[2rem] border-white/10 shadow-2xl transition-all duration-500 group-hover:border-neonBlue/30 group-hover:shadow-[0_20px_50px_rgba(0,209,255,0.2)]">
                    <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-4">
                      <img 
                        src={photo} 
                        alt={`Capture ${index + 1}`} 
                        className="w-full h-full object-cover transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <div className="flex justify-between items-center px-2">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <p className="text-[10px] font-black text-neonBlue tracking-widest uppercase">Shot No. {index + 1}</p>
                        <h4 className="text-xs font-bold text-white">Wild Moments</h4>
                      </div>
                      <div className="w-8 h-8 glass rounded-full flex items-center justify-center text-white/20 group-hover:text-neonBlue group-hover:bg-neonBlue/10 transition-all">
                        <Camera size={14} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-neonBlue/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-full" />
                </motion.div>
              ))}
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'sketches' && (
            <motion.div 
              key="sketches"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center min-h-[400px] text-center"
            >
              <div className="w-24 h-24 glass rounded-full flex items-center justify-center mb-6 text-neonPurple border-neonPurple/20">
                <Palette size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sketches & Strokes</h3>
              <p className="text-gray-500 max-w-md">The art of visual storytelling through pencil and brush. Exploring the world one stroke at a time.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedPhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
              onClick={() => setSelectedPhotoIndex(null)}
            >
              <motion.button 
                className="absolute top-10 right-10 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-red-500 transition-colors z-[110]"
                onClick={() => setSelectedPhotoIndex(null)}
              >
                <ChevronRight className="rotate-45" size={24} />
              </motion.button>

              <div className="relative w-full h-full flex items-center justify-center p-4 md:p-20" onClick={(e) => e.stopPropagation()}>
                {/* Navigation Arrows */}
                <button 
                  onClick={prevPhoto}
                  className="absolute left-4 md:left-10 w-14 h-14 glass rounded-full flex items-center justify-center text-white hover:text-neonBlue hover:border-neonBlue transition-all border border-white/5 z-[110]"
                >
                  <ChevronLeft size={32} />
                </button>
                
                <button 
                  onClick={nextPhoto}
                  className="absolute right-4 md:right-10 w-14 h-14 glass rounded-full flex items-center justify-center text-white hover:text-neonBlue hover:border-neonBlue transition-all border border-white/5 z-[110]"
                >
                  <ChevronRight size={32} />
                </button>

                {/* Main Image */}
                <motion.div
                  key={selectedPhotoIndex}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none"
                >
                  <img 
                    src={photos[selectedPhotoIndex]} 
                    alt="Enlarged view" 
                    className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10 pointer-events-auto"
                  />
                  <div className="mt-6 text-center pointer-events-auto">
                    <p className="text-neonBlue font-black uppercase tracking-[0.3em] text-[10px] mb-1">Wild Lens Collection</p>
                    <h3 className="text-white text-xl font-bold">Frame {selectedPhotoIndex + 1}</h3>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1500px;
        }
      `}</style>
    </section>
  );
};

export default OffTheClock;
