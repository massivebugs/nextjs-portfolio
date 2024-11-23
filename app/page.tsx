"use client";
import { useEffect, useState } from "react";
import { ASCII_ANIMATION_FRAMES } from "./ascii_animation_frames";
import AsciiAnimation from "./components/atoms/AsciiAnimation";
import JobExperience, { Experience } from "./components/atoms/JobExperience";
import TechnicalSkill, { Skill } from "./components/atoms/TechnicalSkill";
import SocialLinkList from "./components/molecules/SocialLinkList";
import ThemeChanger from "./components/molecules/ThemeChanger";
import HomeSection from "./components/organisms/HomeSection";
import ProjectCard, { Project } from "./components/atoms/ProjectCard";

export default function Home() {
  const [playAsciiAnimation] = useState<boolean>(true);

  const jobExperiences: Experience[] = [
    {
      organization: "LEAN BODY Inc.",
      jobTitle: "Web Engineer",
      jobLengths: ["Nov 2023 - Oct 2024 (Full-time)"],
      descriptions: [
        "Full-stack engineer for one of Japan’s largest online fitness platforms, developing new UI, APIs and updates for hundreds of thousands of users.",
        "Collaborated and brainstormed closely with cross-functional teams (product, design, analytics, support, engineering) to enhance user experience, contributing to 7+ major feature releases in under a year with minimal bugs.",
        "Implemented test code generation, optimized test execution, and managed a major database upgrade, reducing test writing time by 3 minutes per test and cutting integration test time fivefold.",
      ],
    },
    {
      organization: "TERADOGA Co., Ltd",
      jobTitle: "Software Engineer",
      jobLengths: [
        "Jul 2020 - Oct 2023 (Full-time)",
        "Nov 2023 - Oct 2024 (Contract)",
      ],
      descriptions: [
        "Led the development of TERADOGA, the company’s flagship product, adjusting goals to align with a new business model that secured long-term agreements with three new business clients within the first year of development.",
        "Developed and deployed over five full-stack Laravel and Vue.js applications from the ground up for various clients, each with unique business requirements, over a span of 2.5 years.",
        "Acted as a bridge software engineer, effectively collaborating across three teams from separate companies in both English and Japanese to successfully meet feature, schedule, and deployment requirements.",
      ],
    },
  ];

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

  useEffect(() => {
    // setPlayAsciiAnimation(false);
    // const sandman = new Sandman(sandmanContainer.current);
    // sandman.init();
    // sandman.collect();
  }, []);

  return (
    <div className="max-h-screen overflow-y-auto snap-y snap-mandatory">
      <AsciiAnimation
        play={playAsciiAnimation}
        frames={ASCII_ANIMATION_FRAMES}
        frameDurationMs={100}
        reverse={true}
        className={`fixed w-screen h-screen max-h-screen overflow-hidden text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-700 dark:text-slate-400 select-none -z-10`}
        textClassName="pl-[-50px] md:pl-[100px] bottom-0"
      />
      <section className="relative flex flex-col items-center justify-center min-h-screen p-8 snap-start">
        <p className="absolute top-5">
          <span className="font-[600] mr-2">Current theme</span>
          <ThemeChanger />
        </p>
        <div className="flex flex-col items-center mb-10">
          <p className={`text-center w-full mb-1 text-lg`}>Hi, I'm Da-Hyun.</p>
          <p className={`text-center w-full mb-[2em] text-lg`}>
            I'm a full-stack developer.
          </p>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className={`rounded-md border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5`}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              className={`rounded-md border border-solid border-gray-400 dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-950 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5`}
              href="#contact-me"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mb-10 w-[80%] md:w-[50%]">
          <div className="flex-1 border-b border-solid border-[var(--foreground)]" />
          <span className={``}>Or, reach out to me via</span>
          <div className="flex-1 border-b border-solid border-[var(--foreground)]" />
        </div>
        <SocialLinkList />
      </section>
      <HomeSection
        title="Experience"
        className="p-8 sm:py-20 md:px-[15%] xl:px-[30%]"
        sandman={true}
      >
        <div className="flex flex-col gap-7">
          {jobExperiences.map((v) => (
            <JobExperience experience={v} sandman={true} key={v.organization} />
          ))}
        </div>
      </HomeSection>
      <HomeSection
        title="Technical Skills"
        className="p-8 sm:py-20 md:px-[15%] xl:px-[30%]"
        sandman={true}
      >
        <div className="flex flex-col">
          {technicalSkills.map((v) => (
            <TechnicalSkill skill={v} sandman={true} key={v.name} />
          ))}
        </div>
      </HomeSection>
      <HomeSection
        title="Featured Projects"
        className="p-8 sm:py-20 md:px-[10%] xl:px-[20%]"
        titleClassName="md:px-[7%] xl:px-[17%]"
        sandman={true}
      >
        <div className="flex flex-wrap gap-[2em]">
          {projects.map((v) => (
            <ProjectCard
              className="md:w-[calc(50%-2em)]"
              project={v}
              key={v.name}
            />
          ))}
        </div>
      </HomeSection>
      <HomeSection
        id="contact-me"
        title="Contact Me"
        className="p-8 sm:py-20 md:px-[15%] xl:px-[30%]"
        sandman={true}
      >
        <div className="flex flex-col items-center justify-center ">
          <p className="mb-3 text-center">
            I haven't had the time to start working on the contact form just
            yet, <br />
            so until then please reach me via
          </p>
          <SocialLinkList />
        </div>
      </HomeSection>
    </div>
  );
}
