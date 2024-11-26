"use client";

import { useEffect, useRef, useState } from "react";

export default function SandmanText(props: {
  text: string;
  initialPos: "left" | "right";
  restore: boolean;
}) {
  const [currentText, setCurrentText] = useState<string>("");
  const animationHandler = useRef<number>();

  useEffect(() => {
    if (!props.restore) {
      return;
    }

    let buffer = "";
    let currentTextIdx = 0;
    let prevTime: number | null = null;
    const animate: FrameRequestCallback = (time) => {
      if (prevTime === null) {
        prevTime = time;
      }

      const delta = time - prevTime;

      if (delta > 5) {
        buffer += props.text[currentTextIdx];
        setCurrentText(buffer);
        currentTextIdx++;
        prevTime = time;
      }

      if (!(currentTextIdx === props.text.length)) {
        requestAnimationFrame(animate);
      }
    };

    animationHandler.current = requestAnimationFrame(animate);
  }, [props.restore]);

  return <>{currentText}</>;
}
