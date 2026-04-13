"use client";
import { motion } from "framer-motion";

export default function FadeIn({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.8,
  fullWidth = false 
}) {
  // Directions logic
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: directions[direction].y, 
        x: directions[direction].x 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      viewport={{  margin: "-100px" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.25, 1, 0.5, 1] // Premium cubic-bezier ease
      }}
      className={fullWidth ? "w-full" : ""}
    >
      {children}
    </motion.div>
  );
}