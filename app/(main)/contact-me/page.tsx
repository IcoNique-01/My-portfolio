import Navbar from "../Navbar";
import ContactMe from "./ContactMe";

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Navbar title="Contact Me" />
      <ContactMe />
    </div>
  );
};

export default ContactPage;
