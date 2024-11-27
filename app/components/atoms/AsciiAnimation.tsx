"use client";

import { useEffect, useState } from "react";

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
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (isPlaying === false && props.onAnimationEnd) {
      props.onAnimationEnd();
    }
  }, [isPlaying]);

  useEffect(() => {
    let animationRequest: number;
    let currFrameStartMs: number;
    let isReversing = false;
    let frameIdx: number = currFrameIdx;
    const animate: FrameRequestCallback = (time) => {
      if (currFrameStartMs === undefined) {
        currFrameStartMs = time;
      } else {
        // Time passed since current frame began
        const deltaMs = time - currFrameStartMs;

        // If delta time surpasses current frame's duration, we show the next frame
        if (deltaMs > props.frameDurationMs) {
          // Reset frame info
          currFrameStartMs = time;

          let nextFrameIdx;
          if (isReversing) {
            nextFrameIdx = frameIdx - 1;
          } else if (frameIdx === props.frames.length - 1) {
            nextFrameIdx = 0;
          } else {
            nextFrameIdx = frameIdx + 1;
          }

          if (nextFrameIdx === 0 && !props.loop) {
            setIsPlaying(false);
            return;
          }

          if (nextFrameIdx === props.frames.length - 1 || nextFrameIdx === 0) {
            if (props.reverse) {
              isReversing = !isReversing;
            }
          }

          if (props.onFrameChange) {
            props.onFrameChange(nextFrameIdx);
          }

          frameIdx = nextFrameIdx;

          setCurrFrameIdx(frameIdx);
        }
      }

      if (isPlaying) {
        animationRequest = requestAnimationFrame(animate);
      }
    };

    animationRequest = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRequest as number);
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
