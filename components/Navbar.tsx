"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FiDatabase } from "react-icons/fi";
import { useState, useEffect, useReducer } from "react";
import { ModeToggle } from "./ThemeToggler";
import { useRouter } from "next/navigation";
interface NavProp {
  main?: boolean;
}

const Navbar = ({ main }: NavProp) => {
  const router = useRouter();
  const name = "ApexLog Operation Hub";
  const Subtext = "Unified Transaction Application";
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState(false);
  const [status, setStatus] = useState(true);
  const text = status ? "Connected" : "Not Connected";

  useEffect(() => {
    const storedFirstName = localStorage.getItem("first_name") || "";
    const storedLastName = localStorage.getItem("last_name") || "";

    set_last_name(storedLastName);
    set_first_name(storedFirstName);

    setIsMounted(true);
    const time = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(time);
  }, [router]);

  const logOut = () => {
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("email");
    localStorage.removeItem("token");

    router.push("/auth");
  };

  return (
    <div className="sticky z-50 top-0 bg-white dark:bg-slate-900 border-b-8 border-blue-900 dark:border-blue-600 px-6 py-3 flex justify-center ">
      <div className="flex items-center w-full max-w-7xl justify-between ">
        <div className="flex items-center ">
          <div className="p-2 bg-blue-600 rounded-sm mr-2 ">
            <FiDatabase className="text-white text-xl " />
          </div>
          <div className="flex flex-col items-start ">
            <h1 className="font-serif font-bold uppercase dark:text-white ">
              {name}
            </h1>
            <p className="text-sm dark:text-neutral-300 ">{Subtext}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className={`${main ? "flex gap-4 items-center" : "hidden"}`}>
            <div className="flex gap-4 items-center bg-white dark:bg-slate-900  border-neutral-200 dark:border-slate-600 rounded-sm p-2 ">
              <div className="flex items-center gap-3 text-xs ">
                <span className={status ? `relative flex w-2 h-2` : `hidden`}>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-400 "></span>
                </span>
                <p
                  className={
                    status
                      ? "text-xs font-bold text-emerald-600 dark:text-emerald-400"
                      : "text-xs font-bold text-rose-600 dark:text-rose-400"
                  }
                >
                  MySQL Status: <span>{text}</span>
                </p>
              </div>
              <div className="text-neutral-600 dark:text-white font-bold text-xs ">
                {isMounted && status
                  ? currentTime.toLocaleTimeString()
                  : "--:--:--"}
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="w-8 h-8 cursor-pointer rounded-full bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-600 flex justify-center items-center text-xs ">
                  {last_name.substring(0, 1)}
                  {"."}
                  {first_name.substring(0, 1)}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-600">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem className="dark:hover:bg-slate-600 duration-300 cursor-pointer">
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="bg-red-200/20 dark:bg-rose-400/10 hover:bg-red-200/40 dark:hover:bg-red-400/30 duration-300 cursor-pointer text-rose-600! hover:text-rose-600!">
                    <button
                      onClick={logOut}
                      className="w-full h-full cursor-pointer text-left"
                    >
                      Log Out
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                {/* <DropdownMenuSeparator /> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
