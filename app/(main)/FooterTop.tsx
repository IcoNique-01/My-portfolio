import { User, FileText, BriefcaseBusiness, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaXTwitter } from "react-icons/fa6";

interface listProp {
  id: number;
  name: string;
  icon: string;
}

interface prop {
  topic: string;
}

const FooterTop = ({ topic }: prop) => {
  const title = "Imokhai Nathan";
  const text =
    "Driven Software Engineer passionate about designing scalable, user-focused software solutions. Committed to writing clean, maintainable code, solving real-world problems, and continuously learning to build reliable applications across modern platforms.";
  const sideIcons: Record<string, React.ComponentType<any>> = {
    User,
    FileText,
    BriefcaseBusiness,
    Mail,
  };

  const sideIcons2: Record<string, React.ComponentType<any>> = {
    Mail,
    Phone,
  };

  const socialIcon: Record<string, React.ComponentType<any>> = {
    FaWhatsapp,
    FaInstagram,
    FaXTwitter,
  };

  const socials = [
    {
      id: 0,
      href: "https://wa.me/2348169720388",
      icon: "FaWhatsapp",
    },
    {
      id: 1,
      href: "https://instagram.com/i_con.02",
      icon: "FaInstagram",
    },
    {
      id: 2,
      href: "https://x.com/N_eithan02",
      icon: "FaXTwitter",
    },
  ];

  const footerContact = [
    {
      id: 0,
      name: "nathanimokhai@gmail.com",
      ref: "mailto:nathanimokhai@gmail.com",
      icon: "Mail",
    },
    {
      id: 1,
      name: "+234 816 972 0388",
      ref: "tel:2348169720388",
      icon: "Phone",
    },
  ];

  const footerLinks = [
    {
      id: 0,
      name: "About me",
      icon: "User",
    },
    {
      id: 1,
      name: "Resume",
      icon: "FileText",
    },
    {
      id: 2,
      name: "Projects",
      icon: "BriefcaseBusiness",
    },
    {
      id: 3,
      name: "Contact me",
      icon: "Mail",
    },
  ];

  return (
    <div className="lg:grid lg:grid-cols-5 flex flex-col md:flex-row gap-4 items-start justify-between sm:px-6">
      <div className="lg:col-span-3 lg:w-[60%] md:w-[70%] hidden md:flex flex-col gap-2">
        <h2 className="text-xl font-bold uppercase dark:text-blue-200">
          {title}
        </h2>
        <p className="text-sm tracking-wide leading-relaxed text-neutral-500 dark:text-neutral-200/80">
          {text}
        </p>
        <div className="flex items-center gap-6 h-fit">
          {socials.map((social) => {
            const IconComponent = socialIcon[social.icon];
            return (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                className="p-3 rounded-xl text-blue-700 dark:text-blue-200 bg-indigo-200/50 dark:bg-indigo-800/30"
              >
                <IconComponent className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row md:justify-end md:gap-8 lg:gap-16 lg:col-span-2">
        <div className="flex flex-col text-nowrap justify-start w-full md:w-fit h-full gap-2">
          <p className="font-bold hidden md:flex dark:text-blue-200 text-neutral-800">
            Useful Links
          </p>
          <div className="flex md:flex-col flex-row w-full justify-evenly md:items-start md:gap-1">
            {footerLinks.map((link) => {
              const IconComponent = sideIcons[link.icon];
              return (
                <Link
                  key={link.id}
                  href={`${link.name === "About me" ? "/" : `/${link.name.toLocaleLowerCase().replace(" ", "-")}`}`}
                  className={`lg:hover:text-blue-700 lg:dark:hover:text-blue-200 duration-300 flex md:flex-row flex-col gap-2 items-center ${link.name.toLocaleLowerCase().replace(" ", "-") === topic.toLocaleLowerCase().replace(" ", "-") ? "text-blue-700 dark:text-blue-200" : "dark:text-neutral-100 text-neutral-800"}`}
                >
                  <span>
                    <IconComponent className="w-4 h-4 shrink-0" />
                  </span>
                  <span className="text-sm md:text-base">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="md:flex flex-col justify-start h-full gap-2 hidden">
          <p className="font-bold dark:text-blue-200 text-neutral-800 ">
            Contact me
          </p>
          <div className="flex flex-col items-start gap-1">
            {footerContact.map((link) => {
              const IconComponent = sideIcons2[link.icon];
              return (
                <a
                  key={link.id}
                  target="_blank"
                  href={`${link.ref}`}
                  className="hover:text-blue-700 dark:hover:text-blue-200 duration-300 flex gap-2 items-center dark:text-neutral-100
                   text-neutral-800"
                >
                  <span>
                    <IconComponent className="w-4 h-4 dark:text-blue-200" />
                  </span>
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
