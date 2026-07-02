import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar main={true} />
      <div className="flex flex-1 w-full max-w-7xl mx-auto relative items-start">
        <aside className="hidden md:block w-64 bg-neutral-100 dark:bg-slate-800 border-r border-neutral-200 dark:border-slate-700 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto">
          <Sidebar />
        </aside>
        <main className="flex-1 p-5 min-h-[calc(100vh-72px)]">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
