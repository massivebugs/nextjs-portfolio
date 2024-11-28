"use client";
import { useRef } from "react";
import HomeSection from "./HomeSection";
import ProjectCard, { Project } from "../molecules/ProjectCard";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

export default function HomeProjectsSection(props: {
  id: string;
  restoreText: boolean;
  onEnterView: () => void;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useRef(false);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0.2, 1], ["4%", "-72%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0 && !isInView.current) {
      isInView.current = true;
      props.onEnterView();
    }
  });

  const projects: Project[] = [
    {
      name: "LEAN BODY",
      organization: "LEAN BODY Inc.",
      description: `As a full-stack engineer for an all-in-one online fitness platform, I worked in a fast-paced environment with frequent feature releases.

My responsibilities included developing APIs in Go, implementing React.js front-end based on Figma designs, and updating AWS services to support new functionality.`,
      skills: ["Go", "TypeScript + React.js", "SQL", "Docker", "AWS", "GCP"],
      imageSrc: "https://lp.lean-body.jp/img/ogp.png",
      url: "https://lp.lean-body.jp",
    },
    {
      name: "TERADOGA",
      organization: "TERADOGA Co., Ltd",
      description: `I designed and led the development of an interactive video maker platform, integrating APIs and webhooks for seamless third-party connections.

This project ultimately led to the company rebranding itself around this product.`,
      skills: [
        "PHP + Laravel",
        "TypeScript + Vue.js",
        "Tailwind CSS",
        "AWS",
        "GCP",
        "nginx (cache server)",
      ],
      imageSrc: "/teradoga.jpeg",
      url: "https://teradoga.jp",
      vimeoId: "1033504858",
    },
    {
      name: "Portfolio",
      organization: "Personal Project",
      description: `I wanted to create a portfolio site that feels personal and reflects who I am, so I designed it to look like me (as ASCII art) filling in the blanks. 

I put it together in just a few days, including the design, as a fun project.`,
      skills: ["TypeScript + Next.js", "Tailwind CSS"],
      url: "same",
    },
    {
      name: "TELEBYTE",
      organization: "Personal Project",
      description: `My main skills are in web application development, but I’m always looking to expand my knowledge and have fun. 

In this project, I built a virtual presence robot controlled via WebRTC video chat, capable of custom animations and movement. 

It’s still a work in progress, but I’ve learned a lot so far!`,
      skills: ["C++", "JavaScript", "PlatformIO", "ESP32"],
      imageSrc: "/telebyte.jpg",
      url: "https://github.com/massivebugs/telebyte-robot",
      vimeoId: "1033534452",
    },
  ];

  return (
    <HomeSection
      ref={ref}
      id={props.id}
      title="Featured Projects"
      className={`p-2 sm:py-20 h-[300vh] ${props.className ?? ""}`}
      titleClassName="md:px-[7%] xl:px-[17%]"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {projects.map((v) => (
            <ProjectCard
              project={v}
              restoreText={props.restoreText}
              key={v.name}
            />
          ))}
        </motion.div>
      </div>
    </HomeSection>
  );
}
