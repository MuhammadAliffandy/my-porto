import PortfolioTemplate from "@/app/components/templates/PortfolioTemplate";
import portfolioData from "../../../portfolio.json";
import { ProjectData } from "@/app/components/organisms/ProjectModal/ProjectModal";
import { masterExperience, defaultExperienceTitle, defaultExperienceSubtitle } from "@/app/data/experience";

export default function FullstackPortfolio() {
  return (
    <PortfolioTemplate 
      heroTitleRow1="Muhammad"
      heroTitleRow2="Aliffandy"
      heroSubtitle="Fullstack Engineer · Web & Mobile Development"
      heroDescription="Crafting high-performance web applications and robust mobile experiences. I build scalable systems where sophisticated design meets deep engineering craft."
      aboutTitle="Engineering the Web."
      aboutParagraph1="I specialize in creating end-to-end web solutions using modern technologies."
      aboutParagraph2="From designing complex databases to crafting pixel-perfect frontends, my goal is to deliver products that are both technically sound and delightful to use."
      workTitle="Web & Fullstack Projects."
      experienceTitle={defaultExperienceTitle}
      experienceSubtitle={defaultExperienceSubtitle}
      experienceItems={masterExperience}
      projects={(portfolioData as ProjectData[]).filter(p => ['web', 'mobile'].includes(p.type))}
      contactTitle={<>Need a robust <span className="font-medieval text-accent">Fullstack</span> solution?</>}
      contactDescription="Let's engineer your next digital product."
    />
  );
}
