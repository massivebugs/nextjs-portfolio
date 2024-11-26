"use client";

import { useRef, useState } from "react";

export default function SandmanText(props: {
  text: string;
  initialPos: "left" | "right";
  restore: boolean;
}) {
  const [showSplit, setShowSplit] = useState<boolean>(true);
  const onTransitionEnd = (idx: number) => {
    if (idx === props.text.length - 1) {
      setShowSplit(false);
    }
  };
  return showSplit
    ? props.text.split("").map((v, idx) => (
        <span
          onTransitionEnd={() => onTransitionEnd(idx)}
          className="whitespace-pre inline-block transition-transform"
          style={{
            transitionProperty: "transform, opacity",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transform: props.restore
              ? ""
              : props.initialPos === "left"
              ? "translate(-10px,-30px)"
              : "translate(10px,-30px)",
            opacity: props.restore ? "" : "0",
            transitionDelay:
              props.initialPos === "left"
                ? `${(props.text.length - idx) * 5}ms`
                : `${idx * 5}ms`,
            transitionDuration: "300ms",
          }}
          key={idx}
        >
          {v}
        </span>
      ))
    : props.text;
}
