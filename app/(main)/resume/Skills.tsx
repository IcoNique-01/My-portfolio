"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
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
  SiLaravel,
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { FaFileWord } from "react-icons/fa";

interface skillProp {
  id: number;
  name: string;
  mastery: number;
  icon: string;
}

const sideIcon: Record<string, React.ComponentType<any>> = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  FaPhp,
  SiMysql,
  SiLaravel,
  DiPhotoshop,
  TbBrandReactNative,
  FaFileWord,
};

interface miniProp {
  skillset: skillProp;
}

const Skills = ({ skillset }: miniProp) => {
  const progressBar = useRef(null);
  const isInView = useInView(progressBar, { once: true, amount: 1 });
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);

  const IconComponent = sideIcon[skillset.icon];

  return (
    <div className="flex flex-col gap-1.5 rounded-xl bg-indigo-200/50 dark:bg-neutral-900 py-3 px-2.5 duration-300 ease-in-out">
      <div className="flex items-center gap-2.5 w-full">
        <div>
          <IconComponent className="w-4 h-4 shrink-0 text-blue-700 dark:text-blue-200" />
        </div>
        <h3 className="font-bold text-base ">{skillset.name}</h3>
      </div>
      <div className="w-full flex flex-col">
        <span className="text-sm text-neutral-500 dark:text-neutral-200/80  text-right">
          <span>{skillset.mastery}</span>
          <span>%</span>
        </span>
        <div className="w-full shrink-0 h-1.5 rounded-full overflow-hidden bg-neutral-400/50 dark:bg-neutral-950">
          <motion.div
            ref={progressBar}
            initial="hidden"
            animate={control}
            variants={{
              hidden: { width: 0 },
              visible: { width: `${skillset.mastery}%` },
            }}
            transition={{
              duration: 1.25,
              ease: "easeOut",
            }}
            className="h-full bg-blue-600 rounded-full dark:bg-blue-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
