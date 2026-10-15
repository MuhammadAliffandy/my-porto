import PortfolioTemplate from "@/app/components/templates/PortfolioTemplate";
import portfolioData from "../../../portfolio.json";
import { ProjectData } from "@/app/components/organisms/ProjectModal/ProjectModal";
import { masterExperience, defaultExperienceTitle, defaultExperienceSubtitle } from "@/app/data/experience";

export default function AI_ML_Portfolio() {
  return (
    <PortfolioTemplate 
      heroTitleRow1="Muhammad"
      heroTitleRow2="Aliffandy"
      heroSubtitle="AI Researcher & Machine Learning Engineer"
      heroDescription="I design intelligent systems that solve complex medical and engineering problems, turning raw data into robust, clinical-grade AI solutions."
      aboutTitle="Data-driven intelligence."
      aboutParagraph1="I'm an AI Engineer who cares deeply about the intersection of artificial intelligence and human health."
      aboutParagraph2="My work focuses on developing robust Deep Learning models, Foundation Models, and autonomous RAG agents that don't just achieve high accuracy on paper, but are reliable and scalable in the real world."
      workTitle="AI & Machine Learning Projects."
      experienceTitle={defaultExperienceTitle}
      experienceSubtitle={defaultExperienceSubtitle}
      experienceItems={masterExperience}
      projects={(portfolioData as ProjectData[]).filter(p => p.type === 'machine-learning')}
      contactTitle={<>Looking for an AI <span className="font-medieval text-accent">Specialist</span>?</>}
      contactDescription="Let's build intelligent, scalable AI solutions together."
    />
  );
}
