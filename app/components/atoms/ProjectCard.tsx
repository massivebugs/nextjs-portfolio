import { SANDMAN_TEXT_CLASS } from "@/app/lib/sandman";
import { ReactNode } from "react";

export type Project = {
  name: string;
  organization: string;
  description: ReactNode;
  skills: string[];
  lore?: string;
};

export default function ProjectCard(props: {
  project: Project;
  className?: string;
  sandman?: string;
}) {
  return (
    <div className={`flex flex-col ${props.className ?? ""}`}>
      <p
        className={`font-bold text-lg ${
          props.sandman ? SANDMAN_TEXT_CLASS : ""
        }`}
      >
        {props.project.name}
      </p>
      <p className={`italic mb-3 ${props.sandman ? SANDMAN_TEXT_CLASS : ""}`}>
        {props.project.organization}
      </p>
      <div
        className={`mb-3 whitespace-pre-line ${
          props.sandman ? SANDMAN_TEXT_CLASS : ""
        }`}
      >
        {props.project.description}
      </div>
      <p className={`font-bold ${props.sandman ? SANDMAN_TEXT_CLASS : ""}`}>
        Technologies used:
      </p>
      <ul className="list-disc pl-5 mb-3">
        <li className={`${props.sandman ? SANDMAN_TEXT_CLASS : ""}`}>
          {props.project.skills.join(", ")}
        </li>
      </ul>
      {/* TODO: Lore link to devblog */}
    </div>
  );
}
