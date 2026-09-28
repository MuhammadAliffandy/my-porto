"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";

interface AppProjectCardProps {
  index: number;
  title: string;
  description: string;
  thumbnail: string;
  type: string;
  onClick: () => void;
}

export default function AppProjectCard({ index, title, description, thumbnail, type, onClick }: AppProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Parallax configuration for the image
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  // Moves the image vertically within its container based on scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div 
      onClick={onClick}
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col bg-[#0A0A0A] rounded-2xl border border-[#222] overflow-hidden hover:border-[#444] transition-colors duration-300 cursor-pointer h-full"
    >
      {/* Image Section with Parallax */}
      <div className="w-full aspect-[4/3] overflow-hidden bg-[#111] relative">
        <motion.img
          style={{ y: imageY, scale: 1.2 }} // Pre-scaled to prevent edges showing during parallax
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.25] group-hover:opacity-80"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col flex-grow p-6 md:p-8 relative z-10 bg-[#0A0A0A]">
        <div className="font-mono text-[10px] tracking-widest text-muted uppercase mb-4 flex items-center gap-2">
          {type} APPLICATION
        </div>
        
        <h3 className="font-playfair text-2xl lg:text-3xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
          {title}
        </h3>
        
        <p className="text-muted font-light text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
          {description}
        </p>
        
        {/* Footer / Call to action */}
        <div className="flex items-center text-[10px] font-mono tracking-widest uppercase text-muted group-hover:text-accent transition-colors mt-auto">
          VIEW DETAILS <Icon icon="mdi:arrow-top-right" className="ml-1 text-sm" />
        </div>
      </div>
    </motion.div>
  );
}
