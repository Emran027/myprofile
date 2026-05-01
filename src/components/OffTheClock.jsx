import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Heart, Palette, Compass, ChevronLeft, ChevronRight, Info, X } from 'lucide-react';

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

// Import art images
import art1 from '../assets/art/WhatsApp Image 2026-05-01 at 4.37.19 PM (1).jpeg';
import art2 from '../assets/art/WhatsApp Image 2026-05-01 at 4.37.19 PM.jpeg';
import art3 from '../assets/art/WhatsApp Image 2026-05-01 at 4.37.20 PM (1).jpeg';
import art4 from '../assets/art/WhatsApp Image 2026-05-01 at 4.37.20 PM.jpeg';
import art5 from '../assets/art/WhatsApp Image 2026-05-01 at 4.37.21 PM.jpeg';
import art6 from '../assets/art/WhatsApp Image 2026-05-01 at 4.37.25 PM (1).jpeg';
import art7 from '../assets/art/WhatsApp Image 2026-05-01 at 4.37.25 PM.jpeg';
import art8 from '../assets/art/WhatsApp Image 2026-05-01 at 4.37.26 PM (1).jpeg';
import art9 from '../assets/art/WhatsApp Image 2026-05-01 at 4.37.26 PM (2).jpeg';
import art10 from '../assets/art/WhatsApp Image 2026-05-01 at 4.37.26 PM.jpeg';
import art11 from '../assets/art/WhatsApp Image 2026-05-01 at 4.37.27 PM.jpeg';
import art12 from '../assets/art/WhatsApp Image 2026-05-01 at 7.43.20 PM.jpeg';
import art13 from '../assets/art/WhatsApp Image 2026-05-01 at 7.43.21 PM (1).jpeg';
import art14 from '../assets/art/WhatsApp Image 2026-05-01 at 7.43.22 PM (1).jpeg';
import art15 from '../assets/art/WhatsApp Image 2026-05-01 at 7.43.22 PM.jpeg';
import art16 from '../assets/art/WhatsApp Image 2026-05-01 at 7.43.23 PM (1).jpeg';
import art17 from '../assets/art/WhatsApp Image 2026-05-01 at 7.43.23 PM.jpeg';
import art18 from '../assets/art/WhatsApp Image 2026-05-01 at 7.43.24 PM (1).jpeg';
import art19 from '../assets/art/WhatsApp Image 2026-05-01 at 7.43.24 PM.jpeg';
import art20 from '../assets/art/WhatsApp Image 2026-05-01 at 7.43.25 PM.jpeg';

const OffTheClock = () => {
  const [activeTab, setActiveTab] = useState('sacred');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentArtSlide, setCurrentArtSlide] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState(null); 
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const photoScrollRef = useRef(null);

  const tabs = [
    { id: 'sacred', label: 'The Sacred Trails', icon: <Compass size={18} /> },
    { id: 'photography', label: 'Wild Lens', icon: <Camera size={18} /> },
    { id: 'sketches', label: 'Sketches & Strokes', icon: <Palette size={18} /> },
  ];

  const photos = [
    photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9,
    photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18
  ];

  const arts = [
    art1, art2, art3, art4, art5, art6, art7, art8, art9, art10,
    art11, art12, art13, art14, art15, art16, art17, art18, art19, art20
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

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedMedia) return;
      if (e.key === 'ArrowRight') nextMedia();
      if (e.key === 'ArrowLeft') prevMedia();
      if (e.key === 'Escape') setSelectedMedia(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia]);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      if (!selectedMedia) {
        if (activeTab === 'sacred') setCurrentSlide((prev) => (prev + 1) % mosques.length);
        if (activeTab === 'photography') setActivePhotoIndex((prev) => (prev + 1) % photos.length);
        if (activeTab === 'sketches') setCurrentArtSlide((prev) => (prev + 1) % arts.length);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [activeTab, selectedMedia, mosques.length, photos.length, arts.length]);

  // Scroll to active photo
  useEffect(() => {
    if (photoScrollRef.current && activeTab === 'photography') {
      const container = photoScrollRef.current;
      const cardWidth = window.innerWidth < 768 ? 320 : 420; 
      container.scrollTo({
        left: activePhotoIndex * cardWidth - (container.offsetWidth / 2) + (cardWidth / 2),
        behavior: 'smooth'
      });
    }
  }, [activePhotoIndex, activeTab]);

  const nextMedia = () => {
    setSelectedMedia(prev => {
      if (!prev) return null;
      const list = prev.type === 'photo' ? photos : prev.type === 'art' ? arts : mosques.map(m => m.img);
      return { ...prev, index: (prev.index + 1) % list.length };
    });
  };

  const prevMedia = () => {
    setSelectedMedia(prev => {
      if (!prev) return null;
      const list = prev.type === 'photo' ? photos : prev.type === 'art' ? arts : mosques.map(m => m.img);
      return { ...prev, index: (prev.index - 1 + list.length) % list.length };
    });
  };

  return (
    <section id="off-the-clock" className="pt-32 pb-24 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">
            <span className="text-white">Off The</span> <span className="text-neonBlue">Clock</span>
          </h2>
          <div className="w-24 h-1 bg-neonBlue mx-auto rounded-full mb-12" />
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 border ${activeTab === tab.id ? 'glass border-neonBlue text-neonBlue shadow-[0_0_20px_rgba(0,209,255,0.2)]' : 'border-white/5 text-gray-500 hover:border-white/20 hover:text-gray-300'}`}>
                {tab.icon} <span className="font-bold text-sm tracking-wide">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'sacred' && (
            <motion.div key="sacred" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="max-w-4xl mx-auto mb-20">
                <div className="glass p-10 rounded-3xl border-white/5 text-center">
                  <h3 className="text-2xl font-bold mb-8 text-white italic">"আত্মিক প্রশান্তি: <span className="text-neonBlue">নিজের খোঁজে স্রষ্টার পথে</span>"</h3>
                  <div className="space-y-4 text-gray-300 text-lg leading-relaxed italic font-light">
                    <p>"কথায় আছে, কিছু জ্ঞান বইয়ের পাতায় থাকে না, তা থাকে পথের বাঁকে আর ব্যক্তিগত অভিজ্ঞতার গভীরে। তেমনি এক অজানাকে জানার তৃষ্ণা থেকে অনেক আগে আমি বেরিয়ে পড়েছিলাম এক অনন্য সফরে—যার গন্তব্য ছিল আমাদের ইতিহাসের সাক্ষী হয়ে দাঁড়িয়ে থাকা প্রাচীন সব মসজিদ।"</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[550px] flex items-center justify-center perspective-1000">
                <div className="relative w-full max-w-[400px] h-full">
                  {mosques.map((mosque, index) => {
                    const offset = (index - currentSlide + mosques.length) % mosques.length;
                    if (offset > 2 && offset < mosques.length - 2) return null;
                    const xOffset = offset === 0 ? 0 : offset === 1 ? '35%' : offset === 2 ? '65%' : offset === mosques.length - 1 ? '-35%' : '-65%';
                    return (
                      <motion.div key={index} animate={{ x: xOffset, scale: offset === 0 ? 1 : 0.85, zIndex: 10 - Math.abs(offset === 0 ? 0 : offset), opacity: offset === 0 ? 1 : 0.5, rotateY: offset === 0 ? 0 : offset === 1 ? -25 : 25 }} transition={{ type: 'spring', stiffness: 200, damping: 25 }} className="absolute inset-0 cursor-pointer" onClick={() => { if(offset === 0) setSelectedMedia({type: 'mosque', index}); else setCurrentSlide(index); }}>
                        <div className="h-full w-full glass p-3 rounded-[2.5rem] border-white/10 overflow-hidden group">
                          <img src={mosque.img} alt="" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent p-8 flex flex-col justify-end">
                            <h4 className="text-xl font-bold text-white mb-1">{mosque.localName}</h4>
                            <div className="flex items-center gap-2 text-neonBlue mb-2"><MapPin size={14} /><span className="text-xs font-bold uppercase tracking-widest">{mosque.location}</span></div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'photography' && (
            <motion.div key="photography" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative">
              <div className="max-w-4xl mx-auto mb-16 text-center italic">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white italic leading-relaxed">"সময়ের স্রোতকে বন্দি করে রাখছি আজ, যেন কোনো এক অলস বিকেলে রকিং চেয়ারে বসে এক কাপ চায়ের চুমুকে নিজেকে খুঁজে পাই এই ফ্রেমগুলোর মাঝে।"</h3>
                <p className="text-neonBlue font-bold text-lg">— ইমরান হোসেন</p>
              </div>
              <motion.div ref={photoScrollRef} className="flex overflow-x-auto gap-10 pb-20 pt-8 px-4 md:px-40 no-scrollbar scroll-smooth snap-x items-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {photos.map((photo, index) => {
                  const isActive = index === activePhotoIndex;
                  return (
                    <motion.div key={index} animate={{ scale: isActive ? 1.05 : 0.9, rotate: isActive ? 0 : (index % 2 === 0 ? -2 : 2), opacity: isActive ? 1 : 0.5 }} className="flex-none w-[280px] md:w-[380px] relative group cursor-pointer snap-center" onClick={() => { setActivePhotoIndex(index); setSelectedMedia({type: 'photo', index}); }}>
                      <div className="bg-white p-4 pb-16 shadow-2xl rounded-sm border border-gray-200">
                        <img src={photo} alt="" className="w-full h-[400px] object-cover" />
                        <div className="text-center mt-4"><p className="font-handwriting text-gray-800 text-xl">Wild Capture #{index + 1}</p></div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'sketches' && (
            <motion.div key="sketches" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative py-20 flex flex-col items-center">
              <div className="max-w-4xl mx-auto mb-20 text-center">
                <h3 className="text-3xl font-bold mb-4 text-white italic">"নৈশব্দের ক্যানভাসে <span className="text-neonBlue">স্বপ্নের অনুরণন</span>"</h3>
                <p className="text-gray-400">"ক্লান্ত দিনের শেষে যখন কলম আর পেন্সিলেরা কথা বলতে শুরু করে..."</p>
              </div>

              {/* 3D Stacked Card Slider */}
              <div className="relative h-[550px] w-full flex items-center justify-center perspective-1000">
                <div className="relative w-full max-w-[320px] md:max-w-[420px] h-full flex items-center justify-center">
                  {arts.map((art, index) => {
                    const total = arts.length;
                    const offset = (index - currentArtSlide + total) % total;
                    const diff = offset > total / 2 ? offset - total : offset;
                    if (Math.abs(diff) > 2) return null;
                    const isCenter = offset === 0;

                    return (
                      <motion.div
                        key={index}
                        animate={{
                          x: diff * (window.innerWidth < 768 ? 60 : 100),
                          scale: isCenter ? 1.15 : 0.85,
                          zIndex: 10 - Math.abs(diff),
                          rotateY: diff * -15,
                          opacity: isCenter ? 1 : 0.6,
                        }}
                        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                        className="absolute inset-0 cursor-pointer"
                        onClick={() => {
                          if (isCenter) setSelectedMedia({ type: 'art', index });
                          else setCurrentArtSlide(index);
                        }}
                      >
                        <div className={`h-full w-full glass p-3 rounded-[2rem] border-white/10 overflow-hidden shadow-2xl transition-all duration-700 ${isCenter ? 'border-neonBlue' : ''}`}>
                          <img src={art} alt="" className={`w-full h-full object-cover rounded-[1.5rem] transition-all duration-700 ${isCenter ? 'grayscale-0' : 'grayscale'}`} />
                          {isCenter && (
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent text-center">
                               <p className="text-neonBlue font-black uppercase tracking-widest text-[10px] mb-1">Sketches & Strokes</p>
                               <h4 className="text-white font-bold">Art Piece #{index + 1}</h4>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="absolute -bottom-10 flex gap-6 z-20">
                  <button onClick={() => setCurrentArtSlide((prev) => (prev - 1 + arts.length) % arts.length)} className="w-14 h-14 glass rounded-full flex items-center justify-center text-neonBlue border-neonBlue/30 hover:bg-neonBlue/10 transition-all"><ChevronLeft size={28} /></button>
                  <button onClick={() => setCurrentArtSlide((prev) => (prev + 1) % arts.length)} className="w-14 h-14 glass rounded-full flex items-center justify-center text-neonBlue border-neonBlue/30 hover:bg-neonBlue/10 transition-all"><ChevronRight size={28} /></button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Improved Lightbox Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-2xl"
              onClick={() => setSelectedMedia(null)}
            >
              {/* Top Bar for Close Button */}
              <div className="absolute top-0 left-0 right-0 p-6 flex justify-end z-[1001]">
                <button 
                  className="w-12 h-12 md:w-16 md:h-16 glass rounded-full flex items-center justify-center text-white hover:text-red-500 border border-white/10 transition-all shadow-xl"
                  onClick={(e) => { e.stopPropagation(); setSelectedMedia(null); }}
                >
                  <X size={32} />
                </button>
              </div>

              {/* Responsive Navigation Arrows */}
              <div className="absolute inset-x-0 px-4 md:px-12 flex justify-between items-center z-[1000] pointer-events-none">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevMedia(); }} 
                  className="w-14 h-14 md:w-20 md:h-20 glass rounded-full flex items-center justify-center text-white hover:text-neonBlue border border-white/10 pointer-events-auto transition-all shadow-lg"
                >
                  <ChevronLeft size={40} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextMedia(); }} 
                  className="w-14 h-14 md:w-20 md:h-20 glass rounded-full flex items-center justify-center text-white hover:text-neonBlue border border-white/10 pointer-events-auto transition-all shadow-lg"
                >
                  <ChevronRight size={40} />
                </button>
              </div>

              {/* Main Content Area */}
              <div 
                className="w-full h-full flex flex-col items-center justify-center p-4 md:p-12"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div 
                  key={selectedMedia.index + selectedMedia.type} 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="relative max-w-full max-h-full flex items-center justify-center"
                >
                  {selectedMedia.type === 'mosque' ? (
                    <div className="relative flex flex-col items-center">
                      <img 
                        src={mosques[selectedMedia.index].img} 
                        alt="" 
                        className="max-w-[95vw] max-h-[80vh] object-contain rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/10" 
                      />
                      <div className="mt-6 text-center">
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{mosques[selectedMedia.index].localName}</h3>
                        <div className="flex items-center justify-center gap-2 text-neonBlue">
                          <MapPin size={18} />
                          <span className="text-lg font-bold tracking-widest">{mosques[selectedMedia.index].location}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex flex-col items-center">
                      <img 
                        src={selectedMedia.type === 'photo' ? photos[selectedMedia.index] : arts[selectedMedia.index]} 
                        alt="" 
                        className="max-w-[95vw] max-h-[85vh] object-contain rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/10" 
                      />
                      <div className="mt-6 text-center">
                        <p className="font-handwriting text-white text-3xl opacity-90">
                          {selectedMedia.type === 'photo' ? 'Wild Lens Capture' : 'Hand-drawn Sketch'}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
        .font-handwriting { font-family: 'Caveat', cursive; }
        .perspective-1000 { perspective: 1500px; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default OffTheClock;
