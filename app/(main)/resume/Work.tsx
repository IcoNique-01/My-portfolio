import { ul } from "framer-motion/client";

interface bodyProp {
  id: number;
  item: string;
}

interface workProp {
  id: number;
  name: string;
  year: string;
  position: string;
  body: bodyProp[];
}

interface innerProp {
  work: workProp;
}

const Work = ({ work }: innerProp) => {
  return (
    <div className="w-full flex items-start justify-start gap-6 ">
      <div className="relative w-fit h-full">
        <span className="font-bold text-blue-700 dark:text-blue-200 bg-indigo-200/50 dark:bg-indigo-800/30 px-2 py-1 rounded-sm ">
          {work.id + 1}
        </span>
        {/* <div className="absolute w-px top-full h-full left-1/2 -translate-x-1/2 bg-linear-to-b from-blue-700 to-transparent bottom-full " /> */}
      </div>
      <div className="w-full flex flex-col gap-2 sm:gap-3">
        <div className="flex flex-col gap-0.5">
          <h2 className="font-bold uppercase tracking-wide flex flex-wrap sm:items-center justify-between text-base">
            <span className="text-blue-700 dark:text-blue-200">
              {work.name}
            </span>
            <span className=" italic">{work.year}</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-200/80 tracking-wide w-full italic text-sm sm:text-base">
            {work.position}
          </p>
        </div>
        <div className="text-sm sm:text-base">
          <ul
            className="w-full flex flex-col gap-2"
            style={{ listStyle: "inherit" }}
          >
            {work.body.map((items) => (
              <li
                key={items.id}
                className="text-neutral-800 dark:text-neutral-100"
              >
                {items.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
