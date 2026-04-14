// components/Hero.js
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
          {/* 🖼️ KEN BURNS EFFECT (Slow Zoom) */}
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "linear" }}
            src={slides[index].img} 
            alt="Hero" 
            className="h-full w-full object-cover opacity-60" 
          />
          
          {/* Overlays for Luxury Feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col justify-center px-10 md:px-24">
        <div className="overflow-hidden">
          <motion.span 
            key={`sub-${index}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[#CCAC34] tracking-[0.6em] ml-2 uppercase text-[10px] font-black block mb-4"
          >
            {slides[index].sub}
          </motion.span>
        </div>

        <motion.h1 
          key={`title-${index}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl text-8xl text-white font-black  tracking-tighter leading-[0.85] uppercase max-w-5xl"
        >
          {slides[index].title} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#CCAC34] to-[#8a6d1a]">
            {slides[index].titleGold}.
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 flex items-center gap-8"
        >
          <button className="relative group overflow-hidden border border-[#CCAC34] text-white px-12 py-5 font-black rounded-full text-[10px] tracking-[0.3em] uppercase transition-all">
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">View Our Work</span>
            <div className="absolute inset-0 bg-[#CCAC34] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
          
          <div className="hidden md:block h-[1px] w-24 bg-white/20" />
        </motion.div>
      </div>

      {/* 🔹 SLIDE INDICATOR (Side Bars) */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {slides.map((_, i) => (
          <div 
            key={i}
            className={`h-12 w-[2px] transition-all duration-500 ${i === index ? "bg-[#CCAC34]" : "bg-white/20"}`}
          />
        ))}
      </div>
    </section>
  );
}