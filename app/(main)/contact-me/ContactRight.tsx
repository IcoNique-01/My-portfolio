import Links from "./Links";

const ContactRight = () => {
  const dets = [
    {
      id: 0,
      body: "nathanimokhai@gmail.com",
      ref: "mailto:nathanimokhai@gmail.com",
      icon: "Mail",
    },
    {
      id: 1,
      body: "+234 816 972 0388",
      ref: "tel:+2348169720388",
      icon: "Phone",
    },
    {
      id: 2,
      body: "+234 816 972 0388",
      ref: "https://wa.me/2348169720388",
      icon: "FaWhatsapp",
    },
  ];

  const jobs = [
    {
      id: 0,
      title: "Frontend Developer",
      body: "Looking to build responsive, type-safe web applications with Next.js & React.",
    },
    {
      id: 1,
      title: "Backend Developer",
      body: "Looking for secure REST API development, database design, & PHP execution.",
    },
    {
      id: 2,
      title: "Fullstack Developer",
      body: "Looking for end-to-end web system architecture, integration, & execution.",
    },
  ];

  return (
    <div className="w-full flex flex-col sm:flex-row md:flex-col gap-6">
      <div className="rounded-xl w-full h-fit bg-indigo-200/50 dark:bg-neutral-900 py-3.5 px-3 sm:py-7 sm:px-6 flex flex-col gap-2.5">
        <p className="font-bold tracking-wide">Reach Out Directly</p>
        {dets.map((detLoop) => (
          <Links key={detLoop.id} detLoop={detLoop} />
        ))}
      </div>
      <div className="rounded-xl w-full bg-indigo-200/50 dark:bg-neutral-900 py-3.5 px-3 sm:py-7 sm:px-6 flex flex-col gap-2.5">
        <p className="font-bold tracking-wide">Hire Me for a Role</p>
        {jobs.map((job) => {
          const number = 2348169720388;
          const message = `${job.title} needed. ${job.body}`;
          return (
            <a
              key={job.id}
              target="_blank"
              href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
              className="flex flex-col bg-indigo-200/80 dark:bg-neutral-700 border border-indigo-200/80 dark:border-neutral-700 hover:border-indigo-400/80 dark:hover:border-neutral-500 ease-in-out duration-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg"
            >
              <span className="text-blue-700 dark:text-blue-200 tracking-wider font-bold">
                {job.title}
              </span>
              <span className="text-neutral-700 dark:text-neutral-100 italic tracking-wide text-sm sm:text-sm">
                {job.body}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactRight;
