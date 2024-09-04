import { motion } from "framer-motion";
import { Headset, LinkedinIcon, XIcon } from "lucide-react";
import Link from "next/link";

const Socials = () => {
  const socialLinks = [
    {
      icon: <Headset />,
      href: "https://cal.com/nathan-renard/freelance-rdv",
    },
    {
      icon: <LinkedinIcon />,
      href: "https://www.linkedin.com/in/nathan-renard-6a0919234/",
    },
    { icon: <XIcon />, href: "https://x.com/nathan_renard3" },
  ];

  return (
    <motion.div
      className="absolute left-4 bottom-0 z-50 flex flex-col items-center space-y-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {socialLinks.map((link, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-400 transition-colors duration-300"
          >
            {link.icon}
          </Link>
        </motion.div>
      ))}
      <div className="h-20 w-px bg-white/20" />
    </motion.div>
  );
};

export default Socials;
