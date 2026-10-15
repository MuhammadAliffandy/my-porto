import PortfolioTemplate from "@/app/components/templates/PortfolioTemplate";
import portfolioData from "../../../portfolio.json";
import { ProjectData } from "@/app/components/organisms/ProjectModal/ProjectModal";

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
      experienceTitle="My AI Journey"
      experienceSubtitle="Here's a look at my specialized experience in Machine Learning and AI research."
      experienceItems={[
        {
          company: "IEEE TMI RESEARCH",
          role: "AI RESEARCHER",
          meta: "MEDICAL AI · 2023 - PRESENT",
          title: "Engineering for precision medicine",
          description: "Developed end-to-end medical AI platforms including SE(2) Equivariant architectures for brain hemorrhage detection and hierarchical pipelines for Ulcerative Colitis severity grading."
        },
        {
          company: "AI FOUNDATION LAB",
          role: "MACHINE LEARNING ENGINEER",
          meta: "AI RESEARCH · 2023",
          title: "Benchmarking Foundation Models",
          description: "Orchestrated comprehensive 3D segmentation pipelines benchmarking nnU-Net v2 against SAM-Med3D. Engineered autonomous RAG agents for clinical decision support using Langchain and MCP."
        }
      ]}
      projects={(portfolioData as ProjectData[]).filter(p => p.type === 'machine-learning')}
      contactTitle={<>Looking for an AI <span className="font-medieval text-accent">Specialist</span>?</>}
      contactDescription="Let's build intelligent, scalable AI solutions together."
    />
  );
}
