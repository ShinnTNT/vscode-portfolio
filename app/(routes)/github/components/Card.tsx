import { cn, getRepoTechColor } from "@/lib/utils";
import { FiEye, FiStar } from "react-icons/fi";

interface Props {
  name: string;
  description: string;
  repoType: string;
  star: number;
  tech: "TypeScript" | "JavaScript" | "Vue" | "HTML" | "CSS" | "PHP";
  watcher: number;
}

const Card = ({ name, description, repoType, star, tech, watcher }: Props) => {
  return (
    <div className="w-full border cursor-pointer rounded-md col-span-4 h-32 p-4 flex flex-col items-start gap-6">
      <div className="w-full flex justify-between items-center">
        <div className="text-sm font-semibold text-gray-300 truncate">
          {name}
        </div>
        <div className="flex w-16 justify-center items-center border border-gray-400 rounded-xl">
          <div className="text-gray-400 text-[12px]">{repoType}</div>
        </div>
      </div>

      <div className="w-full">
        <p className="text-xs truncate text-gray-400 font-normal">
          {description ||
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque amet"}
        </p>
      </div>

      <div className="flex items-center justify-start gap-4">
        {tech ? (
          <div className="flex items-center gap-1">
            <div
              className={cn(
                "w-3 h-3 rounded-full",
                `${getRepoTechColor(tech)}`
              )}
            />
            <div className="text-gray-400 text-[12px]">{tech}</div>
          </div>
        ) : null}

        <div className="flex items-center gap-3">
          <FiStar size={13} color="white" />
          <div className="text-gray-400">{star}</div>
        </div>

        <div className="flex items-center gap-3">
          <FiEye size={13} color="white" />
          <div className="text-gray-400">{watcher}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
