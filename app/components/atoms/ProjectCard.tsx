import { SANDMAN_CLASS } from "@/app/lib/sandman";
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
}) {
  return (
    <div className={`flex flex-col ${props.className ?? ""}`}>
      <p className={`font-bold text-lg ${SANDMAN_CLASS}`}>
        {props.project.name}
      </p>
      <p className={`italic mb-3 ${SANDMAN_CLASS}`}>
        {props.project.organization}
      </p>
      <div className={`mb-3 whitespace-pre-line ${SANDMAN_CLASS}`}>
        {props.project.description}
      </div>
      <p className={`font-bold ${SANDMAN_CLASS}`}>Technologies used:</p>
      <ul className="list-disc pl-5 mb-3">
        <li className={`${SANDMAN_CLASS}`}>
          {props.project.skills.join(", ")}
        </li>
      </ul>
      {/* TODO: Lore link to devblog */}
    </div>
  );
}
