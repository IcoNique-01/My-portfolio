"use client";

import { Mail, Calendar, Phone, Locate } from "lucide-react";

interface myDetsPro {
  id?: number;
  name: string;
  title: string;
  icon: string;
}

interface InnerProfileProp {
  myinfo: myDetsPro;
}

const sideIcons: Record<string, React.ComponentType<any>> = {
  Mail,
  Phone,
  Calendar,
  Locate,
};

const InnerProfile = ({ myinfo }: InnerProfileProp) => {
  const IconComponent = sideIcons[myinfo.icon];
  return (
    <div className="flex w-full sm:px-2.5 items-center gap-4">
      <div className="p-2 text-blue-700 dark:text-blue-200 bg-indigo-200/50 dark:bg-indigo-800/30 rounded-md">
        <IconComponent className="w-4 h-4 shrink-0" />
      </div>
      <div className="flex flex-col overflow-hidden">
        <span className="text-sm italic tracking-widest text-neutral-500 dark:text-neutral-200/80">
          {myinfo.title}
        </span>
        <p className="w-full text-sm text-wrap font-semibold dark:text-neutral-100 text-neutral-800">
          {myinfo.name}
        </p>
      </div>
    </div>
  );
};

export default InnerProfile;
