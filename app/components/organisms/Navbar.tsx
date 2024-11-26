"use client";

import Link from "next/link";
import ThemeChanger from "../molecules/ThemeChanger";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="z-10 absolute top-0 left-2/4 transform -translate-x-1/2 py-1 px-[30px] w-[85%] md:w-[400px] flex gap-2 items-center justify-between bg-[var(--foreground)] text-[var(--background)] rounded-bl-[50px] rounded-br-[50px]">
      <div className="font-[600] flex gap-2 items-center">
        <Link
          href="/"
          style={{
            color: pathname === "/" ? "var(--highlight)" : undefined,
          }}
        >
          Portfolio
        </Link>
        |
        <Link
          href="/devblog"
          style={{
            color: pathname === "/devblog" ? "var(--highlight)" : undefined,
          }}
        >
          Devblog
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <span className="font-[600]">Theme</span>
        <ThemeChanger />
      </div>
    </nav>
  );
}
