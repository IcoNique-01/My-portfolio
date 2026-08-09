import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaInstagram,
  FaXTwitter,
  FaPhp,
} from "react-icons/fa6";

import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";

const fullIcon: Record<string, React.ComponentType<any>> = {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  FaPhp,
  SiMysql,
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
};

interface stackProp {
  id: number;
  name: string;
  icon: string;
  status: boolean;
}

interface projectProp {
  id: number;
  name: string;
  href: string;
  Img: string;
  body: string;
  stack: stackProp[];
}

interface projectType {
  project: projectProp;
}

const ProjectCite = ({ project }: projectType) => {
  return (
    <a href={project.href} target="_blank">
      <div className="grid grid-rows-5 gap-2 overflow-hidden">
        <div className="row-span-3 rounded-lg relative overflow-hidden">
          <div className="h-full w-full absolute lg:bg-black/10 lg:dark:bg-black/30 lg:hover:bg-transparent duration-300 ease-in-out z-10" />
          <img
            src={project.Img}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="row-span-2 flex flex-col gap-2.5">
          <div>
            <p className="font-semibold text-neutral-800 dark:text-neutral-200 text-base line-clamp-1">
              {project.name}
            </p>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-200/80">
              {project.body}
            </p>
          </div>
          <div className="w-full flex items-start">
            <div className="flex flex-col sm:flex-row gap-1.5 h-full items-start sm:items-center">
              <span className="text-neutral-500 dark:text-neutral-200/80 text-sm text-nowrap">
                Stacks used:
              </span>
              <div className="flex flex-wrap gap-0.5">
                {project.stack
                  .filter((img) => img.status === true)
                  .map((tools) => {
                    const IconComponent = fullIcon[tools.icon];
                    return (
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-medium text-blue-700 dark:text-blue-200 whitespace-nowrap w-fit h-fit"
                        key={tools.id}
                      >
                        <IconComponent className="w-5 h-5 shrink-0" />
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCite;
