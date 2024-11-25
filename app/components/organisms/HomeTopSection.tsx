import ThemeChanger from "../molecules/ThemeChanger";
import SocialLinkList from "../molecules/SocialLinkList";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

export default function HomeTopSection(props: {
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

  return (
    <section
      ref={ref}
      className={`relative flex flex-col items-center justify-center min-h-screen p-8 snap-start ${
        props.className ?? ""
      }`}
    >
      <p className="absolute top-5">
        <span className="font-[600] mr-2">Theme</span>
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
            href="/files/Da_Hyun_Kim_Resume.pdf"
            target="_blank"
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
  );
}
