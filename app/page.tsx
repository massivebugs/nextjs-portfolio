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
import SideNavbar from "./components/molecules/SideNavbar";

const MeAnimations = {
  idle: "idle",
  disappear: "disappear",
  appear: "appear",
} as const;
type MeAnimation = (typeof MeAnimations)[keyof typeof MeAnimations];

export default function Home() {
  const animationFrameIdx = useRef<number>(0);
  const [flipAnimation, setFlipAnimation] = useState<boolean>(false);
  const [animation, setAnimation] = useState<MeAnimation | null>(null);
  const [experienceSectionTextRestore, setExperienceSectionTextRestore] =
    useState<boolean>(false);
  const [
    technicalSkillsSectionTextRestore,
    setTechnicalSkillsSectionTextRestore,
  ] = useState<boolean>(false);
  const [projectsSectionTextRestore, setProjectsSectionTextRestore] =
    useState<boolean>(false);
  const [contactMeSectionTextRestore, setContactMeSectionTextRestore] =
    useState<boolean>(false);

  const onEnterTopSection = () => {
    setFlipAnimation(false);
    switchAnimation(MeAnimations.appear);
  };

  const onLeaveTopSection = () => {
    switchAnimation(MeAnimations.disappear);
  };

  const onEnterContactMeSection = () => {
    setFlipAnimation(true);
    switchAnimation(MeAnimations.appear);
    setContactMeSectionTextRestore(true);
  };

  const onLeaveContactMeSection = () => {
    switchAnimation(MeAnimations.disappear);
  };

  const onAnimationFrameChange = (frameIdx: number) => {
    animationFrameIdx.current = frameIdx;
  };

  const onAppearAnimationEnd = async () => {
    setAnimation(MeAnimations.idle);
  };

  const switchAnimation = (to: MeAnimation) => {
    if (
      animation !== MeAnimations.idle &&
      to !== MeAnimations.idle &&
      animation !== null
    ) {
      animationFrameIdx.current =
        ASCII_ANIMATION_FRAMES.length +
        ASCII_ANIMATION_FRAMES_DISAPPEAR.length -
        animationFrameIdx.current;
    }
    setAnimation(to);
  };

  return (
    <div>
      {animation === MeAnimations.idle ? (
        <AsciiAnimation
          key={MeAnimations.idle}
          frames={ASCII_ANIMATION_FRAMES.slice(0, 30)}
          frameDurationMs={80}
          reverse={true}
          loop={true}
          flip={flipAnimation}
          onFrameChange={onAnimationFrameChange}
          className="fixed w-screen h-screen max-h-screen overflow-hidden text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-800 md:text-slate-700 dark:text-slate-400 select-none -z-10"
          textClassName="pl-[-50px] md:pl-[100px] bottom-0"
        />
      ) : animation === MeAnimations.disappear ? (
        <AsciiAnimation
          key={MeAnimations.disappear}
          frames={ASCII_ANIMATION_FRAMES.concat(
            ASCII_ANIMATION_FRAMES_DISAPPEAR
          )}
          start={animationFrameIdx.current}
          flip={flipAnimation}
          frameDurationMs={30}
          onFrameChange={onAnimationFrameChange}
          className="fixed w-screen h-screen max-h-screen overflow-hidden text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-800 md:text-slate-700 dark:text-slate-400 select-none -z-10"
          textClassName="md:pl-[100px] bottom-0"
        />
      ) : (
        animation === MeAnimations.appear && (
          <AsciiAnimation
            key={MeAnimations.appear}
            frames={ASCII_ANIMATION_FRAMES.concat(
              ASCII_ANIMATION_FRAMES_DISAPPEAR
            ).reverse()}
            start={animationFrameIdx.current}
            frameDurationMs={60}
            flip={flipAnimation}
            onAnimationEnd={onAppearAnimationEnd}
            onFrameChange={onAnimationFrameChange}
            className="fixed w-screen h-screen max-h-screen overflow-hidden text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-800 md:text-slate-700 dark:text-slate-400 select-none -z-10"
            textClassName="pl-[-50px] md:pl-[100px] bottom-0"
          />
        )
      )}
      <SideNavbar
        links={[
          { label: "TOP", hash: "#top" },
          { label: "EXPERIENCE", hash: "experience" },
          { label: "SKILLS", hash: "technical-skills" },
          { label: "PROJECTS", hash: "projects" },
          { label: "CONTACT", hash: "contact-me" },
        ]}
      />
      <HomeTopSection
        id="home"
        onEnterView={onEnterTopSection}
        onLeaveView={onLeaveTopSection}
        className="mb-10"
      />
      <HomeExperienceSection
        id="experience"
        restoreText={experienceSectionTextRestore}
        onEnterView={() => setExperienceSectionTextRestore(true)}
        className="bg-white/[0.01] mb-10"
      />
      <HomeTechnicalSkillsSection
        id="technical-skills"
        restoreText={technicalSkillsSectionTextRestore}
        onEnterView={() => setTechnicalSkillsSectionTextRestore(true)}
        className="mb-10"
      />
      <HomeProjectsSection
        id="projects"
        restoreText={projectsSectionTextRestore}
        onEnterView={() => setProjectsSectionTextRestore(true)}
        className="bg-white/[0.01] mb-10"
      />
      <HomeContactMeSection
        id="contact-me"
        onEnterView={onEnterContactMeSection}
        onLeaveView={onLeaveContactMeSection}
        restoreText={contactMeSectionTextRestore}
      />
    </div>
  );
}
