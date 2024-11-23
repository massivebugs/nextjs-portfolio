import SocialLink from "../atoms/SocialLink";

export default function SocialLinkList(props: { className?: string }) {
  return (
    <div
      className={`flex gap-3 flex-wrap items-center justify-center ${
        props.className ?? ""
      }`}
    >
      <SocialLink
        name="GitHub"
        href="https://github.com/massivebugs/"
        iconSrc="/github-icon.svg"
        iconSrcForDarkMode="/github-icon-white.svg"
        alt="GitHub icon"
        className="flex-1"
      ></SocialLink>
      <SocialLink
        name="LinkedIn"
        href="https://www.linkedin.com/in/massivebugs/"
        iconSrc="/linkedin-icon.png"
        iconSrcForDarkMode="/linkedin-icon-white.png"
        alt="LinkedIn icon"
        className="flex-1"
      />
      <SocialLink
        name="dhkp443@gmail.com"
        href="mailto:dhkp443@gmail.com"
        iconSrc="/email-icon.svg"
        iconSrcForDarkMode="/email-icon-white.svg"
        alt="Email icon"
        className="flex-1"
      />
    </div>
  );
}
