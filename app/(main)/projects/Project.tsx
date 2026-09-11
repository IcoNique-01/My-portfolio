import ProjectRS from "./ProjectRS";
import ProjectCite from "./ProjectCite";

const Project = () => {
  const projects = [
    {
      id: 4,
      name: "ApexLog Operation Hub",
      href: "https://transaction-logging-app.netlify.app/auth",
      Img: "/assets/Img/TLADC.png",
      body: "An enterprise operations platform for tracking and logging courier and document transactions.",
      stack: [
        { id: 0, name: "Next.Js", icon: "SiNextdotjs", status: true },
        { id: 1, name: "TypeScript", icon: "SiTypescript", status: true },
        { id: 2, name: "React", icon: "FaReact", status: false },
        { id: 3, name: "Tailwind CSS", icon: "SiTailwindcss", status: true },
        { id: 4, name: "PHP", icon: "FaPhp", status: true },
        { id: 5, name: "MySQL", icon: "SiMysql", status: true },
        { id: 6, name: "JavaScript", icon: "FaJs", status: false },
        { id: 7, name: "CSS3", icon: "FaCss3Alt", status: false },
        { id: 8, name: "HTML5", icon: "FaHtml5", status: false },
      ],
    },
    {
      id: 3,
      name: "Grow In Tech",
      href: "https://growintechhq.netlify.app",
      Img: "/assets/Img/GITpic.png",
      body: "A community platform designed to support developers in learning and building tech careers.",
      stack: [
        { id: 0, name: "Next.Js", icon: "SiNextdotjs", status: false },
        { id: 1, name: "TypeScript", icon: "SiTypescript", status: false },
        { id: 2, name: "React", icon: "FaReact", status: true },
        { id: 3, name: "Tailwind CSS", icon: "SiTailwindcss", status: true },
        { id: 4, name: "PHP", icon: "FaPhp", status: false },
        { id: 5, name: "MySQL", icon: "SiMysql", status: false },
        { id: 7, name: "JavaScript", icon: "FaJs", status: false },
        { id: 8, name: "CSS3", icon: "FaCss3Alt", status: false },
        { id: 9, name: "HTML5", icon: "FaHtml5", status: false },
      ],
    },
    {
      id: 2,
      name: "Campaign Grid",
      href: "https://campaign-grid.netlify.app/",
      Img: "/assets/Img/CGpic.png",
      body: "A landing page for managing outreach campaigns",
      stack: [
        { id: 0, name: "Next.Js", icon: "SiNextdotjs", status: false },
        { id: 1, name: "TypeScript", icon: "SiTypescript", status: false },
        { id: 2, name: "React", icon: "FaReact", status: true },
        { id: 3, name: "Tailwind CSS", icon: "SiTailwindcss", status: true },
        { id: 4, name: "PHP", icon: "FaPhp", status: false },
        { id: 5, name: "MySQL", icon: "SiMysql", status: false },
        { id: 7, name: "JavaScript", icon: "FaJs", status: false },
        { id: 8, name: "CSS3", icon: "FaCss3Alt", status: false },
        { id: 9, name: "HTML5", icon: "FaHtml5", status: false },
      ],
    },
    {
      id: 1,
      name: "Hope Horizon",
      href: "https://hopehorizongit.netlify.app/",
      Img: "/assets/Img/Safestepspic.png",
      body: "An outreach platform delivering community welfare resources and initiative tracking.",
      stack: [
        { id: 0, name: "Next.Js", icon: "SiNextdotjs", status: false },
        { id: 1, name: "TypeScript", icon: "SiTypescript", status: false },
        { id: 2, name: "React", icon: "FaReact", status: false },
        { id: 3, name: "Tailwind CSS", icon: "SiTailwindcss", status: false },
        { id: 4, name: "PHP", icon: "FaPhp", status: false },
        { id: 5, name: "MySQL", icon: "SiMysql", status: false },
        { id: 7, name: "JavaScript", icon: "FaJs", status: true },
        { id: 8, name: "CSS3", icon: "FaCss3Alt", status: true },
        { id: 9, name: "HTML5", icon: "FaHtml5", status: true },
      ],
    },
    {
      id: 0,
      name: "Universe Cosmetic and Beauty Skincare",
      href: "https://cosmeticskincare.netlify.app/",
      Img: "/assets/Img/Cosmeticpic.png",
      body: "A responsive e-commerce landing page crafted for a luxury beauty brand.",
      stack: [
        { id: 0, name: "Next.Js", icon: "SiNextdotjs", status: false },
        { id: 1, name: "TypeScript", icon: "SiTypescript", status: false },
        { id: 2, name: "React", icon: "FaReact", status: false },
        { id: 3, name: "Tailwind CSS", icon: "SiTailwindcss", status: false },
        { id: 4, name: "PHP", icon: "FaPhp", status: false },
        { id: 5, name: "MySQL", icon: "SiMysql", status: false },
        { id: 7, name: "JavaScript", icon: "FaJs", status: true },
        { id: 8, name: "CSS3", icon: "FaCss3Alt", status: true },
        { id: 9, name: "HTML5", icon: "FaHtml5", status: true },
      ],
    },
  ];
  return (
    <section className="w-full flex flex-col-reverse lg:grid lg:grid-cols-5 gap-4">
      <div className="lg:col-span-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCite key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="w-full h-full">
        <ProjectRS />
      </div>
    </section>
  );
};

export default Project;
