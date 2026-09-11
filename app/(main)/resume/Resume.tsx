import Skills from "./Skills";
import Work from "./Work";

const Resume = () => {
  const skillSets = [
    {
      id: 0,
      name: "HTML",
      mastery: 98.9,
      icon: "FaHtml5",
      core: true,
    },
    {
      id: 1,
      name: "CSS",
      mastery: 98.2,
      icon: "FaCss3Alt",
      core: true,
    },
    {
      id: 2,
      name: "JavaScript",
      mastery: 89.8,
      icon: "FaJs",
      core: true,
    },
    {
      id: 3,
      name: "React",
      mastery: 78.2,
      icon: "FaReact",
      core: true,
    },
    {
      id: 4,
      name: "Tailwind CSS",
      mastery: 96.4,
      icon: "SiTailwindcss",
      core: true,
    },
    {
      id: 5,
      name: "Next.Js",
      mastery: 84.8,
      icon: "SiNextdotjs",
      core: true,
    },
    {
      id: 6,
      name: "TypeScript",
      mastery: 53.7,
      icon: "SiTypescript",
      core: true,
    },
    {
      id: 7,
      name: "PHP",
      mastery: 72.4,
      icon: "FaPhp",
      core: true,
    },
    {
      id: 8,
      name: "MySQL",
      mastery: 68.1,
      icon: "SiMysql",
      core: true,
    },
    {
      id: 9,
      name: "Laravel",
      mastery: 35.28,
      icon: "SiLaravel",
      core: true,
    },
    {
      id: 10,
      name: "React Native",
      mastery: 0,
      icon: "FaReact",
      core: true,
    },
    {
      id: 11,
      name: "Adobe Photoshop",
      mastery: 52.78,
      icon: "DiPhotoshop",
      core: false,
    },
    {
      id: 12,
      name: "Microsoft Word",
      mastery: 99.5,
      icon: "FaFileWord",
      core: false,
    },
  ];

  const workExp = [
    {
      id: 0,
      name: "Grow In Tech",
      year: "2025 - Till Date",
      position: "Chief Technical Officer (CTO)",
      body: [
        {
          id: 0,
          item: "Designed, developed, and launched the company's first official website, establishing its online presence",
        },
        {
          id: 1,
          item: "Evaluate new project ideas by assessing their technical feasibility, resource requirement, and overall business value before development.",
        },
        {
          id: 2,
          item: "Translate complex technical concepts into clear, practical plans, helping team members understand project objectives, scope, and implementation strategies.",
        },
        {
          id: 3,
          item: "Serve as the primary technical advisor for software-related client inquiries, reviewing project requirements and recommending appropriate technical solution.",
        },
        {
          id: 4,
          item: "Collaborate with the team to define project architecture, development workflows, and technology choices that align with business goals",
        },
      ],
    },
    {
      id: 1,
      name: "DHL Service Outlet",
      year: "2021 - 2022",
      position: "Logistics Assistant",
      body: [
        {
          id: 0,
          item: "Processed and prepared customer parcels and documents for both domestic and international shipments, ensuring compliance with shipping requirements.",
        },
        {
          id: 1,
          item: "Packaged shipments accurately before handing them over to courier personnel for delivery.",
        },
        {
          id: 2,
          item: "Tracked customer shipments and monitored delivery progress to ensure parcels reached their intended destinations.",
        },
        {
          id: 3,
          item: "Maintained accurate and organized records of shipments, customer information, and delivery details.",
        },
        {
          id: 4,
          item: "Assisted customers with shipment inquiries and provided updates on the status of their parcels when required.",
        },
      ],
    },
  ];

  return (
    <section className="w-full flex flex-col items-center gap-6">
      <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div className="w-full flex flex-col gap-4">
          {workExp.map((work) => (
            <Work key={work.id} work={work} />
          ))}
        </div>
        <div className="w-full flex flex-col gap-3.5">
          <h2 className="font-bold tracking-wide text-lg uppercase text-blue-700 dark:text-blue-200">
            Skills Sets
          </h2>
          <div className="flex flex-col items-start w-full">
            <span className=" font-semibold uppercase mb-2">
              Core Technical Stack
            </span>
            <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillSets
                .filter((set) => set.mastery > 5 && set.core === true)
                .map((skillset) => (
                  <Skills key={skillset.id} skillset={skillset} />
                ))}
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            <span className=" font-semibold uppercase mb-2">Others</span>
            <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillSets
                .filter((set) => set.mastery > 5 && set.core === !true)
                .map((skillset) => (
                  <Skills key={skillset.id} skillset={skillset} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
