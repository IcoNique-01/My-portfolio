import Project from "./Project";
import Navbar from "../Navbar";

const ProjectPage = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Navbar title="Projects" />
      <Project />
    </div>
  );
};

export default ProjectPage;
