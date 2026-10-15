import PortfolioTemplate from "@/app/components/templates/PortfolioTemplate";
import portfolioData from "../../../portfolio.json";
import { ProjectData } from "@/app/components/organisms/ProjectModal/ProjectModal";

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
      experienceTitle="My Engineering Journey"
      experienceSubtitle="A track record of building reliable software systems for diverse clients."
      experienceItems={[
        {
          company: "PUKULENAM",
          role: "FULLSTACK ENGINEER",
          meta: "SOFTWARE ENGINEERING · 2025 - PRESENT",
          title: "Engineering for performance",
          description: "Optimized API data queries using ORM to achieve 50% faster retrieval and accelerated CRUD processes by 60% through a functional component-based UI."
        }
      ]}
      projects={(portfolioData as ProjectData[]).filter(p => ['web', 'mobile'].includes(p.type))}
      contactTitle={<>Need a robust <span className="font-medieval text-accent">Fullstack</span> solution?</>}
      contactDescription="Let's engineer your next digital product."
    />
  );
}
