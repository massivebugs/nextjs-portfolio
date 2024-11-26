"use client";

import { useEffect, useRef, useState } from "react";

export default function AsciiAnimation(props: {
  frames: string[];
  frameDurationMs: number;
  start?: number;
  reverse?: boolean;
  loop?: boolean;
  flip?: boolean;
  className?: string;
  textClassName?: string;
  onFrameChange?: (frameIdx: number) => void;
  onAnimationEnd?: () => void;
}) {
  const [currFrameIdx, setCurrFrameIdx] = useState<number>(props.start ?? 0);
  const animationRequest = useRef<number>();
  const currFrameStartMs = useRef<number>();
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const isReversing = useRef<boolean>(false);
  // setCurrFrameIdx can be called multiple times before it's actual value has been updated.
  // So, we create a flag which we can use to determine if setCurrFrameIdx has been called,
  // and prevent it being called multiple times with the same current value.
  // const isFrameHandled = useRef<boolean>(false);

  const animate: FrameRequestCallback = (time) => {
    if (currFrameStartMs.current === undefined) {
      currFrameStartMs.current = time;
    } else {
      // Time passed since current frame began
      const deltaMs = time - currFrameStartMs.current;

      // If delta time surpasses current frame's duration, we show the next frame
      if (deltaMs > props.frameDurationMs) {
        // Reset frame info
        currFrameStartMs.current = time;

        setCurrFrameIdx((idx) => {
          let nextFrameIdx;
          if (isReversing.current) {
            nextFrameIdx = idx - 1;
          } else if (idx === props.frames.length - 1) {
            nextFrameIdx = 0;
          } else {
            nextFrameIdx = idx + 1;
          }

          if (nextFrameIdx === 0 && !props.loop) {
            setIsPlaying(false);
            return idx;
          }

          if (nextFrameIdx === props.frames.length - 1 || nextFrameIdx === 0) {
            if (props.reverse) {
              isReversing.current = !isReversing.current;
            }
          }

          if (props.onFrameChange) {
            props.onFrameChange(nextFrameIdx);
          }
          return nextFrameIdx;
        });
      }
    }

    if (isPlaying) {
      animationRequest.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (isPlaying === false && props.onAnimationEnd) {
      props.onAnimationEnd();
    }
  }, [isPlaying]);

  useEffect(() => {
    animationRequest.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRequest.current as number);
  }, []);

  return (
    <pre
      className={`${props.className ?? ""}`}
      style={{ transform: props.flip ? "rotateY(180deg)" : undefined }}
    >
      {props.frames.map((v, idx) => (
        <div
          className={`absolute left-0 ${
            idx === currFrameIdx ? "visible" : "invisible"
          } ${props.textClassName ?? ""}`}
          key={idx}
        >
          {v}
        </div>
      ))}
    </pre>
  );
}
