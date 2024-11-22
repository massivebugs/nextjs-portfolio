import { SANDMAN_TEXT_CLASS } from "@/app/lib/sandman";

export type Experience = {
  organization: string;
  jobTitle: string;
  jobLengths: string[];
  descriptions: string[];
};

export default function JobExperience(props: {
  experience: Experience;
  className?: string;
  sandman?: boolean;
}) {
  return (
    <div>
      <p
        className={`font-bold mb-1 ${props.sandman ? SANDMAN_TEXT_CLASS : ""}`}
      >
        {props.experience.organization}
      </p>
      <p className={`mb-3 italic ${props.sandman ? SANDMAN_TEXT_CLASS : ""}`}>
        {props.experience.jobTitle} | {props.experience.jobLengths.join(" | ")}
      </p>
      <ul className="list-disc pl-5">
        {props.experience.descriptions.map((v) => (
          <li className={`${props.sandman ? SANDMAN_TEXT_CLASS : ""}`} key={v}>
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}
