"use client";
import Link from "next/link";
import { User, FileText, BriefcaseBusiness, Mail } from "lucide-react";
import { ModeToggle } from "./ThemeToggler";

interface prop {
  title: string;
}

const sideIcon: Record<string, React.ComponentType<any>> = {
  User,
  FileText,
  BriefcaseBusiness,
  Mail,
};

interface linkProp {
  id: number;
  name: string;
  icon: string;
}

const Navbar = ({ title }: prop) => {
  const Links = [
    { id: 0, name: "About me", icon: "User" },
    { id: 1, name: "Resume", icon: "FileText" },
    { id: 2, name: "Projects", icon: "BriefcaseBusiness" },
    { id: 3, name: "Contact me", icon: "Mail" },
  ];

  return (
    <section className="w-full">
      <div className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center justify-between">
        <h1 className="font-extrabold text-xl relative after:content-[''] after:left-0 after:bottom-0 after:w-1/4 after:h-0.5 after:bg-blue-700 uppercase text-blue-700 dark:text-blue-200 text-nowrap">
          {title}
        </h1>
        {/* <ModeToggle /> */}
        <nav className=" sm:w-full lg:w-fit">
          <ul className="flex text-indigo-900 justify-between items-center sm:gap-5">
            {Links.map((link: linkProp) => {
              const IconComponent = sideIcon[link.icon];
              return (
                <Link
                  key={link.id}
                  className={`py-1 text-sm sm:text-nowrap sm:text-base flex flex-col lg:flex-row md:gap-1.5 items-center cursor-pointer relative hover:text-blue-700 dark:hover:text-blue-200 duration-300 after:content-[''] after:absolute after:w-full atfer:h-0.5 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:bg-blue-700 after:transition-transform after:duration-300 ${
                    link.name.toLocaleLowerCase().replace(" ", "-") ===
                    title.toLocaleLowerCase().replace(" ", "-")
                      ? "text-blue-700 dark:text-blue-200"
                      : "dark:text-neutral-100 text-neutral-800"
                  }`}
                  href={
                    link.name === `About me`
                      ? `/`
                      : `/${link.name.toLocaleLowerCase().replace(" ", "-")}`
                  }
                >
                  <span className="w-fit h-fit">
                    <IconComponent className="w-4 h-4 shrink-0" />
                  </span>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
