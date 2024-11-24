import { ForwardedRef, forwardRef } from "react";
import HomeSection from "./HomeSection";
import TechnicalSkill, { Skill } from "../atoms/TechnicalSkill";

const HomeTechnicalSkillsSection = forwardRef(
  (_, ref: ForwardedRef<HTMLElement>) => {
    const technicalSkills: Skill[] = [
      {
        name: "Programming Languages",
        skills: ["Go", "PHP", "JavaScript", "TypeScript"],
      },
      {
        name: "Back-end Frameworks & Tools",
        skills: ["Echo(Go)", "Laravel(PHP)", "OpenAPI"],
      },
      {
        name: "Front-end Frameworks",
        skills: [
          "Vue.js",
          "React.js",
          "Next.js",
          "Flutter",
          "Bootstrap",
          "Tailwind CSS",
        ],
      },
      {
        name: "Cloud Platforms",
        skills: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)"],
      },
      { name: "Databases", skills: ["MySQL", "MariaDB"] },
      { name: "Containerization", skills: ["Docker"] },
      {
        name: "Other",
        skills: [
          "Attention to detail",
          "strong work ethic",
          "flexibility and adaptability",
        ],
      },
    ];

    return (
      <HomeSection
        ref={ref}
        title="Technical Skills"
        className="p-8 sm:py-20 md:px-[15%] xl:px-[30%]"
        sandman={true}
      >
        <div className="flex flex-col">
          {technicalSkills.map((v) => (
            <TechnicalSkill skill={v} key={v.name} />
          ))}
        </div>
      </HomeSection>
    );
  }
);

HomeTechnicalSkillsSection.displayName = "HomeTechnicalSkillsSection";

export default HomeTechnicalSkillsSection;
