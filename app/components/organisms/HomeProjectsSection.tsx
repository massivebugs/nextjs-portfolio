"use client";
import { useEffect, useRef } from "react";
import HomeSection from "./HomeSection";
import ProjectCard, { Project } from "../atoms/ProjectCard";
import { motion, useInView, useScroll, useTransform } from "motion/react";

export default function HomeProjectsSection(props: {
  onEnterView?: () => void;
  onLeaveView?: () => void;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const isInView = useInView(ref);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  useEffect(() => {
    if (isInView && props.onEnterView) {
      props.onEnterView();
    } else if (props.onLeaveView) {
      props.onLeaveView();
    }
  }, [isInView]);

  const projects: Project[] = [
    {
      name: "LEAN BODY",
      organization: "LEAN BODY Inc.",
      description: (
        <div>
          <p className="mb-3">
            LEAN BODY is an all-in-one online fitness platform, with weight &
            diet management features and thousands of online lessons.
          </p>
          <ul className="list-disc pl-5 [&>li]:mb-1">
            <li>
              I was part of the
              <span className="font-bold"> Product & Engineering team</span>
            </li>
            <li>
              I designed and implemented{" "}
              <span className="font-bold">Back-end APIs</span>, and made tools
              and updates to{" "}
              <span className="font-bold">
                make tests easier to write and faster to execute
              </span>
              .
            </li>
            <li>
              I implemented <span className="font-bold">Front-end web app</span>{" "}
              features based on Figma design.
            </li>
            <li>
              I performed updates on{" "}
              <span className="font-bold">
                AWS infrastructures and services
              </span>
              .
            </li>
          </ul>
        </div>
      ),
      skills: ["Go", "TypeScript + React.js", "SQL", "Docker", "AWS", "GCP"],
    },
    {
      name: "TERADOGA",
      organization: "TERADOGA Co., Ltd",
      description: (
        <div>
          <p>TERADOGA is an interactive video maker platform.</p>
          <p className="mb-3">
            It's kind of difficult to explain what it is, so here is a video of
            what the app is like:
          </p>
          <ul className="list-disc pl-5 [&>li]:mb-1">
            <li>
              I was incharge of
              <span className="font-bold">
                {" "}
                designing the interactive video platform form ground up
              </span>
            </li>
            <li>
              I implemented the application's{" "}
              <span className="font-bold">Back-end and Front-end</span> and set
              up most of the{" "}
              <span className="font-bold">AWS infrastructure.</span>
            </li>
            <li>
              I built{" "}
              <span className="font-bold">integration APIs and Webhooks</span>{" "}
              for business clients{" "}
              <span className="font-bold">
                who wished to integrate TERADOGA
              </span>{" "}
              to their own platforms.
            </li>
          </ul>
        </div>
      ),
      skills: [
        "PHP + Laravel",
        "TypeScript + Vue.js",
        "AWS",
        "nginx (Cache server)",
      ],
    },
    {
      name: "Portfolio",
      organization: "Personal Project",
      description: (
        <div>
          <p>
            I wanted to make a portfolio which would really embody who I am, and
            what I can do.
          </p>
          <p>I believe I took that quite literally.</p>
        </div>
      ),
      skills: ["TypeScript + Next.js"],
    },
    {
      name: "TELEBYTE",
      organization: "Personal Project",
      description: (
        <div>
          <p className="mb-3">
            My main skills lie in web application development, but I am always
            looking to expand my knowledge through other domains, and to have
            fun.
          </p>
          <p>
            In this project, I made a small virtual presence robot controlled
            through a WebRTC video chat, capable of doing custom
            animations/movement.
          </p>
          <p>
            This project is still a work in progress, but I've learned{" "}
            <span className="font-bold">ALOT</span> so far!
          </p>
        </div>
      ),
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
      title="Featured Projects"
      className={`p-2 sm:py-20 h-[300vh] ${props.className ?? ""}`}
      titleClassName="md:px-[7%] xl:px-[17%]"
      sandman={true}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {projects.map((v) => (
            <ProjectCard
              project={v}
              key={v.name}
              className="w-[450px] h-[450px]"
            />
          ))}
        </motion.div>
      </div>
    </HomeSection>
  );
}
