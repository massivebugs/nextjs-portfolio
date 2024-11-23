import { SANDMAN_CLASS } from "@/app/lib/sandman";
import { ForwardedRef, forwardRef, ReactNode } from "react";

const HomeSection = forwardRef(
  (
    props: {
      title: string;
      id?: string;
      className?: string;
      titleClassName?: string;
      sandman?: boolean;
      children: ReactNode;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <section
        ref={ref}
        id={props.id}
        className={`relative flex flex-col justify-center min-h-screen snap-start ${
          props.className ?? ""
        }`}
      >
        <h2
          className={`text-[2em] text-center mb-10 ${
            props.titleClassName ?? ""
          } ${props.sandman ? SANDMAN_CLASS : ""}`}
        >
          {props.title}
        </h2>
        {props.children}
      </section>
    );
  }
);

export default HomeSection;
