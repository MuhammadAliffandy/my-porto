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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group w-full flex flex-col bg-[#14110E] rounded-sm border-double border-[6px] border-[#2A241E] overflow-hidden hover:border-accent transition-colors duration-300 cursor-pointer h-full shadow-lg hover:shadow-[0_0_20px_rgba(200,169,81,0.15)]"
    >
      {/* Image Section */}
      <div className="w-full aspect-[16/10] overflow-hidden bg-[#111] relative border-b-4 border-double border-[#2A241E] group-hover:border-accent transition-colors duration-300">
        <div 
          style={{ 
            width: '100%', 
            height: '100%', 
            backgroundImage: thumbnail ? `url('${thumbnail}')` : 'none'
          }} 
          className="flex items-center justify-center bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-[1.05]"
        >
          {!thumbnail && (
            <Icon icon="game-icons:open-book" className="text-6xl text-[#2A241E] opacity-50" />
          )}
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col flex-grow p-6 md:p-8 relative z-10 bg-[#1A1613]">
        {/* Corner Ornaments */}
        <Icon icon="game-icons:diamond-hilt" className="absolute top-2 left-2 text-[#4A3F35] text-xl opacity-50" />
        <Icon icon="game-icons:diamond-hilt" className="absolute top-2 right-2 text-[#4A3F35] text-xl opacity-50 rotate-90" />
        <Icon icon="game-icons:diamond-hilt" className="absolute bottom-2 right-2 text-[#4A3F35] text-xl opacity-50 rotate-180" />
        <Icon icon="game-icons:diamond-hilt" className="absolute bottom-2 left-2 text-[#4A3F35] text-xl opacity-50 -rotate-90" />
        
        <div className="font-mono text-[10px] tracking-widest text-accent uppercase mb-4 flex items-center justify-center gap-2 opacity-90 border-b border-[#2A241E] pb-2">
          <Icon icon="game-icons:scroll-unfurled" className="text-lg" /> 
          {type} PROJECT
        </div>
        
        <h3 className="font-sans text-2xl lg:text-3xl font-bold mb-4 text-[#E6D8C3] group-hover:text-accent transition-colors duration-300 leading-snug">
          {title}
        </h3>
        
        <p className="text-muted font-lora text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
          {description}
        </p>
        
        {/* Footer / Call to action */}
        <div className="flex items-center justify-center border-t border-dashed border-[#3A322A] pt-4 mt-auto">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase font-bold text-[#E6D8C3] group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
            View Details
            <Icon 
              icon="game-icons:crossed-swords" 
              className="text-base group-hover:rotate-12 transition-transform duration-300"
            />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
