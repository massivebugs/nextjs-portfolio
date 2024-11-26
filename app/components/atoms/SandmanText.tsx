"use client";

import { useRef, useState } from "react";

export default function SandmanText(props: {
  text: string;
  initialPos: "left" | "right";
  restore: boolean;
}) {
  const [showSplit, setShowSplit] = useState<boolean>(true);
  const count = useRef<number>(0);
  const onTransitionEnd = () => {
    count.current++;
    if (count.current === props.text.length) {
      setShowSplit(false);
    }
  };
  return showSplit
    ? props.text.split("").map((v, idx) => (
        <span
          onTransitionEnd={onTransitionEnd}
          className="whitespace-pre inline-block transition-transform"
          // className="whitespace-pre inline-block translate-x-[100vw] translate-y-[-100vh] animate-fly-in-from-right"
          // className={`whitespace-pre inline-block transition-transform`}
          style={{
            // animationPlayState: props.restore ? "running" : "paused",
            // offsetPath: "ray(contain 150deg at center center);",
            // animationTimingFunction: "cubic-bezier(0.02, 0.01, 0.21, 1)",
            // animationDelay: `${idx * 10}ms`,
            transform: props.restore
              ? ""
              : props.initialPos === "left"
              ? "translate(-100vw,-100vh)"
              : "translate(100vw,-100vh)",
            transitionDelay: `${idx * 5}ms`,
            // transitionTimingFunction: "cubic-bezier(0,1.42,.85,1.41)",
            transitionDuration: "500ms",
          }}
          key={idx}
        >
          {v}
        </span>
      ))
    : props.text;
}
