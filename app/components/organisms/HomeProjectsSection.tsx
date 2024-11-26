"use client";
import { useEffect, useRef } from "react";
import HomeSection from "./HomeSection";
import ProjectCard, { Project } from "../atoms/ProjectCard";
import { motion, useInView, useScroll, useTransform } from "motion/react";

export default function HomeProjectsSection(props: {
  id: string;
  restoreText: boolean;
  onEnterView: () => void;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const isInView = useInView(ref);

  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-95%"]);

  useEffect(() => {
    if (isInView && props.onEnterView) {
      props.onEnterView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const projects: Project[] = [
    {
      name: "LEAN BODY",
      organization: "LEAN BODY Inc.",
      description: `I worked as a full-stack engineer for an all-in-one online fitness platform,
in a high-paced environment and quick feature releases.`,
      skills: ["Go", "TypeScript + React.js", "SQL", "Docker", "AWS", "GCP"],
      imageSrc: "https://lp.lean-body.jp/img/ogp.png",
    },
    {
      name: "TERADOGA",
      organization: "TERADOGA Co., Ltd",
      description: `I designed and led the development of an interactive video maker platform from the ground up,
while also implementing integration APIs and Webhooks for third-party integration.`,
      skills: [
        "PHP + Laravel",
        "TypeScript + Vue.js",
        "AWS",
        "nginx (Cache server)",
      ],
      imageSrc: "/teradoga.jpeg",
      url: "teradoga.",
    },
    {
      name: "Portfolio",
      organization: "Personal Project",
      description: `I wanted to make a portfolio that would really embody who I am and what I can do.
I believe I took that quite literally.`,
      skills: ["TypeScript + Next.js"],
    },
    {
      name: "TELEBYTE",
      organization: "Personal Project",
      description: `My main skills lie in web application development, but I am always looking to expand my knowledge through other domains and to have fun.
In this project, I made a small virtual presence robot controlled through a WebRTC video chat, capable of doing custom animations/movement.
This project is still a work in progress, but I've learned a lot so far!`,
      skills: [
        "C++",
        "JavaScript",
        "PlatformIO",
        "Microcontroller development board(ESP32-WROOM32) and a few other sensors and modules",
      ],
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
