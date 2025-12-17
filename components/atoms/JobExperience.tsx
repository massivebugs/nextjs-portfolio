import AppearingText from "./AppearingText";

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
        <AppearingText
          text={props.experience.organization}
          initialPos="right"
          restore={props.restoreText}
        />
      </p>
      <p className={`mb-3 italic`}>
        <AppearingText
          text={props.experience.jobTitle}
          initialPos="right"
          restore={props.restoreText}
        />
        <AppearingText
          text=" | "
          initialPos="right"
          restore={props.restoreText}
        />
        <AppearingText
          text={props.experience.jobLengths.join(" | ")}
          initialPos="right"
          restore={props.restoreText}
        />
      </p>
      <ul className="list-disc pl-5">
        {props.experience.descriptions.map((v) => (
          <li key={v} className="mb-4">
            <AppearingText
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
