import { useRef } from "react";
import HomeSection from "./HomeSection";
import TechnicalSkill, { Skill } from "../atoms/TechnicalSkill";
import { useMotionValueEvent, useScroll } from "motion/react";

export default function HomeTechnicalSkillsSection(props: {
  id: string;
  restoreText: boolean;
  onEnterView: () => void;
  className?: string;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-30% start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0.5) {
      props.onEnterView();
    }
  });

  const technicalSkills: Skill[] = [
    {
      name: "Programming Languages",
      skills: ["Go", "PHP", "JavaScript", "TypeScript"],
    },
    {
      name: "Back-end Frameworks & Tools",
      skills: ["Echo(Go)", "Laravel(PHP)", "Swagger"],
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
      className={`p-8 h-[150vh] md:px-[15%] xl:px-[30%] flex flex-col justify-center ${
        props.className ?? ""
      }`}
    >
      <div
        id={props.id}
        className="absolute pointer-events-none top-[25vh] left-1/2 transform -translate-x-1/2"
      />
      <div className="flex flex-col">
        {technicalSkills.map((v) => (
          <TechnicalSkill
            skill={v}
            restoreText={props.restoreText}
            key={v.name}
          />
        ))}
      </div>
    </HomeSection>
  );
}
