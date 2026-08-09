import Profile from "../Profile";
import FooterTop from "../FooterTop";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row w-full gap-6 max-w-7xl mx-auto relative py-4 md:items-start px-4 dark:bg-neutral-950">
        <div className="w-full md:w-fit md:sticky top-4 bg-indigo-50 dark:bg-neutral-700/40 rounded-xl shadow-md p-2.5 sm:p-5">
          <Profile />
        </div>
        <main className="p-5 rounded-xl bg-indigo-50 dark:bg-neutral-700/40 shadow-md h-full w-full">
          {children}
        </main>
      </div>
      <footer className="w-full sticky bottom-0 md:relative bg-indigo-50 dark:bg-neutral-800 z-50 flex flex-col items-center gap-4 py-4 md:p-4">
        <div className="max-w-7xl w-full">
          <FooterTop topic="Contact me" />
        </div>
        <p className="w-full hidden md:block text-center text-xs border-t-2 border-indigo-200/50 dark:text-neutral-200/80 dark:border-blue-200/30 pt-4">
          &copy; 2026 Imokhai C. O. Nathan. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default MainLayout;
