"use client";
import ContactForm from "./ContactForm";
import ContactRight from "./ContactRight";

const ContactMe = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3">
        <ContactForm />
      </div>
      <div className="lg:col-span-2">
        <ContactRight />
      </div>
    </section>
  );
};

export default ContactMe;
