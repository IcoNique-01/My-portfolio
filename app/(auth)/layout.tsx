import Navbar from "@/components/Navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar main={false} />
      <div className="flex justify-center items-center relative p-16 ">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
