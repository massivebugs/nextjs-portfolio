import { SANDMAN_CLASS } from "@/app/lib/sandman";
import SandmanText from "./SandmanText";

export type Experience = {
  organization: string;
  jobTitle: string;
  jobLengths: string[];
  descriptions: string[];
};

export default function JobExperience(props: {
  experience: Experience;
  restoreText: boolean;
  className?: string;
}) {
  return (
    <div>
      <p className={`font-bold mb-1`}>
        <SandmanText
          text={props.experience.organization}
          initialPos="right"
          restore={props.restoreText}
        />
      </p>
      <p className={`mb-3 italic`}>
        <SandmanText
          text={props.experience.jobTitle}
          initialPos="right"
          restore={props.restoreText}
        />
        <SandmanText
          text=" | "
          initialPos="right"
          restore={props.restoreText}
        />
        <SandmanText
          text={props.experience.jobLengths.join(" | ")}
          initialPos="right"
          restore={props.restoreText}
        />
      </p>
      <ul className="list-disc pl-5">
        {props.experience.descriptions.map((v) => (
          <li key={v}>
            <SandmanText
              text={v}
              initialPos="right"
              restore={props.restoreText}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
