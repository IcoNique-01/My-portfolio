import Navbar from "../Navbar";
import Resume from "./Resume";

const ResumePage = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Navbar title="Resume" />
      <Resume />
    </div>
  );
};

export default ResumePage;
