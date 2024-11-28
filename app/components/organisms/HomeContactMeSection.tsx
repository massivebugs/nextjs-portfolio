import { useRef } from "react";
import HomeSection from "./HomeSection";
import SocialLinkList from "../molecules/SocialLinkList";
import { useMotionValueEvent, useScroll } from "motion/react";
import AppearingText from "../atoms/AppearingText";

export default function HomeContactMeSection(props: {
  id: string;
  restoreText: boolean;
  onEnterView: () => void;
  onLeaveView: () => void;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useRef(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value >= 0.5 && !isInView.current) {
      isInView.current = true;
      props.onEnterView();
    } else if (value < 0.5 && isInView.current) {
      isInView.current = false;
      props.onLeaveView();
    }
  });

  return (
    <HomeSection
      ref={ref}
      id={props.id}
      title="Contact Me"
      className={`p-8 sm:py-20 md:px-[15%] xl:px-[30%] flex flex-col justify-center ${
        props.className ?? ""
      }`}
    >
      <div className="flex flex-col items-center justify-center ">
        <p className="mb-5 text-center">
          <AppearingText
            text="I haven't had the time to start working on the contact form just yet."
            initialPos="left"
            restore={props.restoreText}
          />
          <br />
          <AppearingText
            text="For any inquiries, please reach me via:"
            initialPos="left"
            restore={props.restoreText}
          />
        </p>
        <SocialLinkList />
      </div>
    </HomeSection>
  );
}
