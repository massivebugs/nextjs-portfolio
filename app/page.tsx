"use client";
import { useEffect, useRef, useState } from "react";
import {
  ASCII_ANIMATION_FRAMES,
  ASCII_ANIMATION_FRAMES_DISAPPEAR,
} from "./ascii_animation_frames";
import AsciiAnimation from "./components/atoms/AsciiAnimation";
import { useInView } from "motion/react";
import HomeTopSection from "./components/organisms/HomeTopSection";
import HomeExperienceSection from "./components/organisms/HomeExperienceSection";
import HomeTechnicalSkillsSection from "./components/organisms/HomeTechnicalSkillsSection";
import HomeProjectsSection from "./components/organisms/HomeProjectsSection";
import HomeContactMeSection from "./components/organisms/HomeContactMeSection";

const MeAnimations = {
  idle: "idle",
  startDisappear: "startDisappear",
  disappear: "disappear",
  appear: "appear",
} as const;
type MeAnimation = (typeof MeAnimations)[keyof typeof MeAnimations];

export default function Home() {
  // Section refs and in-view listeners so we can determine when they are being displayed currently
  const topSectionRef = useRef(null),
    experienceSectionRef = useRef<HTMLElement>(null),
    technicalSkillsSectionRef = useRef(null),
    projectsSectionRef = useRef(null),
    contactMeSectionRef = useRef(null);
  const sectionMargin = "0px 0px -50px 0px";
  const isTopSectionInView = useInView(topSectionRef, {
      margin: sectionMargin,
    }),
    isExperienceSectionInView = useInView(experienceSectionRef, {
      margin: sectionMargin,
    }),
    isTechnicalSkillsSectionInView = useInView(technicalSkillsSectionRef, {
      margin: sectionMargin,
    }),
    isProjectsSectionInView = useInView(projectsSectionRef, {
      margin: sectionMargin,
    }),
    isContactSectionInView = useInView(contactMeSectionRef, {
      margin: sectionMargin,
    });
  // const sandman = useRef<Sandman>();

  const [currentAnimation, setCurrentAnimation] = useState<MeAnimation | null>(
    MeAnimations.idle
  );
  const idleAnimationStartFrameIdx = useRef<number>(0);
  const startDisappearAnimationStartFrameIdx = useRef<number>(0);
  const [experienceSectionTextRestore, setExperienceSectionTextRestore] =
    useState<boolean>(false);

  const onIdleAnimationFrameChange = (frameIdx: number) => {
    startDisappearAnimationStartFrameIdx.current = frameIdx;
  };

  const onStartDisappearAnimationFrameChange = (frameIdx: number) => {
    idleAnimationStartFrameIdx.current = frameIdx;
  };

  const onStartDisappearAnimationEnd = () => {
    setCurrentAnimation(MeAnimations.disappear);
  };

  const onDisappearAnimationFrameChange = async () => {
    // console.log("disappear animation has ended");
    // setExperienceSectionTextRestore(true);
    // if (frameIdx > 10) {
    setExperienceSectionTextRestore(true);
    // const els =
    //   experienceSectionRef.current?.getElementsByClassName(SANDMAN_CLASS);
    // for (const el of els as HTMLCollectionOf<Element>) {
    // await sandman.current?.restoreText(
    //   experienceSectionRef.current as HTMLElement,
    //   0.05
    // );
    // }
    // }
    // }
  };

  useEffect(() => {
    if (isContactSectionInView) {
      console.log("isContactSection");
      setCurrentAnimation(MeAnimations.appear);
    } else if (isProjectsSectionInView) {
      console.log("isExperienceSection");
      setCurrentAnimation(null);
    } else if (isTechnicalSkillsSectionInView) {
      console.log("isTechnicalSkillsSection");
      setCurrentAnimation(null);
    } else if (isExperienceSectionInView) {
      console.log("isExperienceSection");
      setCurrentAnimation(MeAnimations.startDisappear);
    } else if (isTopSectionInView) {
      console.log("isTopSection");
      setCurrentAnimation(MeAnimations.idle);
      // sandman.current = new Sandman(
      //   experienceSectionRef.current as unknown as HTMLElement
      // );
      // sandman.current.init();
      // sandman.current.collect(0);
    }
  }, [
    isTopSectionInView,
    isExperienceSectionInView,
    isTechnicalSkillsSectionInView,
    isProjectsSectionInView,
    isContactSectionInView,
  ]);

  useEffect(() => {
    // setPlayAsciiAnimation(false);
    // const sandman = new Sandman(sandmanContainer.current);
    // sandman.init();
    // sandman.collect();
  }, []);

  return (
    <div className="max-h-screen overflow-x-hidden overflow-y-auto snap-y snap-mandatory">
      {currentAnimation === MeAnimations.idle ? (
        <AsciiAnimation
          key={MeAnimations.idle}
          frames={ASCII_ANIMATION_FRAMES.slice(0, 30)}
          frameDurationMs={70}
          reverse={true}
          loop={true}
          onFrameChange={onIdleAnimationFrameChange}
          className={`fixed w-screen h-screen max-h-screen overflow-hidden text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-700 dark:text-slate-400 select-none -z-10`}
          textClassName="pl-[-50px] md:pl-[100px] bottom-0"
        />
      ) : currentAnimation === MeAnimations.startDisappear ? (
        <AsciiAnimation
          key={MeAnimations.startDisappear}
          frames={ASCII_ANIMATION_FRAMES.slice(
            startDisappearAnimationStartFrameIdx.current,
            ASCII_ANIMATION_FRAMES.length - 5
          )}
          frameDurationMs={30}
          onFrameChange={onStartDisappearAnimationFrameChange}
          onAnimationEnd={onStartDisappearAnimationEnd}
          className={`fixed w-screen h-screen max-h-screen overflow-hidden text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-700 dark:text-slate-400 select-none -z-10`}
          textClassName="md:pl-[100px] bottom-0"
        />
      ) : currentAnimation === MeAnimations.disappear ? (
        <AsciiAnimation
          key={MeAnimations.disappear}
          frames={ASCII_ANIMATION_FRAMES_DISAPPEAR}
          frameDurationMs={30}
          onAnimationEnd={onDisappearAnimationFrameChange}
          className={`fixed w-screen h-screen max-h-screen overflow-hidden text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-700 dark:text-slate-400 select-none -z-10`}
          textClassName="left-[-10px] lg:left-0 md:pl-[90px] bottom-0"
        />
      ) : (
        currentAnimation === MeAnimations.appear && (
          <AsciiAnimation
            key={MeAnimations.appear}
            frames={ASCII_ANIMATION_FRAMES.reverse()}
            frameDurationMs={100}
            className={`fixed w-screen h-screen max-h-screen overflow-hidden text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-700 dark:text-slate-400 select-none -z-10`}
            textClassName="pl-[-50px] md:pl-[100px] bottom-0"
          />
        )
      )}
      <HomeTopSection ref={topSectionRef} />
      <HomeExperienceSection
        ref={experienceSectionRef}
        restoreText={experienceSectionTextRestore}
      />
      <HomeTechnicalSkillsSection ref={technicalSkillsSectionRef} />
      <HomeProjectsSection ref={projectsSectionRef} />
      <HomeContactMeSection ref={contactMeSectionRef} />
    </div>
  );
}
