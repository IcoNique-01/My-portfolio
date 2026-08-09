"use client";
import { DownloadIcon } from "lucide-react";
import InnerProfile from "./InnerProfile";
import { FaWhatsapp, FaInstagram, FaXTwitter } from "react-icons/fa6";

interface prop {
  id: number;
  name: string;
  role: string;
  Img: string;
}

const Profile = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/Docs/Imokhai_Nathan_Project.pdf";
    link.download = "Imokhai_Nathan_Project.pdf";
    link.click();
  };

  const sideIcon: Record<string, React.ComponentType<any>> = {
    FaWhatsapp,
    FaInstagram,
    FaXTwitter,
  };

  const myInfo = [
    {
      id: 0,
      name: "Imokhai Nathan",
      role: "Software Engineer",
      Img: "/assets/Img/Nathan_Profile_2.jpeg",
    },
  ];

  const myDets = [
    {
      id: 0,
      title: "Email",
      name: "nathanimokhai@gmail.com",
      icon: "Mail",
    },
    {
      id: 1,
      title: "Phone",
      name: "+234 816 972 0388",
      icon: "Phone",
    },
    // {
    //   id: 2,
    //   title: "Date of Birth",
    //   name: "March 11, 2004",
    //   icon: "Calendar",
    // },
    {
      id: 3,
      title: "Location",
      name: "Satellite, Lagos",
      icon: "Locate",
    },
  ];

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

  return (
    <div className="w-full flex flex-col sm:flex-row md:flex-col gap-7">
      <div className="w-full">
        {myInfo.map((Info: prop) => (
          <div className="flex flex-col items-center gap-2.5" key={Info.id}>
            <div className="w-36 h-36 border-2 border-blue-600 dark:border-indigo-800/30 rounded-3xl overflow-hidden flex justify-center shadow-md items-center">
              <img
                src={Info.Img}
                alt="Profile"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h2 className="font-bold uppercase tracking-wide flex flex-col items-center gap-0.5">
              {Info.name}
              <span className="text-neutral-500 dark:text-neutral-200/80 font-normal text-xs italic">
                @IcoNique_02
              </span>
            </h2>
            <p className="py-1 px-3.5 text-blue-700 dark:text-blue-200 bg-indigo-200/50 dark:bg-indigo-800/30 rounded-lg text-sm">
              {Info.role}
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => {
                const IconComponent = sideIcon[social.icon];
                return (
                  <a
                    key={social.id}
                    className="p-2 rounded-sm text-blue-700 dark:text-blue-200 bg-indigo-200/50 dark:bg-indigo-800/30 hover:bg-indigo-300/60 dark:hover:bg-indigo-500/30 duration-300 ease-in-out"
                    href={social.href}
                    target="_blank"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          {myDets.map((myinfo) => (
            <InnerProfile key={myinfo.id} myinfo={myinfo} />
          ))}
        </div>
        <div className="w-full flex justify-center items-center px-2.5">
          <button
            onClick={downloadCV}
            className="w-fit flex items-center gap-3 rounded-xl text-blue-700 dark:text-blue-200 bg-indigo-200/50 dark:bg-indigo-800/30 hover:bg-indigo-300/60 dark:hover:bg-indigo-500/30 duration-300 ease-in-out px-6 py-1 cursor-pointer"
          >
            <DownloadIcon className="w-4 h-4 shrink-0" />{" "}
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
