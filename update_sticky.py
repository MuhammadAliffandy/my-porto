import os

with open("src/app/(pages)/(home)/home/page.tsx", "r") as f:
    content = f.read()

old_sticky = """interface StickySectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const StickySection = ({ id, className, children }: StickySectionProps) => {"""

new_sticky = """interface StickySectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  bgImage?: string;
}

const StickySection = ({ id, className, children, bgImage }: StickySectionProps) => {"""

content = content.replace(old_sticky, new_sticky)

old_return = """  return (
    <motion.section 
      id={id} 
      ref={ref} 
      className={`sticky snap-start origin-top w-full ${className}`} 
      style={{ top: topOffset, scale, opacity, filter }}
    >
      {children}
    </motion.section>
  );"""

new_return = """  return (
    <motion.section 
      id={id} 
      ref={ref} 
      className={`sticky snap-start origin-top w-full ${className}`} 
      style={{ top: topOffset, scale, opacity, filter }}
    >
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img src={bgImage} alt={`${id} background`} className="w-full h-full object-cover opacity-15 mix-blend-luminosity filter contrast-125 sepia-[0.3]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#14110E]/60 to-[#14110E] z-10"></div>
          
          <div className="absolute inset-4 md:inset-8 border-[1px] border-accent/15 z-20">
            <Icon icon="game-icons:diamond-hilt" className="absolute -top-[15px] -left-[15px] text-accent/40 text-3xl" />
            <Icon icon="game-icons:diamond-hilt" className="absolute -top-[15px] -right-[15px] text-accent/40 text-3xl rotate-90" />
            <Icon icon="game-icons:diamond-hilt" className="absolute -bottom-[15px] -right-[15px] text-accent/40 text-3xl rotate-180" />
            <Icon icon="game-icons:diamond-hilt" className="absolute -bottom-[15px] -left-[15px] text-accent/40 text-3xl -rotate-90" />
          </div>
        </div>
      )}
      {children}
    </motion.section>
  );"""

content = content.replace(old_return, new_return)

# Now we need to pass bgImage to StickySection
# Hero
content = content.replace(
    '<StickySection className="z-10" id="home">\n        <div className="min-h-screen w-full flex items-center px-8 md:px-20 lg:px-32 z-10 relative overflow-hidden" data-bg="/images/castle-bg.jpg">',
    '<StickySection className="z-10" id="home" bgImage="/medieval_castle_bg_1790595169316.jpg">\n        <div className="min-h-screen w-full flex items-center px-8 md:px-20 lg:px-32 z-10 relative overflow-hidden">'
)

# About Me
content = content.replace(
    '<StickySection className="z-20" id="about">\n        <div className="min-h-screen w-full flex items-center py-24 px-8 md:px-20 lg:px-32 z-20 bg-[#1A1613] border-t-4 border-double border-[#2A221C] medieval-bevel" data-bg="/medieval_study_bg_1790596537699.jpg">',
    '<StickySection className="z-20" id="about" bgImage="/medieval_study_bg_1790596537699.jpg">\n        <div className="min-h-screen w-full flex items-center py-24 px-8 md:px-20 lg:px-32 z-20 bg-[#1A1613] border-t-4 border-double border-[#2A221C] medieval-bevel">'
)

# Work
content = content.replace(
    '<StickySection className="z-30" id="work">\n        <div className="h-screen w-full bg-[#110E0B] pt-24 pb-8 px-8 md:px-20 lg:px-32 z-30 border-t-4 border-double border-[#2A221C] medieval-bevel" data-bg="/medieval_vault_bg_1790596550911.jpg">',
    '<StickySection className="z-30" id="work" bgImage="/medieval_vault_bg_1790596550911.jpg">\n        <div className="h-screen w-full bg-[#110E0B] pt-24 pb-8 px-8 md:px-20 lg:px-32 z-30 border-t-4 border-double border-[#2A221C] medieval-bevel">'
)

# Experience
content = content.replace(
    '<StickySection className="z-40" id="experience">\n        <div className="min-h-screen w-full bg-[#0F0C0A] py-24 px-8 md:px-20 lg:px-32 z-40 border-t-4 border-double border-[#2A221C] medieval-bevel flex items-center" data-bg="/medieval_council_bg_1790596566385.jpg">',
    '<StickySection className="z-40" id="experience" bgImage="/medieval_council_bg_1790596566385.jpg">\n        <div className="min-h-screen w-full bg-[#0F0C0A] py-24 px-8 md:px-20 lg:px-32 z-40 border-t-4 border-double border-[#2A221C] medieval-bevel flex items-center">'
)

# Contact
content = content.replace(
    '<StickySection className="z-50" id="contact">\n        <div className="w-full bg-[#14110E] z-50 border-t-4 border-double border-[#2A221C] flex flex-col medieval-bevel" data-bg="/medieval_tavern_bg_1790596579381.jpg">',
    '<StickySection className="z-50" id="contact" bgImage="/medieval_tavern_bg_1790596579381.jpg">\n        <div className="w-full bg-[#14110E] z-50 border-t-4 border-double border-[#2A221C] flex flex-col medieval-bevel">'
)

with open("src/app/(pages)/(home)/home/page.tsx", "w") as f:
    f.write(content)
