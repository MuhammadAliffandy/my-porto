"use client";
import AppParticleCanvas from "@/app/components/atoms/AppParticleCanvas/AppParticleCanvas";
import AppAsciiPortrait from "@/app/components/atoms/AppAsciiPortrait/AppAsciiPortrait";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, useSpring, animate } from "framer-motion";
import { Icon } from "@iconify/react";
import AppProjectCard from "@/app/components/organisms/AppProjectCard/AppProjectCard";
import { ProjectData } from "@/app/components/organisms/ProjectModal/ProjectModal";
import ProjectDetailView from "@/app/components/organisms/ProjectModal/ProjectDetailView";
import Stack from "@/app/components/atoms/Stack/Stack";
import LineSidebar from "@/app/components/organisms/LineSidebar/LineSidebar";
import portfolioData from "../../../../../portfolio.json";
import { useRef, useState, useEffect, ReactNode } from "react";

const experienceItems = [
  {
    company: "PUKULENAM", role: "FULLSTACK ENGINEER",
    meta: "SOFTWARE ENGINEERING · AUG 2025 - PRESENT",
    title: "Engineering for performance",
    description: "Optimized API data queries using ORM to achieve 50% faster retrieval and accelerated CRUD processes by 60% through a functional component-based UI. Automated batch retrieval of 500+ records using n8n, cutting execution time from over two hours to just 70 minutes. Integrated Twilio telephony into the CRM to streamline workflows and delivered classification reports to mitigate model bias.",
  },
  {
    company: "PUKULENAM", role: "FRONTEND ENGINEER",
    meta: "FRONTEND DEVELOPMENT · JUN 2025 - PRESENT",
    title: "Scalable interfaces at speed",
    description: "Developed an Admin CRUD service using React and Chakra UI, serving active user management for 500+ records. Built a reusable Atomic Design component library that reduced code duplication by 30%. Redesigned the core application interface with modern motion animations, responsive layouts, and integrated secure JWT authentication.",
  },
  {
    company: "ALGORITHMICS INDONESIA", role: "CODING TUTOR",
    meta: "EDUCATION · MAY 2025 - SEP 2025",
    title: "Mentoring the next generation",
    description: "Mentored students in Python and visual programming (Scratch), improving algorithm comprehension by 65%. Guided students to successfully complete monthly projects, achieving an 86% monthly attendance rate and significantly enhancing their technical presentation skills.",
  },
  {
    company: "PT. ADMA DIGITAL SOLUSI", role: "FRONTEND ENGINEER",
    meta: "WEB DEVELOPMENT · FEB 2024 - JUN 2024",
    title: "Building CMS and multi-platform tools",
    description: "Developed scalable Next.js projects including a CMS and Communication Management Tool that reduced manual content handling time by 40%. Connected applications with Twitter, Instagram, Facebook, and WhatsApp APIs. Optimized performance using SSR, SSG, and caching strategies to cut page load times by 15%.",
  },
  {
    company: "TECHNOLOGY INFRASTRUCTURE LAB", role: "OS TEACHING ASSISTANT",
    meta: "ACADEMIA · JAN 2024 - JUN 2024",
    title: "Mastering system foundations",
    description: "Mentored over 30 students in Linux Operating System concepts and practical usage. Prepared learning modules, facilitated lab sessions, and provided structural evaluations, leading to a 90% final project success rate.",
  },
  {
    company: "BINAR ACADEMY", role: "FULLSTACK WEB DEVELOPER",
    meta: "BOOTCAMP · AUG 2023 - DEC 2023",
    title: "Developing educational platforms",
    description: "Collaborated on a Massive Open Online Course (MOOC) platform. Built Database Management APIs with full CRUD functionality for courses and modules. Implemented secure admin authentication and user order management logic for verifying purchases and processing payments.",
  },
  {
    company: "DSAA GROUP", role: "FRONTEND MOBILE DEVELOPER",
    meta: "MOBILE DEVELOPMENT · JUL 2023 - AUG 2023",
    title: "Crafting mobile experiences",
    description: "Executed pixel-perfect UI slicing from Figma to Flutter using the Atomic Design methodology to build a reusable component library. Leveraged Dart algorithms for smooth animations and conducted thorough manual testing to significantly reduce UI-related bugs prior to release.",
  },
  {
    company: "FASTWORK ID", role: "FREELANCE GRAPHIC & UI/UX DESIGNER",
    meta: "DESIGN · JAN 2022 - JAN 2023",
    title: "Where design meets freelance",
    description: "Delivered custom digital products and UI/UX designs for clients on a marketplace platform. Maintained a 100% project completion rate and achieved an average client rating of 4.7/5 through continuous iteration and clear communication.",
  },
];
interface StickySectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const StickySection = ({ id, className, children }: StickySectionProps) => {
  const [topOffset, setTopOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateOffset = () => {
      if (ref.current) {
        const height = ref.current.getBoundingClientRect().height;
        const overflow = height - window.innerHeight;
        // If the section is taller than the viewport, it should only stick when its bottom reaches the viewport bottom.
        setTopOffset(overflow > 0 ? -overflow : 0);
      }
    };
    
    // Initial check
    updateOffset();
    
    // Check on resize and layout changes
    window.addEventListener('resize', updateOffset);
    // Use MutationObserver to detect content height changes (like expanding grid)
    const observer = new MutationObserver(updateOffset);
    if (ref.current) {
      observer.observe(ref.current, { childList: true, subtree: true });
    }
    
    return () => {
      window.removeEventListener('resize', updateOffset);
      observer.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"]
  });

  // Add a spring configuration to make the parallax silky smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scale = useTransform(smoothProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(smoothProgress, [0, 1], [1, 0.6]);
  const filter = useTransform(smoothProgress, [0, 1], ["blur(0px)", "blur(2px)"]);

  return (
    <motion.section 
      id={id} 
      ref={ref} 
      className={`sticky snap-start origin-top w-full ${className}`} 
      style={{ top: topOffset, scale, opacity, filter }}
    >
      {children}
    </motion.section>
  );
};

export default function HomeView() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  // Global scroll listener for Navbar
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setNavVisible(false); // scrolling down
    } else {
      setNavVisible(true); // scrolling up or at top
    }
  });

  // Inner-scroll tracking for Experience journey timeline (kept since it's a specific functional request)
  const journeyScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: journeyProg } = useScroll({ container: journeyScrollRef });
  const progressWidth = useTransform(journeyProg, [0, 1], ["0%", "100%"]);

  return (
    <main className="relative w-full bg-[#050505] text-foreground font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        html {
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-right {
          animation: marquee-right 25s linear infinite;
        }
      `}} />
      <AppParticleCanvas />

      {/* ── Navbar ────────────────────────────────── */}
      <nav className={`fixed top-0 w-full z-[100] flex items-center justify-between px-8 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#050505]/75 backdrop-blur-xl border-b border-white/5"
          : "py-8 bg-transparent"
      } ${navVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="font-playfair font-bold text-2xl tracking-wide">
          Aliffandy<span className="text-accent">.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-xl text-muted hover:text-accent transition-colors duration-300"><Icon icon="mdi:linkedin" /></a>
          <a href="https://github.com"   target="_blank" rel="noreferrer" className="text-xl text-muted hover:text-accent transition-colors duration-300"><Icon icon="mdi:github"   /></a>
        </div>
      </nav>

      {/* ── LineSidebar ───────────────────────────── */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:block">
        <LineSidebar 
          items={['Home', 'About', 'Work', 'Experience', 'Contact']}
          accentColor="#d4af37"
          textColor="#666"
          markerColor="#333"
          showIndex={false}
          onItemClick={(index, label) => {
            const id = label.toLowerCase();
            // Gunakan anchor div untuk mendapatkan posisi layout asli sebelum elemen sticky menumpuk
            const anchor = document.getElementById(`anchor-${id}`);
            if (anchor) {
              const html = document.documentElement;
              // Matikan fitur snap & native smooth scroll sementara agar JS bisa mengambil alih 100%
              html.style.scrollSnapType = 'none';
              html.style.scrollBehavior = 'auto';
              
              const targetY = anchor.offsetTop;
              
              animate(window.scrollY, targetY, {
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1], // easeOut
                onUpdate: (latest) => window.scrollTo(0, latest),
                onComplete: () => {
                  // Kembalikan ke state semula setelah scroll selesai
                  html.style.scrollSnapType = 'y mandatory';
                  html.style.scrollBehavior = 'smooth';
                }
              });
            }
          }}
        />
      </div>

      {/* ── HERO ──────────────────────────────────── */}
      <div id="anchor-home" className="w-full h-0 m-0 p-0" />
      <StickySection
        id="home"
        className="min-h-screen w-full flex items-center px-8 md:px-20 lg:px-32 z-10"
      >
        <div className="w-full max-w-[1600px] mx-auto relative flex items-center min-h-screen">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-[1] opacity-60 hover:opacity-90 transition-opacity duration-500 pointer-events-auto"
          >
            <AppAsciiPortrait src="/aliffandy-transparent.png" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 w-full lg:w-[45%] relative z-10"
          >
            <div className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-muted uppercase">
              Fullstack Engineer &middot; Web &amp; Mobile Development
              <br />ID <span className="text-accent mx-1">*</span> 2026
            </div>
            <h1 className="font-playfair text-6xl md:text-[6rem] lg:text-[7.5rem] font-semibold leading-[0.85] tracking-tight mt-4">
              Muhammad<br /><span className="text-muted">Aliffandy</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl max-w-xl text-muted font-light leading-relaxed">
              Crafting high-performance web applications and robust mobile experiences.
              I build scalable systems where sophisticated design meets deep engineering craft.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-12">
              <a href="#work" className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300">All projects</a>
              <button className="px-8 py-4 border border-[#333] text-muted rounded-full font-medium text-sm hover:border-white hover:text-white transition-colors duration-300">Resume</button>
            </div>
          </motion.div>
        </div>
      </StickySection>

      {/* ── ABOUT ME ──────────────────────────────── */}
      <div id="anchor-about" className="w-full h-0 m-0 p-0" />
      <StickySection id="about" className="min-h-screen w-full flex items-center py-24 px-8 md:px-20 lg:px-32 z-20 bg-[#080808] border-t border-[#1a1a1a]">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0">
          
          {/* Left: Photos */}
          {/* FOTO SCALE: ubah max-w-[420px] sesuai keinginan */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-start relative z-10">
            <div className="w-full max-w-[420px] aspect-[2/3] relative">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cards={([
                  "/images/about/IMG_3203.jpg",
                  "/images/about/IMG_20230317_144142.jpg",
                  "/images/about/IMG_0634.jpg"
                ].map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt={`aliffandy-${i + 1}`} 
                    className="w-full h-full object-cover"
                  />
                )) as any)}
              />
            </div>
          </div>

          {/* Right: Pitch */}
          <div className="w-full lg:w-[45%] flex flex-col items-start text-left relative z-10">
            <div className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase mb-6">[ ABOUT ME ]</div>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8">
              A developer who <br/><span className="text-muted italic">speaks human.</span>
            </h2>
            <p className="text-lg text-muted font-light leading-relaxed mb-6">
              I don&apos;t just write code; I bridge the gap between technical complexity and business logic. I thrive in presenting pitches, explaining intricate tech stacks to non-technical stakeholders, and ensuring that everyone is on the same page.
            </p>
            <p className="text-lg text-muted font-light leading-relaxed mb-10">
              When I build a product, I&apos;m not just thinking about the architecture—I&apos;m thinking about the story it tells, how it feels in the user&apos;s hands, and how it drives value. Good engineering is invisible; great engineering is understood.
            </p>
            <a href="#contact" className="px-8 py-4 border border-[#333] text-foreground rounded-full font-medium text-sm hover:bg-foreground hover:text-background transition-colors duration-300">
              Let's talk tech
            </a>
          </div>
        </div>
      </StickySection>

      {/* ── WORK ──────────────────────────────────── */}
      <div id="anchor-work" className="w-full h-0 m-0 p-0" />
      <StickySection id="work" className="h-screen w-full bg-[#050505] pt-24 pb-8 px-8 md:px-20 lg:px-32 z-30 border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto w-full h-full flex flex-col">
          {!activeProject && (
            <>
              <div className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-muted uppercase mb-6 flex-shrink-0">[ PORTFOLIO ]</div>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 flex-shrink-0">
                <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
                  Selected projects and <br className="hidden md:block" /> case studies.
                </h2>
              </div>
            </>
          )}
          
          <div className="relative w-full flex-grow overflow-y-auto custom-scrollbar pb-24 pr-4">
            <AnimatePresence mode="wait">
              {!activeProject ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {portfolioData.slice(0, showAllProjects ? portfolioData.length : 6).map((p, i) => (
                      <AppProjectCard 
                        key={i} 
                        index={i} 
                        title={p.title} 
                        description={p.description} 
                        thumbnail={p.thumbnail} 
                        type={p.type} 
                        onClick={() => setActiveProject(p as ProjectData)}
                      />
                    ))}
                  </div>
                  <div className="w-full flex justify-center mt-16">
                    <button 
                      onClick={() => setShowAllProjects(!showAllProjects)}
                      className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2"
                    >
                      {showAllProjects ? "Show less projects" : "View all projects"} 
                      <Icon icon={showAllProjects ? "mdi:arrow-up" : "mdi:arrow-down"} className="text-lg" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <ProjectDetailView 
                  key="detail"
                  project={activeProject} 
                  allProjects={portfolioData as ProjectData[]}
                  onSelectProject={setActiveProject}
                  onClose={() => setActiveProject(null)} 
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </StickySection>

      {/* ── EXPERIENCE ────────────────────────────── */}
      <div id="anchor-experience" className="w-full h-0 m-0 p-0" />
      <StickySection id="experience" className="min-h-screen w-full bg-[#060606] py-24 px-8 md:px-20 lg:px-32 z-40 border-t border-[#1a1a1a] flex items-center">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left column */}
          <div className="w-full lg:w-1/3 flex-shrink-0 lg:sticky lg:top-32 h-max">
            <div className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase mb-6">[ MY JOURNEY ]</div>
            <h2 className="font-playfair text-5xl md:text-6xl font-semibold tracking-tight mb-8">
              Where I have <br /> worked
            </h2>
            <p className="text-muted font-light leading-relaxed mb-12">
              Product design across content, AI, and enterprise, spanning financial intelligence,
              news, healthcare, logistics, and retail.
            </p>
            <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-muted uppercase mb-2">
              <span>PAST</span><span>PRESENT</span>
            </div>
            <div className="w-full h-[1px] bg-[#222] relative">
              <motion.div className="absolute top-0 left-0 h-[1px] bg-accent" style={{ width: progressWidth }} />
            </div>
          </div>

          {/* Right inner-scroll column */}
          <div
            ref={journeyScrollRef}
            className="w-full lg:w-2/3 relative border-l border-[#222] pl-8 md:pl-16 flex flex-col gap-20 py-4 h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#333] hover:[&::-webkit-scrollbar-thumb]:bg-accent [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {experienceItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[37px] md:-left-[69px] top-1 w-2 h-2 rounded-full bg-[#444] group-hover:bg-accent transition-colors duration-300 ring-4 ring-[#060606]" />
                <div className="font-mono text-[10px] tracking-widest uppercase mb-4 flex flex-col gap-1">
                  <span className="text-[#649a9e]">{item.company} &middot; {item.role}</span>
                  <span className="text-[#555]">{item.meta}</span>
                </div>
                <h3 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted font-light text-base leading-relaxed max-w-2xl">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </StickySection>

      {/* ── CONTACT & FOOTER ─────────────────────────────────── */}
      <div id="anchor-contact" className="w-full h-0 m-0 p-0" />
      <StickySection id="contact" className="w-full bg-[#0a0a0a] z-50 border-t border-[#1a1a1a] flex flex-col">
        
        <div className="min-h-screen w-full flex items-center justify-center relative px-8 md:px-20 lg:px-32">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center pb-24">
            <div className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-accent uppercase mb-8">Let's connect</div>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight mb-12">
              Have a project in mind? <br className="hidden md:block" /> Let's build something{" "}
              <span className="text-muted">extraordinary.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mb-12">
              Whether you need a fullstack application built from the ground up or a technical
              partner to explain complex architecture to your stakeholders, I'm ready to help.
            </p>
            <a href="mailto:aliffandy@example.com" className="px-10 py-5 bg-foreground text-background rounded-full font-medium text-base hover:scale-105 transition-transform duration-300 flex items-center gap-3">
              Start a conversation <Icon icon="mdi:arrow-right" />
            </a>
          </div>

          {/* Tech Stack Marquee */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden flex items-center border-t border-[#111] py-8">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-max animate-marquee-right">
              {[
                "simple-icons:react",
                "simple-icons:nextdotjs",
                "simple-icons:typescript",
                "simple-icons:tailwindcss",
                "simple-icons:nodedotjs",
                "simple-icons:python",
                "simple-icons:docker",
                "simple-icons:framer",
                "simple-icons:figma",
                "simple-icons:amazonwebservices",
                "simple-icons:react",
                "simple-icons:nextdotjs",
                "simple-icons:typescript",
                "simple-icons:tailwindcss",
                "simple-icons:nodedotjs",
                "simple-icons:python",
                "simple-icons:docker",
                "simple-icons:framer",
                "simple-icons:figma",
                "simple-icons:amazonwebservices"
              ].map((icon, idx) => (
                <div key={idx} className="flex items-center justify-center mx-8 md:mx-12 text-3xl md:text-4xl text-[#333] hover:text-white transition-colors duration-300 cursor-pointer">
                  <Icon icon={icon} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FOOTER ─────────────────────────────────── */}
        <footer className="w-full bg-[#050505] border-t border-[#111] py-6 px-8 md:px-20 lg:px-32 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-playfair font-bold text-xl tracking-wide">Aliffandy<span className="text-accent">.</span></div>
            <div className="text-muted text-sm font-light">© {new Date().getFullYear()} Muhammad Aliffandy. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="mailto:hello@example.com" className="text-sm text-muted hover:text-accent transition-colors font-mono uppercase tracking-wider">Email</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-accent transition-colors font-mono uppercase tracking-wider">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-accent transition-colors font-mono uppercase tracking-wider">GitHub</a>
            </div>
          </div>
        </footer>
      </StickySection>

    </main>
  );
}
