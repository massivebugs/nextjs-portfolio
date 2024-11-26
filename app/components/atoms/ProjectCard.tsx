import SandmanText from "./SandmanText";

export type Project = {
  name: string;
  organization: string;
  description: string;
  skills: string[];
  imageSrc?: string;
  videoSrc?: string;
  url?: string;
  lore?: string;
};

export default function ProjectCard(props: {
  project: Project;
  restoreText: boolean;
  className?: string;
}) {
  return (
    <div
      className={`h-[500px] w-[300px] md:w-[700px] md:h-[400px] rounded-md overflow-hidden  ${
        props.className ?? ""
      }`}
      style={{
        backgroundImage: `url(${props.project.imageSrc})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col w-full h-full bg-black/[0.8]">
        <div className="px-2 pt-2">
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
        <div className="flex flex-col px-2 pt-2">
          <div className="mb-3 whitespace-pre-line">
            <SandmanText
              text={props.project.description}
              initialPos="right"
              restore={props.restoreText}
            />
          </div>
          <p className="font-bold">
            <SandmanText
              text="Technologies used:"
              initialPos="right"
              restore={props.restoreText}
            />
          </p>
          <ul className="list-disc pl-5 mb-3">
            <li>
              <SandmanText
                text={props.project.skills.join(", ")}
                initialPos="right"
                restore={props.restoreText}
              />
            </li>
          </ul>
        </div>
      </div>
      {/* TODO: Lore link to devblog */}
    </div>
  );
}
