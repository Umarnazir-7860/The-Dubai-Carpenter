"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const reviews = [
  { name: "Jane Jane", role: "Villa Owner", text: "The nicest team I have ever met and truly professional carpenters. They delivered excellent quality with great attention to detail." },
  { name: "Joel Abraham Jr", role: "Residential", text: "Top-notch carpenter! Pays attention to detail and did my work excellently with zero mess. Clean, fast, and super professional." },
  { name: "Fabien Lyonnet", role: "Kitchen Project", text: "Saif found solutions for the building in furniture I needed in the kitchen. He is reliable and works hard to give the best results." },
  { name: "Yevheniia Kondratenko", role: "Local Guide", text: "Great carpentry work. The team was punctual, easy to work with, and very skilled. Everything was done neatly and exactly as discussed." },
  { name: "Umer Farooq", role: "Verified Client", text: "Crafted a beautiful wardrobe for me with great attention to detail and excellent quality. The finishing is perfect and the process was smooth." },
  { name: "Mauro Magalhaes", role: "Home Owner", text: "Responded very quickly to water damage. The team made new drawers and fitted them perfectly. Highly professional service in Dubai." },
  { name: "Joel Abraham Jr", role: "Property Owner", text: "Top-notch carpenter! Pays attention to detail and did my work excellently with zero mess. Clean, fast, and super professional." },
  { name: "Walid Amin", role: "Business Owner", text: "Very quick support and professional work for reasonable cost. I will contact them for sure in the future." },
];

const ReviewsCarousel = () => {
  const [index, setIndex] = useState(0);
  const GMB_LINK = "https://www.google.com/search?q=The+Carpenter+Dubai+reviews";

  const next = () => index < reviews.length && setIndex(index + 1);
  const prev = () => index > 0 && setIndex(index - 1);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Sleek Header */}
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="text-[#CCAC34] tracking-[0.5em] text-[9px] font-black uppercase">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
              Client <span className="text-[#CCAC34]">Trust.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={prev}
              className={`p-3 rounded-full border border-black/5 transition-all ${index === 0 ? 'opacity-10 cursor-not-allowed' : 'hover:bg-black hover:text-white'}`}
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={next}
              className={`p-3 rounded-full border border-[#CCAC34] text-[#CCAC34] transition-all ${index === reviews.length ? 'opacity-10 cursor-not-allowed' : 'hover:bg-[#CCAC34] hover:text-white'}`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Compact Slider Area */}
        <div className="relative">
          <div 
            className="flex gap-6 transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)]"
            style={{ transform: `translateX(calc(-${index * 344}px))` }} 
          >
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: index === i ? 1 : 0.9,
                  opacity: index === i ? 1 : 0.3,
                }}
                className="w-[320px] flex-shrink-0"
              >
                <div className={`p-10 rounded-[2.5rem] h-[340px] flex flex-col justify-between transition-all duration-500 border border-black/5 ${index === i ? 'bg-[#F9F9F7] shadow-xl shadow-black/5' : 'bg-transparent'}`}>
                  <div>
                    <div className="flex gap-0.5 mb-6">
                      {[...Array(5)].map((_, s) => <Star key={s} size={10} fill="#CCAC34" color="#CCAC34" />)}
                    </div>
                    <p className="text-base font-medium leading-relaxed text-zinc-800 italic">
                      “{review.text}”
                    </p>
                  </div>

                  <div className="pt-6 border-t border-black/5">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-1">{review.name}</h4>
                    <p className="text-[8px] font-bold text-[#CCAC34] uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Final "More on Google" Card */}
            <motion.div
              animate={{ 
                scale: index === reviews.length ? 1 : 0.9,
                opacity: index === reviews.length ? 1 : 0.3,
              }}
              className="w-[320px] flex-shrink-0"
            >
              <a 
                href={GMB_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-10 rounded-[2.5rem] h-[340px] flex flex-col items-center justify-center text-center transition-all duration-500 border border-[#CCAC34]/30 bg-white group ${index === reviews.length ? 'shadow-xl' : ''}`}
              >
                <div className="w-16 h-16 rounded-full bg-[#CCAC34]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <ExternalLink size={24} className="text-[#CCAC34]" />
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-2">Read More Reviews</h4>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Verified on Google</p>
                <div className="mt-8 flex gap-1">
                    {[...Array(5)].map((_, s) => <Star key={s} size={12} fill="#CCAC34" color="#CCAC34" />)}
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 h-[1px] w-full bg-zinc-100 relative">
          <motion.div 
            className="absolute h-full bg-[#CCAC34]"
            initial={{ width: "0%" }}
            animate={{ width: `${((index + 1) / (reviews.length + 1)) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;