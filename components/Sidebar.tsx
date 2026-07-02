"use client";

import { useRouter } from "next/navigation";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  LayoutDashboard,
  ArrowLeftRight,
  File,
  FileText,
  Package,
  Search,
  UserCog,
  Settings,
  Moon,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import asideLink from "../components/data/asideLink.json";
import { log } from "console";
const iconMap: Record<string, React.ComponentType<any>> = {
  LayoutDashboard,
  ArrowLeftRight,
  File,
  FileText,
  Package,
  Search,
  UserCog,
  Settings,
  Moon,
  LogOut,
};

const Sidebar = () => {
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const logOut = () => {
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("email");
    localStorage.removeItem("token");

    set_first_name("");
    set_last_name("");
    setEmail("");

    router.push("/auth");
  };

  return (
    <Command className="dark:bg-slate-900 max-w-sm h-[calc(100vh-72px)] rounded-none border">
      <CommandInput placeholder="Search..." />
      <CommandList className="h-full max-h-none flex-1">
        <CommandEmpty>No results found.</CommandEmpty>
        {asideLink.map((section, idx) => (
          <React.Fragment key={section.group || idx}>
            <CommandGroup className="mt-2" heading={section.group}>
              {section.items.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <CommandItem
                    className="hover:bg-blue-200/40 dark:hover:bg-slate-600 duration-300 "
                    key={item.name}
                  >
                    <Link
                      href={
                        item.name === "My Dashboard" ? "/dashboard" : item.path
                      }
                      className=" flex items-center gap-2 "
                    >
                      <IconComponent />
                      <span className="text-sm font-medium ">{item.name}</span>
                    </Link>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </React.Fragment>
        ))}
        <CommandGroup className="mt-2" heading="User">
          <CommandItem className="bg-red-200/20 dark:bg-rose-400/10 hover:bg-red-200/40 dark:hover:bg-red-400/30 duration-300 cursor-pointer text-rose-600! hover:text-rose-600">
            <button
              onClick={logOut}
              className="flex items-center gap-2 cursor-pointer"
            >
              {" "}
              <LogOut /> Log out
            </button>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
