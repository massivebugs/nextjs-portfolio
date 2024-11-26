"use client";

import Link from "next/link";
import SandmanText from "../atoms/SandmanText";
import VimeoEmbed from "../atoms/VimeoEmbed";
import { MouseEvent, useRef, useState } from "react";

export type Project = {
  name: string;
  organization: string;
  description: string;
  skills: string[];
  imageSrc?: string;
  vimeoId?: string;
  url?: string;
  lore?: string;
};

export default function ProjectCard(props: {
  project: Project;
  restoreText: boolean;
  className?: string;
}) {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const alertTimes = useRef<number>(0);
  const onLinkClick = (event: MouseEvent) => {
    if (props.project.url === "same") {
      event.preventDefault();

      // TODO
      switch (alertTimes.current) {
        case 0:
          alert("Hey, didn’t you notice? You’re already in it!");
          break;
        case 1:
          alert(
            "Oops! You clicked the same link again! You're already here, no need to click it again!"
          );
          break;
        case 2:
          alert("Really?? I told you this is the EXACT WEBSITE!");
          break;
        case 3:
          alert(
            "Seriously? Clicked again? Are you expecting some sort of different result??"
          );
          break;
        case 4:
          alert(
            "Hahahaha...Very funny...You do that one more time, and I promise you I'll just!!!"
          );
          break;
      }

      // alertTimes.current += 1;
    }
  };
  return (
    <div className="relative">
      {showVideo && props.project.vimeoId && (
        <button
          onClick={() => setShowVideo(false)}
          className="md:hidden absolute bottom-full right-0 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span className="relative px-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
            Close Video
          </span>
        </button>
      )}
      <div
        className={`relative h-[500px] w-[300px] md:w-[700px] md:h-[400px] rounded-3xl overflow-hidden group ${
          props.className ?? ""
        }`}
        style={{
          backgroundImage: props.project.imageSrc
            ? `url(${props.project.imageSrc})`
            : undefined,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hidden md:group-hover:flex justify-center items-center gap-3 absolute w-full h-full z-10 bg-black/[0.6]">
          <>
            {props.project.vimeoId && (
              <button
                onClick={() => setShowVideo(true)}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group/button bg-gradient-to-br from-pink-500 to-orange-400 group-hover/button:from-pink-500 group-hover/button:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover/button:bg-opacity-0">
                  Demo Video
                </span>
              </button>
            )}
            {props.project.url && (
              <Link
                onClick={onLinkClick}
                href={props.project.url}
                target="_blank"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group/button bg-gradient-to-br from-cyan-500 to-blue-500 group-hover/button:from-cyan-500 group-hover/button:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover/button:bg-opacity-0">
                  Visit Site
                </span>
              </Link>
            )}
          </>
        </div>
        {showVideo && props.project.vimeoId && (
          <div
            onMouseLeave={() => {
              if (showVideo) {
                setShowVideo(false);
              }
            }}
            className="absolute w-full h-full z-10 "
          >
            <VimeoEmbed
              videoId={props.project.vimeoId}
              title={props.project.name}
              className="w-full h-full"
            />
          </div>
        )}
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full h-full p-5 bg-black/[0.6] transition-colors text-[var(--white)]">
          <div className="whitespace-nowrap">
            <p className="font-bold text-[3em]">
              <SandmanText
                text={props.project.name}
                initialPos="right"
                restore={props.restoreText}
              />
            </p>
            <p className="italic">
              <SandmanText
                text={props.project.organization}
                initialPos="right"
                restore={props.restoreText}
              />
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="mb-3 whimd:tespace-pre-line">
              <SandmanText
                text={props.project.description}
                initialPos="right"
                restore={props.restoreText}
              />
            </div>
            <div className="absolute flex flex-col gap-2 ml-5 py-3 pr-5 pl-5 rounded-tl-3xl bottom-0 right-0 bg-gradient-to-br from-slate-50 to-slate-300 text-[var(--black)]">
              <div>
                <SandmanText
                  text={props.project.skills.join(" | ")}
                  initialPos="right"
                  restore={props.restoreText}
                />
              </div>
              <div className="md:hidden flex justify-end">
                {props.project.vimeoId && (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                  >
                    <span className="relative px-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
                      Demo Video
                    </span>
                  </button>
                )}
                {props.project.url && (
                  <Link
                    onClick={onLinkClick}
                    href={props.project.url}
                    target="_blank"
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                  >
                    <span className="relative px-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
                      Visit Site
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
