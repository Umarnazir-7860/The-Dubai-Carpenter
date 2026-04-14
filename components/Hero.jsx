"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { 
    id: 1, 
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2070", 
    title: "Bespoke", 
    titleGold: "Craftsmanship",
    sub: "Established in UAE" 
  },
  { 
    id: 2, 
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070", 
    title: "Modern", 
    titleGold: "Woodwork",
    sub: "Handcrafted Luxury" 
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* 🖼️ KEN BURNS EFFECT */}
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "linear" }}
            src={slides[index].img} 
            alt="Hero" 
            className="h-full w-full object-cover opacity-50 md:opacity-60" 
          />
          
          {/* Overlays - Mobile par thoda zyada dark rakha hai taake text clear nazar aaye */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 md:via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-24">
        <div className="overflow-hidden">
          <motion.span 
            key={`sub-${index}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[#CCAC34] tracking-[0.3em] md:tracking-[0.6em] uppercase text-[10px] md:text-xs font-black block mb-2 md:mb-4"
          >
            {slides[index].sub}
          </motion.span>
        </div>

        <motion.h1 
          key={`title-${index}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-white font-black tracking-tighter leading-[0.9] md:leading-[0.85] uppercase max-w-full md:max-w-5xl"
        >
          {slides[index].title} <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#CCAC34] to-[#8a6d1a]">
            {slides[index].titleGold}.
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8"
        >
          <button className="w-full sm:w-auto relative group overflow-hidden border border-[#CCAC34] text-white px-8 md:px-12 py-4 md:py-5 font-black rounded-full text-[10px] tracking-[0.3em] uppercase transition-all">
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">View Our Work</span>
            <div className="absolute inset-0 bg-[#CCAC34] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
          
          <div className="hidden md:block h-[1px] w-24 bg-white/20" />
        </motion.div>
      </div>

      {/* 🔹 SLIDE INDICATOR - Mobile par thoda chota kiya hai */}
      <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 md:gap-4">
        {slides.map((_, i) => (
          <div 
            key={i}
            className={`h-8 md:h-12 w-[2px] transition-all duration-500 ${i === index ? "bg-[#CCAC34]" : "bg-white/20"}`}
          />
        ))}
      </div>
    </section>
  );
}