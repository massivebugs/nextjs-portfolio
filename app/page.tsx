"use client";
import { useRef, useState } from "react";
import {
  ASCII_ANIMATION_FRAMES,
  ASCII_ANIMATION_FRAMES_DISAPPEAR,
} from "./ascii_animation_frames";
import AsciiAnimation from "./components/atoms/AsciiAnimation";
import HomeTopSection from "./components/organisms/HomeTopSection";
import HomeExperienceSection from "./components/organisms/HomeExperienceSection";
import HomeTechnicalSkillsSection from "./components/organisms/HomeTechnicalSkillsSection";
import HomeProjectsSection from "./components/organisms/HomeProjectsSection";
import HomeContactMeSection from "./components/organisms/HomeContactMeSection";

const Sections = {
  top: "top",
  experience: "experience",
  technicalSkills: "technicalSkills",
  projects: "projects",
  contactMe: "contactMe",
} as const;
type Section = (typeof Sections)[keyof typeof Sections];

const MeAnimations = {
  idle: "idle",
  disappear: "disappear",
  appear: "appear",
} as const;
type MeAnimation = (typeof MeAnimations)[keyof typeof MeAnimations];

export default function Home() {
  const currentSection = useRef<Section | null>(null);
  const [flipAnimation, setFlipAnimation] = useState<boolean>(false);
  const [currentAnimation, setCurrentAnimation] = useState<MeAnimation | null>(
    MeAnimations.idle
  );

  const disappearAnimationStartFrameIdx = useRef<number>(0);
  const [experienceSectionTextRestore, setExperienceSectionTextRestore] =
    useState<boolean>(false);

  const onEnterTopSection = () => {
    console.debug("Entering section:", Sections.top);
    currentSection.current = Sections.top;
  };

  const onEnterExperienceSection = () => {
    console.debug("Entering section:", Sections.experience);
    if (
      currentSection.current === Sections.top ||
      currentSection.current === Sections.experience
    ) {
      setFlipAnimation(false);
      setCurrentAnimation(MeAnimations.disappear);
    }
    currentSection.current = Sections.experience;
  };

  const onLeaveExperienceSection = () => {
    if (
      currentSection.current === Sections.top ||
      currentSection.current === Sections.experience
    ) {
      console.debug("Leaving section:", Sections.experience);
      setFlipAnimation(false);
      setCurrentAnimation(MeAnimations.appear);
    }
  };

  const onEnterTechnicalSkillsSection = () => {
    console.debug("Entering section:", Sections.technicalSkills);
    currentSection.current = Sections.technicalSkills;
  };

  const onEnterProjectsSection = () => {
    console.debug("Entering section:", Sections.projects);
    if (currentSection.current === Sections.contactMe) {
      setFlipAnimation(true);
      setCurrentAnimation(MeAnimations.disappear);
    }
    currentSection.current = Sections.projects;
  };

  const onLeaveProjectsSection = () => {
    if (currentSection.current === Sections.projects) {
      console.debug("Leaving section:", Sections.projects);
      setFlipAnimation(true);
      setCurrentAnimation(MeAnimations.appear);
    }
  };

  const onContactMeSectionView = () => {
    console.debug("Entering section:", Sections.contactMe);
    currentSection.current = Sections.contactMe;
  };

  const onIdleAnimationFrameChange = (frameIdx: number) => {
    disappearAnimationStartFrameIdx.current = frameIdx;
  };

  const onDisappearAnimationEnd = async () => {
    setExperienceSectionTextRestore(true);
  };

  const onAppearAnimationEnd = async () => {
    setCurrentAnimation(MeAnimations.idle);
  };

  return (
    <div>
      {currentAnimation === MeAnimations.idle ? (
        <AsciiAnimation
          key={MeAnimations.idle}
          frames={ASCII_ANIMATION_FRAMES.slice(0, 30)}
          frameDurationMs={80}
          reverse={true}
          loop={true}
          flip={flipAnimation}
          onFrameChange={onIdleAnimationFrameChange}
          className="fixed w-screen h-screen max-h-screen overflow-hidden text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-700 dark:text-slate-400 select-none -z-10"
          textClassName="pl-[-50px] md:pl-[100px] bottom-0"
        />
      ) : currentAnimation === MeAnimations.disappear ? (
        <AsciiAnimation
          key={MeAnimations.disappear}
          frames={ASCII_ANIMATION_FRAMES.slice(
            disappearAnimationStartFrameIdx.current,
            ASCII_ANIMATION_FRAMES.length
          ).concat(ASCII_ANIMATION_FRAMES_DISAPPEAR)}
          flip={flipAnimation}
          frameDurationMs={30}
          onAnimationEnd={onDisappearAnimationEnd}
          className="fixed w-screen h-screen max-h-screen overflow-hidden text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-700 dark:text-slate-400 select-none -z-10"
          textClassName="md:pl-[100px] bottom-0"
        />
      ) : (
        currentAnimation === MeAnimations.appear && (
          <AsciiAnimation
            key={MeAnimations.appear}
            frames={ASCII_ANIMATION_FRAMES_DISAPPEAR.slice()
              .reverse()
              .concat(
                ASCII_ANIMATION_FRAMES.slice(
                  0,
                  ASCII_ANIMATION_FRAMES.length - 1
                ).reverse()
              )}
            frameDurationMs={60}
            flip={flipAnimation}
            onAnimationEnd={onAppearAnimationEnd}
            className="fixed w-screen h-screen max-h-screen overflow-hidden text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-700 dark:text-slate-400 select-none -z-10"
            textClassName="pl-[-50px] md:pl-[100px] bottom-0"
          />
        )
      )}
      <HomeTopSection onEnterView={onEnterTopSection} className="mb-10" />
      <HomeExperienceSection
        onEnterView={onEnterExperienceSection}
        onLeaveView={onLeaveExperienceSection}
        restoreText={experienceSectionTextRestore}
        className="bg-white/[0.01] mb-10"
      />
      <HomeTechnicalSkillsSection
        onEnterView={onEnterTechnicalSkillsSection}
        className="mb-10"
      />
      <HomeProjectsSection
        onEnterView={onEnterProjectsSection}
        onLeaveView={onLeaveProjectsSection}
        className="bg-white/[0.01] mb-10"
      />
      <HomeContactMeSection onEnterView={onContactMeSectionView} />
    </div>
  );
}
