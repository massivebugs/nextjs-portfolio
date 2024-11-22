import { SANDMAN_TEXT_CLASS } from "@/app/lib/sandman";
import { ReactNode } from "react";

export default function HomeSection(props: {
  title: string;
  id?: string;
  sandman?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={props.id}
      className="relative flex flex-col justify-center min-h-screen p-8 sm:py-20 md:px-[15%] xl:px-[30%] snap-start"
    >
      <h2
        className={`text-[2em] mb-10 ${
          props.sandman ? SANDMAN_TEXT_CLASS : ""
        }`}
      >
        {props.title}
      </h2>
      {props.children}
    </section>
  );
}
