import AppearingText from "./AppearingText";

export type Skill = {
  name: string;
  skills: string[];
};

export default function TechnicalSkill(props: {
  skill: Skill;
  restoreText: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-2 ${props.className ?? ""}`}>
      <div className="font-bold">
        <AppearingText
          text={props.skill.name}
          initialPos="left"
          restore={props.restoreText}
        />
      </div>
      <ul className="list-disc pl-5">
        <li>
          <AppearingText
            text={props.skill.skills.join(", ")}
            initialPos="left"
            restore={props.restoreText}
          />
        </li>
      </ul>
    </div>
  );
}
