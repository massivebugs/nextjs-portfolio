import { ForwardedRef, forwardRef, ReactNode } from "react";

const HomeSection = forwardRef(
  (
    props: {
      title: string;
      id?: string;
      className?: string;
      titleClassName?: string;
      children: ReactNode;
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <section
        ref={ref}
        id={props.id}
        className={`relative min-h-screen ${props.className ?? ""}`}
      >
        <h2
          className={`font-bold text-[5em] text-center mb-10 ${
            props.titleClassName ?? ""
          }`}
        >
          {props.title}
        </h2>
        {props.children}
      </section>
    );
  }
);

HomeSection.displayName = "HomeSection";

export default HomeSection;
