import { SANDMAN_CLASS } from "@/app/lib/sandman";

export type Skill = {
  name: string;
  skills: string[];
};

export default function TechnicalSkill(props: {
  skill: Skill;
  className?: string;
}) {
  return (
    <div className={`mb-2 ${props.className ?? ""}`}>
      <div className={`font-bold ${SANDMAN_CLASS}`}>{props.skill.name}</div>
      <ul className="list-disc pl-5">
        <li className={`${SANDMAN_CLASS}`}>{props.skill.skills.join(", ")}</li>
      </ul>
    </div>
  );
}
