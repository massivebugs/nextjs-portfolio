import Link from "next/link";

export type SideNavbarLink = {
  label: string;
  hash: string;
};

export default function SideNavbar(props: {
  links: SideNavbarLink[];
  currentHash: string | null;
}) {
  return (
    <div className="fixed z-10 top-0 right-0 h-screen hidden md:flex w-[150px] lg:w-[300px] pr-[50px] lg:pr-[100px] flex-col items-end justify-center">
      {props.links.map((v) => (
        <Link
          key={v.label}
          href={{ pathname: "/", hash: v.hash }}
          className={`relative font-semibold transition-colors hover:text-[var(--highlight)] hover:after:absolute after:right-[-7px] after:w-1 after:h-1 after:bg-[var(--highlight)] ${
            props.currentHash === v.hash
              ? "text-[var(--highlight)] after:absolute"
              : ""
          }`}
        >
          {v.label}
        </Link>
      ))}
    </div>
  );
}
