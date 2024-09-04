import { motion } from "framer-motion";
import Link from "next/link";
import { Headset, LinkedinIcon, XIcon } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Headset className="w-5 h-5" />,
      href: "https://cal.com/nathan-renard/freelance-rdv",
    },
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/nathan-renard-6a0919234/",
    },
    {
      icon: <XIcon className="w-5 h-5" />,
      href: "https://x.com/nathan_renard3",
    },
  ];

  return (
    <footer className="relative py-8 md:py-16">
      <div className="container mx-auto px-4">
        <BlurFade>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2 text-white">
                Nathan Renard
              </h3>
              <p className="text-gray-400 text-lg">Full-stack Developer</p>
            </div>
            <div className="flex space-x-6">
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
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-full",
                      "bg-gray-800 text-white hover:bg-indigo-600 hover:text-white",
                      "transition-colors duration-300"
                    )}
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Nathan Renard. All rights reserved.
            </p>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
};

export default Footer;
