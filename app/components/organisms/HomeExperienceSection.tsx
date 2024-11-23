import { ForwardedRef, forwardRef, ReactNode } from "react";
import HomeSection from "./HomeSection";
import JobExperience, { Experience } from "../atoms/JobExperience";

const HomeExperienceSection = forwardRef(
  (props: {}, ref: ForwardedRef<HTMLElement>) => {
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

    return (
      <HomeSection
        ref={ref}
        title="Experience"
        className="p-8 sm:py-20 md:px-[15%] xl:px-[30%]"
        sandman={true}
      >
        <div className="flex flex-col gap-7">
          {jobExperiences.map((v) => (
            <JobExperience experience={v} key={v.organization} />
          ))}
        </div>
      </HomeSection>
    );
  }
);

export default HomeExperienceSection;
