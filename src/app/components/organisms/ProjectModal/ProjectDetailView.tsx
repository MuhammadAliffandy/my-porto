"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { ProjectData } from "./ProjectModal";
import OptionWheel from "@/app/components/atoms/OptionWheel/OptionWheel";
import { useEffect, useRef } from "react";

interface ProjectDetailViewProps {
  project: ProjectData;
  allProjects: ProjectData[];
  onSelectProject: (p: ProjectData) => void;
  onClose: () => void;
}

export default function ProjectDetailView({ project, allProjects, onSelectProject, onClose }: ProjectDetailViewProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the active item into view when selected
  useEffect(() => {
    if (scrollRef.current) {
      const activeEl = scrollRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [project]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col lg:flex-row w-full h-[85vh] gap-8 lg:gap-12"
    >
      {/* Left: Circle-like Scroll List */}
      <div className="w-full lg:w-1/3 flex flex-col h-[60vh] lg:h-full relative overflow-visible">
        <OptionWheel
          items={allProjects.map(p => p.title)}
          defaultSelected={allProjects.findIndex(p => p.title === project.title) || 0}
          textColor="#444"
          activeColor="#d4af37" // accent color
          side="right"
          fontSize={2.5} // slightly smaller to fit project titles
          spacing={1.4}
          curve={1}
          tilt={6}
          blur={2}
          fade={0.25}
          smoothing={200}
          inset={40}
          loop={false}
          draggable
          onChange={(index: number) => onSelectProject(allProjects[index])}
        />
      </div>

      {/* Right: Project Details Panel */}
      <div className="w-full lg:w-2/3 h-full overflow-y-auto custom-scrollbar bg-[#0A0A0A] rounded-[2rem] border border-[#222] p-8 md:p-12 relative flex flex-col gap-8 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-10 h-10 bg-[#111] hover:bg-[#222] rounded-full flex items-center justify-center text-foreground transition-colors border border-[#333]"
        >
          <Icon icon="mdi:close" className="text-xl" />
        </button>

        {/* Header */}
        <div>
          <div className="font-mono text-[10px] tracking-widest text-accent uppercase mb-4">
            {project.type} APPLICATION
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold mb-6 text-foreground leading-tight">
            {project.title}
          </h2>
          <p className="text-lg text-muted font-light leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Gallery */}
        <div className="w-full flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
          {project.images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[80%] md:w-[60%] aspect-video rounded-xl border border-[#222] overflow-hidden bg-black/50">
              <img src={img} alt="" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Features / Roles */}
        <div className="mt-4">
          <h3 className="font-mono text-[10px] tracking-widest text-muted uppercase mb-6 border-b border-[#222] pb-2">
            Key Features & Contributions
          </h3>
          <ul className="flex flex-col gap-4">
            {project.feature.split('\n').filter(Boolean).map((feat, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm font-light text-muted leading-relaxed">
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {project.projectLink && (
          <div className="mt-auto pt-8">
            <a 
              href={project.projectLink}
              target="_blank"
              rel="noreferrer" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:scale-105 transition-transform"
            >
              Visit Live Project <Icon icon="mdi:open-in-new" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
