import SandmanText from "./SandmanText";

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
        <SandmanText
          text={props.skill.name}
          initialPos="left"
          restore={props.restoreText}
        />
      </div>
      <ul className="list-disc pl-5">
        <li>
          <SandmanText
            text={props.skill.skills.join(", ")}
            initialPos="left"
            restore={props.restoreText}
          />
        </li>
      </ul>
    </div>
  );
}
