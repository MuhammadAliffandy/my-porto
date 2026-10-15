import PortfolioTemplate from "@/app/components/templates/PortfolioTemplate";
import portfolioData from "../../../portfolio.json";
import { ProjectData } from "@/app/components/organisms/ProjectModal/ProjectModal";
import { masterExperience, defaultExperienceTitle, defaultExperienceSubtitle } from "@/app/data/experience";

export default function IOSPortfolio() {
  return (
    <PortfolioTemplate 
      heroTitleRow1="Muhammad"
      heroTitleRow2="Aliffandy"
      heroSubtitle="iOS Developer · Mobile Engineering & Swift"
      heroDescription="I craft native iOS applications with a focus on buttery smooth performance, intuitive UI, and strict Apple Human Interface Guidelines."
      aboutTitle="Crafting Native Experiences."
      aboutParagraph1="I am passionate about the Apple ecosystem and native mobile development."
      aboutParagraph2="My focus is on writing clean, modular Swift code and building apps that feel perfectly at home on iPhone and iPad."
      workTitle="iOS & Mobile Projects."
      experienceTitle={defaultExperienceTitle}
      experienceSubtitle={defaultExperienceSubtitle}
      experienceItems={masterExperience}
      projects={(portfolioData as ProjectData[]).filter(p => ['mobile-app', 'ios'].includes(p.type))}
      contactTitle={<>Need a native <span className="font-medieval text-accent">iOS</span> application?</>}
      contactDescription="Let's build something amazing for the App Store."
    />
  );
}
