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
import SideNavbar from "./components/molecules/HomeSideNav";

const PageSections = {
  top: "top",
  experience: "experience",
  technicalSkills: "technical-skills",
  projects: "projects",
  contact: "contact-me",
};
type PageSection = (typeof PageSections)[keyof typeof PageSections];

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
  const [currentPageSection, setCurrentPageSection] =
    useState<PageSection | null>(null);

  const onEnterTopSection = () => {
    setFlipAnimation(false);
    switchAnimation(MeAnimations.appear);
    setCurrentPageSection(PageSections.top);
  };

  const onLeaveTopSection = () => {
    switchAnimation(MeAnimations.disappear);
  };

  const onEnterExperienceSection = () => {
    setExperienceSectionTextRestore(true);
    setCurrentPageSection(PageSections.experience);
  };

  const onEnterTechnicalSkillsSection = () => {
    setTechnicalSkillsSectionTextRestore(true);
    setCurrentPageSection(PageSections.technicalSkills);
  };

  const onEnterProjectsSection = () => {
    setProjectsSectionTextRestore(true);
    setCurrentPageSection(PageSections.projects);
  };

  const onEnterContactMeSection = () => {
    setFlipAnimation(true);
    switchAnimation(MeAnimations.appear);
    setContactMeSectionTextRestore(true);
    setCurrentPageSection(PageSections.contact);
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
          className="fixed w-screen h-screen max-h-screen overflow-hidden font-bold text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-800 md:text-slate-700 dark:text-slate-400 select-none -z-10"
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
          className="fixed w-screen h-screen max-h-screen overflow-hidden font-bold text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-800 md:text-slate-700 dark:text-slate-400 select-none -z-10"
          textClassName="pl-[-50px] md:pl-[100px] bottom-0"
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
            className="fixed w-screen h-screen max-h-screen overflow-hidden font-bold text-[3px] tracking-[2.8px] md:text-[4px] md:tracking-[3.7px] lg:text-[5px] lg:tracking-[4.5px] text-slate-800 md:text-slate-700 dark:text-slate-400 select-none -z-10"
            textClassName="pl-[-50px] md:pl-[100px] bottom-0"
          />
        )
      )}
      <SideNavbar
        links={[
          { label: "TOP", hash: PageSections.top },
          { label: "EXPERIENCE", hash: PageSections.experience },
          { label: "SKILLS", hash: PageSections.technicalSkills },
          { label: "PROJECTS", hash: PageSections.projects },
          { label: "CONTACT", hash: PageSections.contact },
        ]}
        currentHash={currentPageSection}
      />
      <HomeTopSection
        id="home"
        onEnterView={onEnterTopSection}
        onLeaveView={onLeaveTopSection}
        className="mb-[50vh]"
      />
      <HomeExperienceSection
        id="experience"
        restoreText={experienceSectionTextRestore}
        onEnterView={onEnterExperienceSection}
        className="bg-white/[0.01] mb-10"
      />
      <HomeTechnicalSkillsSection
        id="technical-skills"
        restoreText={technicalSkillsSectionTextRestore}
        onEnterView={onEnterTechnicalSkillsSection}
        className="mb-10"
      />
      <HomeProjectsSection
        id="projects"
        restoreText={projectsSectionTextRestore}
        onEnterView={onEnterProjectsSection}
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
