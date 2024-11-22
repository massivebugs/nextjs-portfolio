import { SANDMAN_TEXT_CLASS } from "@/app/lib/sandman";
import Image from "next/image";

export default function SocialLink(props: {
  name: string;
  href: string;
  iconSrc: string;
  iconSrcForDarkMode: string;
  alt?: string;
  className?: string;
  sandman?: boolean;
}) {
  return (
    <a
      className={`flex items-center gap-[0.3em] hover:underline hover:underline-offset-4 ${
        props.className ?? ""
      }`}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        className="dark:hidden"
        src={props.iconSrc}
        alt={props.alt ?? ""}
        width={16}
        height={16}
      />
      <Image
        aria-hidden
        className="hidden dark:block"
        src={props.iconSrcForDarkMode}
        alt={props.alt ?? ""}
        width={16}
        height={16}
      />
      <span className={`${props.sandman ? SANDMAN_TEXT_CLASS : ""}`}>
        {props.name}
      </span>
    </a>
  );
}
