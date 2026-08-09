import Navbar from "../Navbar";
import AboutMe from "./AboutMe";

const AboutMePage = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Navbar title="About Me" />
      <AboutMe />
    </div>
  );
};

export default AboutMePage;
