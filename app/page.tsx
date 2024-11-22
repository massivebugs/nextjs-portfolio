import { ASCII_ANIMATION_FRAMES } from "./ascii_animation_frames";
import AsciiAnimation from "./components/atoms/AsciiAnimation";
import JobExperience, { Experience } from "./components/atoms/JobExperience";
import TechnicalSkill, { Skill } from "./components/atoms/TechnicalSkill";
import SocialLinkList from "./components/molecules/SocialLinkList";
import ThemeChanger from "./components/molecules/ThemeChanger";
import HomeSection from "./components/organisms/HomeSection";
import { SANDMAN_TEXT_CLASS } from "./lib/sandman";

export default function Home() {
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

  return (
    <div className="max-h-screen overflow-y-auto snap-y snap-mandatory">
      <AsciiAnimation
        frames={ASCII_ANIMATION_FRAMES}
        frameDurationMs={100}
        reverse={true}
        className={`fixed left-[-110px] md:left-[80px] bottom-0 text-[3px] tracking-[0.3px] md:text-[4px] md:tracking-[0.5px] text-slate-500 dark:text-slate-600 select-none -z-10 max-h-screen overflow-hidden ${SANDMAN_TEXT_CLASS}`}
      />
      <section className="relative flex flex-col items-center justify-center min-h-screen p-8 snap-start">
        <p className="absolute top-5">
          <span className="font-[600] mr-2">Current theme</span>
          <ThemeChanger />
        </p>
        <div className="flex flex-col items-center mb-10">
          <p
            className={`text-center w-full mb-1 text-lg ${SANDMAN_TEXT_CLASS}`}
          >
            Hi, I'm Da-Hyun.
          </p>
          <p
            className={`text-center w-full mb-[2em] text-lg ${SANDMAN_TEXT_CLASS}`}
          >
            I'm a full-stack developer.
          </p>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className={`rounded-md border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${SANDMAN_TEXT_CLASS}`}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              className={`rounded-md border border-solid border-gray-400 dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-950 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${SANDMAN_TEXT_CLASS}`}
              href="#contact-me"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mb-10 w-[80%]">
          <div className="flex-1 border-b border-solid border-[var(--foreground)]" />
          <span className={`${SANDMAN_TEXT_CLASS}`}>
            Or, reach out to me via
          </span>
          <div className="flex-1 border-b border-solid border-[var(--foreground)]" />
        </div>
        <SocialLinkList sandman={true} />
      </section>
      <HomeSection title="Experience" sandman={true}>
        <div className="flex flex-col gap-7">
          {jobExperiences.map((v) => (
            <JobExperience experience={v} sandman={true} key={v.organization} />
          ))}
        </div>
      </HomeSection>
      <HomeSection title="Technical Skills" sandman={true}>
        <div className="flex flex-col">
          {technicalSkills.map((v) => (
            <TechnicalSkill skill={v} sandman={true} key={v.name} />
          ))}
        </div>
      </HomeSection>
      <HomeSection title="Projects" sandman={true}>
        <div>TODO</div>
      </HomeSection>
      <HomeSection id="contact-me" title="Contact Me" sandman={true}>
        <div>TODO</div>
      </HomeSection>
    </div>
  );
}
