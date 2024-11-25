import { useEffect, useRef } from "react";
import HomeSection from "./HomeSection";
import TechnicalSkill, { Skill } from "../atoms/TechnicalSkill";
import { useInView } from "motion/react";

export default function HomeTechnicalSkillsSection(props: {
  onEnterView?: () => void;
  onLeaveView?: () => void;
  className?: string;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && props.onEnterView) {
      props.onEnterView();
    } else if (props.onLeaveView) {
      props.onLeaveView();
    }
  }, [isInView]);

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
      className={`p-8 sm:py-20 md:px-[15%] xl:px-[30%] flex flex-col justify-center ${
        props.className ?? ""
      }`}
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
