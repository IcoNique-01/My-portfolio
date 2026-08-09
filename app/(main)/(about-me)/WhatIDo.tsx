"use client";

import { Code, Server, Layers3, Plug, Palette } from "lucide-react";
import { useInView, motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface widProp {
  id: number;
  title: string;
  body: string;
  icon: string;
}

interface WID {
  wid: widProp;
}

const sideIcon: Record<string, React.ComponentType<any>> = {
  Code,
  Server,
  Layers3,
  Plug,
  Palette,
};

const WhatIDo = ({ wid }: WID) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const control = useAnimation();
  const [cols, setCols] = useState(1);
  const IconComponent = sideIcon[wid.icon];

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);

  const getCol = () => {
    if (window.innerWidth >= 1024) return 2;
    if (window.innerWidth >= 768) return 1;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  useEffect(() => {
    const updateCol = () => setCols(getCol());
    updateCol();

    window.addEventListener("resize", updateCol);

    return () => window.removeEventListener("resize", updateCol);
  }, []);

  const delayTransit = cols === 1 ? 0 : (wid.id % cols) * 0.2;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.75, ease: "easeOut", delay: delayTransit }}
      initial="hidden"
      animate={control}
      ref={ref}
      className="w-full rounded-xl sm:rounded-2xl flex gap-3.5 sm:gap-6 items-start p-2.5 sm:p-4 bg-indigo-200/30 dark:bg-neutral-900"
    >
      <div className="p-2 text-blue-700 dark:text-blue-200 bg-indigo-200/80 dark:bg-neutral-700/50 rounded-md">
        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
      </div>
      <div className="w-full flex flex-col justify-start gap-1 sm:gap-1.5">
        <h3 className="uppercase font-bold text-base tracking-wide">
          {wid.title}
        </h3>
        <p className="dark:text-neutral-200/80 text-sm">{wid.body}</p>
      </div>
    </motion.div>
  );
};

export default WhatIDo;
