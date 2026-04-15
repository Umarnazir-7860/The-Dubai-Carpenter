"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Hum 'items' aur 'title' ko props ke taur par le rahe hain
export default function FAQ({ items = [], title = "Service FAQs", highlight = "FAQs." }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!items.length) return null; // Agar data nahi hai to kuch show nahi karega

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-center mb-16">
          {title} <span className="text-[#CCAC34]">{highlight}</span>
        </h2>
        
        <div className="space-y-4">
          {items.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                openIndex === i ? "border-[#CCAC34] bg-[#F9F9F7]" : "border-black/5 bg-white hover:border-[#CCAC34]/30"
              }`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-sm md:text-base uppercase tracking-tight">{faq.q}</h4>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-[#CCAC34]" />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-gray-500 text-sm leading-relaxed border-t border-black/5 mt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}