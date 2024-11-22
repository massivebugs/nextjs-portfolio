import { SANDMAN_TEXT_CLASS } from "@/app/lib/sandman";

export type Project = {
  name: string;
  organization: string;
  description: string;
  techStack: string;
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
      <p className={`${props.sandman ? SANDMAN_TEXT_CLASS : ""}`}>
        {props.project.description}
      </p>
      <p className={`${props.sandman ? SANDMAN_TEXT_CLASS : ""}`}>
        {props.project.techStack}
      </p>
    </div>
  );
}
