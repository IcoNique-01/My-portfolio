"use client";
import { useState, useRef, useEffect } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

interface kpiProp {
  id: number;
  name: string;
  value: number;
  suffix: string;
}

interface statProp {
  kpi: kpiProp;
}

const StatsCard = ({ kpi }: statProp) => {
  const [cols, setCols] = useState(1);
  const ref = useRef(null);
  const control = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getCol = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 1;
    if (window.innerWidth >= 640) return 3;
    return 1;
  };

  useEffect(() => {
    const updateCol = () => setCols(getCol());
    updateCol();

    window.addEventListener("resize", updateCol);

    return () => window.removeEventListener("resize", updateCol);
  }, []);

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);

  const delayTransit = cols === 1 ? 0 : (kpi.id % cols) * 0.2;

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      transition={{
        duration: 0.75,
        ease: "easeInOut",
        delay: delayTransit,
      }}
      animate={control}
      className="flex w-full flex-col items-center py-2.5 rounded-xl sm:rounded-2xl bg-indigo-200/30 dark:bg-neutral-900"
    >
      <span className="flex items-center text-blue-700 dark:text-blue-200 text-2xl font-bold">
        {kpi.value}
        {kpi.suffix}
      </span>
      <span className="text-neutral-500 dark:text-neutral-200/80 tracking-wide text-md italic">
        {kpi.name}
      </span>
    </motion.div>
  );
};

export default StatsCard;
