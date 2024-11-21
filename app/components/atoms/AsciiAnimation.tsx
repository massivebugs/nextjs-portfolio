"use client";

import { useEffect, useRef, useState } from "react";

export default function AsciiAnimation(props: {
  frames: string[];
  frameDurationMs: number;
  reverse: boolean;
  className?: string;
}) {
  const [currFrameIdx, setCurrFrameIdx] = useState<number>(0);
  const animationRequest = useRef<number>();
  const currFrameStartTime = useRef<number>();
  const isFrameHandled = useRef<boolean>(false);
  const isReversing = useRef<boolean>(false);

  const animate: FrameRequestCallback = (time) => {
    if (currFrameStartTime.current === undefined) {
      currFrameStartTime.current = time;
    } else {
      // Time passed since current frame began
      const deltaMs = time - currFrameStartTime.current;

      // If delta time surpasses current frame's duration, we show the next frame
      if (deltaMs > props.frameDurationMs) {
        // Reset frame info
        isFrameHandled.current = false;
        currFrameStartTime.current = time;

        setCurrFrameIdx((idx) => {
          const nextFrameIdx = idx + 1;

          if (nextFrameIdx === props.frames.length) {
            if (props.reverse && !isFrameHandled.current) {
              isReversing.current = !isReversing.current;
              isFrameHandled.current = true;
            }
            return 0;
          }

          return nextFrameIdx;
        });
      }
    }

    animationRequest.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRequest.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRequest.current as number);
  }, []);

  return (
    <pre className={`${props.className ?? ""}`}>
      {
        props.frames[
          isReversing.current
            ? props.frames.length - 1 - currFrameIdx
            : currFrameIdx
        ]
      }
    </pre>
  );
}
