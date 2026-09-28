"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export interface ProjectData {
  title: string;
  description: string;
  feature: string;
  images: string[];
  projectLink: string;
  thumbnail: string;
  type: string;
  icons: number[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  // Reset active image when project changes
  useEffect(() => {
    if (project) setActiveImage(0);
  }, [project]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#050505]/90 backdrop-blur-md p-4 md:p-8"
        >
          {/* Close Background Overlay */}
          <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

          {/* Modal Content container */}
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-[#0A0A0A] border border-[#222] rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl z-10"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-10 h-10 bg-[#111] hover:bg-[#222] rounded-full flex items-center justify-center text-foreground transition-colors border border-[#333]"
            >
              <Icon icon="mdi:close" className="text-xl" />
            </button>

            {/* Left: Image Gallery */}
            <div className="w-full lg:w-3/5 bg-[#111] flex flex-col p-4 gap-4 h-[40vh] lg:h-[90vh]">
              {/* Main Image */}
              <div className="flex-1 w-full relative rounded-xl overflow-hidden bg-black/50 border border-[#222]">
                <img 
                  src={project.images[activeImage] || project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Thumbnail strip */}
              {project.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2 custom-scrollbar flex-shrink-0 h-24">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`h-full aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === idx ? "border-accent opacity-100" : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Project Details */}
            <div className="w-full lg:w-2/5 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col gap-8 bg-[#0A0A0A]">
              <div>
                <div className="font-mono text-[10px] tracking-widest text-accent uppercase mb-4">
                  {project.type} APPLICATION
                </div>
                <h2 className="font-playfair text-4xl font-semibold mb-6 text-foreground leading-tight">
                  {project.title}
                </h2>
                <p className="text-muted font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Action Links */}
              {project.projectLink && (
                <div>
                  <a 
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:scale-105 transition-transform"
                  >
                    View Live Project <Icon icon="mdi:open-in-new" />
                  </a>
                </div>
              )}

              {/* Features & Contributions */}
              <div className="mt-4">
                <h3 className="font-mono text-[10px] tracking-widest text-muted uppercase mb-6 border-b border-[#222] pb-2">
                  Key Features & Contributions
                </h3>
                <ul className="flex flex-col gap-4">
                  {project.feature.split('\n').filter(Boolean).map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm font-light text-muted leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
