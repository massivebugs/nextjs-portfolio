import { ASCII_ANIMATION_FRAMES } from "./ascii_animation_frames";
import AsciiAnimation from "./components/atoms/AsciiAnimation";
import SocialLink from "./components/atoms/SocialLink";

export default function Home() {
  return (
    <div className="max-h-screen overflow-y-auto snap-y snap-mandatory">
      <AsciiAnimation
        frames={ASCII_ANIMATION_FRAMES}
        frameDurationMs={100}
        reverse={true}
        className="fixed left-0 bottom-0 text-[3px] tracking-[0.3px] md:text-[5px] md:tracking-[0.5px] text-[var(--grey)] select-none -z-10 max-h-screen overflow-hidden sandman-text"
      />
      <section className="relative flex flex-col items-center justify-center min-h-screen p-8 snap-start">
        <div className="flex flex-col items-center mb-10">
          <p className="text-center w-full mb-1 sandman-text text-lg">
            Hi, I'm Da-Hyun.
          </p>
          <p className="text-center w-full mb-[2em] sandman-text text-lg">
            I'm a full-stack developer.
          </p>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-md border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              className="rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mb-10 w-[80%]">
          <div className="flex-1 border-b border-solid border-[var(--foreground)]" />
          <span className="sandman-text">Or, reach out to me via</span>
          <div className="flex-1 border-b border-solid border-[var(--foreground)]" />
        </div>
        <div className="flex gap-3 flex-wrap items-center justify-center">
          <SocialLink
            href="https://github.com/massivebugs/"
            iconSrc="/github-icon.svg"
            iconSrcForDarkMode="/github-icon-white.svg"
            alt="GitHub icon"
            className="flex-1"
          >
            <span className="sandman-text">GitHub</span>
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/massivebugs/"
            iconSrc="/linkedin-icon.png"
            iconSrcForDarkMode="/linkedin-icon-white.png"
            alt="LinkedIn icon"
            className="flex-1"
          >
            <span className="sandman-text">LinkedIn</span>
          </SocialLink>
          <SocialLink
            href="mailto:dhkp443@gmail.com"
            iconSrc="/email-icon.svg"
            iconSrcForDarkMode="/email-icon-white.svg"
            alt="Email icon"
            className="flex-1"
          >
            <span className="sandman-text">dhkp443@gmail.com</span>
          </SocialLink>
        </div>
      </section>
      <section className="relative flex flex-col justify-center min-h-screen p-8 sm:py-20 md:px-[15%] xl:px-[30%] snap-start">
        <h2 className="text-[2em] mb-10 sandman-text">Experience</h2>
        <div className="flex flex-col gap-7">
          <div>
            <p className="font-bold mb-1 sandman-text">LEAN BODY Inc.</p>
            <p className="mb-3 italic sandman-text">
              Web Engineer | Nov 2023 - Oct 2024 (Full-time)
            </p>
            <ul className="list-disc pl-5">
              <li className="sandman-text">
                Full-stack engineer for one of Japan’s largest online fitness
                platforms, developing new features and fixes for hundreds of
                thousands of users.
              </li>
              <li className="sandman-text">
                Collaborated and brainstormed closely with cross-functional
                teams (product, design, analytics, support, engineering) to
                enhance user experience, contributing to 7+ major feature
                releases in under a year with minimal bugs.
              </li>
              <li className="sandman-text">
                Implemented test code generation, optimized test execution, and
                managed a major database upgrade, reducing test writing time by
                3 minutes per test and cutting integration test time fivefold.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-1 sandman-text">TERADOGA Co., Ltd</p>
            <p className="mb-3 italic sandman-text">
              Software Engineer | Jul 2020 - Oct 2023 (Full-time) | Nov 2023 -
              Oct 2024 (Contract)
            </p>
            <ul className="list-disc pl-5">
              <li className="sandman-text">
                Led the development of TERADOGA, the company’s flagship product,
                adjusting goals to align with a new business model that secured
                long-term agreements with three new business clients within the
                first year of development.
              </li>
              <li className="sandman-text">
                Developed and deployed over five full-stack Laravel and Vue.js
                applications from the ground up for various clients, each with
                unique business requirements, over a span of 2.5 years.
              </li>
              <li className="sandman-text">
                Acted as a bridge software engineer, effectively collaborating
                across three teams from separate companies in both English and
                Japanese to successfully meet feature, schedule, and deployment
                requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col justify-center min-h-screen p-8 sm:py-20 md:px-[15%] xl:px-[30%] snap-start">
        <h2 className="text-[2em] mb-10 sandman-text">Technical Skills</h2>
        <div className="flex flex-col">
          <div className="mb-2">
            <div className="font-bold sandman-text">Programming Languages</div>
            <ul className="list-disc pl-5">
              <li className="sandman-text">Go, PHP, Javascript, Typescript</li>
            </ul>
          </div>
          <div className="mb-2">
            <div className="font-bold sandman-text">Back-end Frameworks</div>
            <ul className="list-disc pl-5">
              <li className="sandman-text">Echo(PHP), Laravel(PHP)</li>
            </ul>
          </div>
          <div className="mb-2">
            <div className="font-bold sandman-text">Front-end Frameworks</div>
            <ul className="list-disc pl-5">
              <li className="sandman-text">
                Vue.js, React.js, Flutter, Bootstrap, Tailwind CSS
              </li>
            </ul>
          </div>
          <div className="mb-2">
            <div className="font-bold sandman-text">Cloud Platforms</div>
            <ul className="list-disc pl-5">
              <li className="sandman-text">
                Amazon Web Services (AWS), Google Cloud Platform (GCP)
              </li>
            </ul>
          </div>
          <div className="mb-2">
            <div className="font-bold sandman-text">Databases</div>
            <ul className="list-disc pl-5">
              <li className="sandman-text">MySQL, MariaDB</li>
            </ul>
          </div>
          <div className="mb-2">
            <div className="font-bold sandman-text">Containerization</div>
            <ul className="list-disc pl-5">
              <li className="sandman-text">Docker</li>
            </ul>
          </div>
          <div className="mb-2">
            <div className="font-bold sandman-text">Other</div>
            <ul className="list-disc pl-5">
              <li className="sandman-text">
                Attention to detail, strong work ethic, flexibility and
                adaptability
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
