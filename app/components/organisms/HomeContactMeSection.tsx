import { useEffect, useRef } from "react";
import HomeSection from "./HomeSection";
import SocialLinkList from "../molecules/SocialLinkList";
import { useInView } from "motion/react";

export default function HomeContactMeSection(props: {
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
    <HomeSection
      ref={ref}
      id="contact-me"
      title="Contact Me"
      className={`p-8 sm:py-20 md:px-[15%] xl:px-[30%] flex flex-col justify-center ${
        props.className ?? ""
      }`}
      sandman={true}
    >
      <div className="flex flex-col items-center justify-center ">
        <p className="mb-5 text-center">
          I haven't had the time to start working on the contact form just yet
          :( <br />
          For any inquiries, please reach me via:
        </p>
        <SocialLinkList />
      </div>
    </HomeSection>
  );
}
