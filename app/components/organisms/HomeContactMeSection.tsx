import { ForwardedRef, forwardRef } from "react";
import HomeSection from "./HomeSection";
import SocialLinkList from "../molecules/SocialLinkList";

const HomeContactMeSection = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  return (
    <HomeSection
      ref={ref}
      id="contact-me"
      title="Contact Me"
      className="p-8 sm:py-20 md:px-[15%] xl:px-[30%]"
      sandman={true}
    >
      <div className="flex flex-col items-center justify-center ">
        <p className="mb-3 text-center">
          I haven't had the time to start working on the contact form just yet
          :( <br />
          For any inquiries, please reach me via:
        </p>
        <SocialLinkList />
      </div>
    </HomeSection>
  );
});

HomeContactMeSection.displayName = "HomeContactMeSection";

export default HomeContactMeSection;
