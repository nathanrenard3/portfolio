import { motion } from "framer-motion";
import { CodeIcon, GearIcon, LightningBoltIcon } from "@radix-ui/react-icons";

const iconVariants = {
  animate: {
    y: ["0%", "-20%", "0%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-[10%] sm:left-1/4"
        variants={iconVariants}
        animate="animate"
      >
        <CodeIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-[10%] sm:right-1/4"
        variants={iconVariants}
        animate="animate"
      >
        <GearIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/4 sm:left-1/3"
        variants={iconVariants}
        animate="animate"
      >
        <LightningBoltIcon className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-400 opacity-50" />
      </motion.div>
    </div>
  );
};

export default FloatingIcons;
