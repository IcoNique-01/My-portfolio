"use client";

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

const frontIcon: Record<string, React.ComponentType<any>> = {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
};

const backIcon: Record<string, React.ComponentType<any>> = {
  FaPhp,
  SiMysql,
};

const ProjectRS = () => {
  const Frontend = [
    {
      id: 6,
      name: "Next.js",
      icon: "SiNextdotjs",
    },
    {
      id: 5,
      name: "Typescript",
      icon: "SiTypescript",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      icon: "SiTailwindcss",
    },
    {
      id: 3,
      name: "React",
      icon: "FaReact",
    },
    {
      id: 2,
      name: "JavaScript",
      icon: "FaJs",
    },
    {
      id: 1,
      name: "CSS",
      icon: "FaCss3Alt",
    },
    {
      id: 0,
      name: "HTML5",
      icon: "FaHtml5",
    },
  ];

  const Backend = [
    {
      id: 0,
      name: "Php",
      icon: "FaPhp",
    },
    {
      id: 1,
      name: "MySQL",
      icon: "SiMysql",
    },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row items-start gap-3.5 lg:gap-2.5 sticky top-4">
      <div className="flex flex-col items-start lg:items-center gap-2">
        <span className="font-bold tracking-wide dark:text-neutral-200 text-neutral-800">
          Frontend
        </span>
        <div className="flex flex-row lg:flex-col gap-3">
          {Frontend.map((frontend) => {
            const IconComponent = frontIcon[frontend.icon];
            return (
              <span
                key={frontend.id}
                className="flex flex-col items-center gap-2 sm:gap-0.5"
              >
                <span>
                  <IconComponent className="w-5 h-5 text-blue-800 dark:text-blue-200" />
                </span>
                <span className="text-xs hidden sm:block text-neutral-500 dark:text-neutral-200/80">
                  {frontend.name}
                </span>
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-start lg:items-center gap-2">
        <span className="font-bold tracking-wide dark:text-neutral-200 text-neutral-800">
          Backend
        </span>
        <div className="flex flex-row lg:flex-col gap-3">
          {Backend.map((backend) => {
            const IconComponent = backIcon[backend.icon];
            return (
              <span
                key={backend.id}
                className="flex flex-col items-center gap-2 sm:gap-0.5"
              >
                <span>
                  <IconComponent className="w-5 h-5 text-blue-800 dark:text-blue-200" />
                </span>
                <span className="text-xs hidden sm:block text-neutral-500 dark:text-neutral-200/80">
                  {backend.name}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectRS;
