import StatsCard from "./StatsCard";
import WhatIDo from "./WhatIDo";

const AboutMe = () => {
  const KPIs = [
    {
      id: 0,
      name: "Year(s) Experience",
      value: 2,
      suffix: "+",
    },
    {
      id: 1,
      name: "Completed Projects",
      value: 5,
      suffix: "+",
    },
    {
      id: 2,
      name: "Core Technologies",
      value: 8,
      suffix: "+",
    },
  ];

  const WID = [
    {
      id: 0,
      title: "Frontend Development",
      body: "Building responsive, interactive, and type-safe web interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
      icon: "Code",
    },
    {
      id: 1,
      title: "Backend Development",
      body: "Engineering stateless REST APIs, managing database schemas, and handling backend logic using PHP, Laravel, and MySQL.",
      icon: "Server",
    },
    {
      id: 2,
      title: "Software Development",
      body: "Designing full-stack decoupled applications focused on solving real-world operational bottlenecks and business challenges.",
      icon: "Layers3",
    },
    {
      id: 3,
      title: "API Integration",
      body: "Connecting frontend components to backend endpoints and third-party services with strict data validation.",
      icon: "Plug",
    },
    {
      id: 4,
      title: "Graphic Design",
      body: "Crafting visually appealing digital assets, layout structures, and graphic elements for modern web platforms.",
      icon: "Palette",
    },
  ];
  return (
    <section className="w-full flex flex-col items-center gap-6">
      <div className="flex flex-col gap-3">
        <p className="dark:text-neutral-100 text-neutral-800 leading-relaxed tracking-wide">
          I am a software engineer and Computer Science graduate specializing in
          building high-performance, decoupled web applications. I focus on
          bridging robust backend data integrity with clean, modern, and type
          safe frontend interfaces.
        </p>
        <p className="dark:text-neutral-100 text-neutral-800 leading-relaxed tracking-wide">
          From engineering decoupled transaction platforms to optimizing
          database query paths with B-Tree indexing, I build scalable digital
          solutions that transform manual workflows into fast, secure web
          applications.
        </p>
      </div>
      <div className="w-full overflow-x-hidden flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-4 pb-6">
        {KPIs.map((kpi) => (
          <StatsCard key={kpi.id} kpi={kpi} />
        ))}
      </div>
      <div className="w-full flex flex-col items-start gap-4">
        <h2 className="font-bold tracking-wide text-lg">What I Do</h2>
        <div className="grid overflow-y-hidden sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 w-full gap-4">
          {WID.map((wid) => (
            <WhatIDo key={wid.id} wid={wid} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
