import Image from "next/image";

export default function SocialLink(props: {
  name: string;
  label: string;
  href: string;
  iconSrc: string;
  iconSrcForDarkMode: string;
  alt: string;
  className?: string;
}) {
  return (
    <a
      className={`flex items-center gap-[0.3em] hover:underline hover:underline-offset-4 ${
        props.className ?? ""
      }`}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props.label}
    >
      <Image
        aria-hidden
        className="dark:hidden"
        src={props.iconSrc}
        alt={props.alt}
        width={16}
        height={16}
      />
      <Image
        aria-hidden
        className="hidden dark:block"
        src={props.iconSrcForDarkMode}
        alt={props.alt}
        width={16}
        height={16}
      />
      <span>{props.name}</span>
    </a>
  );
}
