import PortfolioTemplate from "@/app/components/templates/PortfolioTemplate";
import portfolioData from "../../portfolio.json";
import { ProjectData } from "@/app/components/organisms/ProjectModal/ProjectModal";
import { masterExperience, defaultExperienceTitle, defaultExperienceSubtitle } from "@/app/data/experience";

export default function MasterPortfolio() {
  return (
    <PortfolioTemplate 
      heroTitleRow1="Muhammad"
      heroTitleRow2="Aliffandy"
      heroSubtitle="A software engineer who speaks human."
      heroDescription="I bridge the gap between complex engineering and human-centric design, building interfaces that feel as good as they function."
      aboutTitle="Design-driven engineering."
      aboutParagraph1="I'm an engineer who cares deeply about the human side of software."
      aboutParagraph2="My work isn't just about writing efficient algorithms or architecting scalable databases—although I do that too. It's about translating complex technical requirements into fluid, intuitive experiences that users naturally understand."
      workTitle="Selected projects and case studies."
      experienceTitle={defaultExperienceTitle}
      experienceSubtitle={defaultExperienceSubtitle}
      experienceItems={masterExperience}
      projects={portfolioData as ProjectData[]}
    />
  );
}
