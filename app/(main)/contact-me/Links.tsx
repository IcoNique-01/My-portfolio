import { Mail, Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

interface type {
  id: number;
  body: string;
  ref: string;
  icon: string;
}

interface detProp {
  detLoop: type;
}

const sideIcons: Record<string, React.ComponentType<any>> = {
  Mail,
  Phone,
  FaWhatsapp,
};

const Links = ({ detLoop }: detProp) => {
  const IconComponent = sideIcons[detLoop.icon];

  return (
    <a
      href={detLoop.ref}
      className="flex gap-4 items-center hover:text-blue-700 dark:hover:text-blue-200 text-neutral-800 dark:text-neutral-100 duration-200 ease-in-out"
      target="_blank"
    >
      <IconComponent className="w-5 h-5 shrink-0 text-blue-700 dark:text-blue-200" />{" "}
      <span className="text-sm sm:text-base tracking-wide">{detLoop.body}</span>
    </a>
  );
};

export default Links;
