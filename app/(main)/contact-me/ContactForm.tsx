"use client";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [view, setView] = useState<"submitted" | "form">("form");
  const [error, setError] = useState("");
  const [blocked, setBlocked] = useState(false);
  const number = 2348169720388;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setBlocked(true);

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      setError("Fill all fields");
      setTimeout(() => {
        setError("");
      }, 2000);
      setBlocked(false);
      return;
    }

    setView("submitted");

    const mainMessage = `Hi, I'm ${formData.name.trim()}. ${formData.message.trim()}.`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(mainMessage)}`;

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      window.open(url, "_blank");
      setView("form");
      setBlocked(false);
    }, 1500);
  };

  return (
    <div className="w-full h-full">
      {view === "form" ? (
        <form onSubmit={submitForm} className="flex flex-col gap-6">
          {error && (
            <div className="w-full py-1.5 px-2 md:px-4 md:py-2 bg-red-600/20 text-red-600 rounded-lg">
              {error}
            </div>
          )}
          <div className="flex flex-col gap-4">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor="name"
                  className="block text-neutral-500 dark:text-neutral-100 tracking-widest font-semibold"
                >
                  <span className="text-red-600">*</span> Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-2 px-3 placeholder:text-neutral-400 outline-none rounded-lg bg-white dark:bg-neutral-950 dark:placeholder:text-neutral-200/60"
                  placeholder="Imokhai Nathan"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor="email"
                  className=" block text-neutral-500 dark:text-neutral-100 tracking-widest font-semibold"
                >
                  <span className="text-red-600">*</span> Email
                </label>
                <input
                  className="w-full py-2 px-3 placeholder:text-neutral-400 outline-none rounded-lg bg-white dark:bg-neutral-950 dark:placeholder:text-neutral-200/60"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="chibuzor@gmail.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <label
                htmlFor="message"
                className="block text-neutral-500 dark:text-neutral-100 tracking-widest font-semibold"
              >
                <span className="text-red-600">*</span> Message
              </label>
              <textarea
                className="w-full py-2 px-3 placeholder:text-neutral-400 outline-none rounded-lg bg-white dark:bg-neutral-950 dark:placeholder:text-neutral-200/60 resize-none"
                placeholder="Tell me what you need..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={8}
              ></textarea>
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                className={`w-fit flex items-center gap-3 rounded-xl duration-300 ease-in-out text-blue-700 dark:text-blue-200 bg-indigo-200/50 dark:bg-indigo-800/30 hover:bg-indigo-300/60 dark:hover:bg-indigo-500/30 px-6 py-1 ${blocked ? "cursor-not-allowed" : "cursor-pointer"}`}
                disabled={blocked}
              >
                <Send className="w-4 h-4 shrink-0" /> Send
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center gap-2.5 w-full">
          <div>
            <CheckCircle2 className="w-7 h-7 shrink-0 text-blue-700 dark:text-blue-200" />
          </div>
          <p className="font-bold text-lg tracking-wide">Message sent</p>
          <p>Lorem Ipsum</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
