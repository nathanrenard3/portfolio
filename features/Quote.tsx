"use client";

import BlurFade from "@/components/magicui/blur-fade";
import TextReveal from "@/components/magicui/text-reveal";
import { motion } from "framer-motion";

const Quote = () => {
  return (
    <section className="relative mx-auto bg-gradient-to-b from-white to-gray-100">
      <BlurFade delay={0.25 * 2} inView>
        <div className="relative">
          {/* Glowing orbs */}
          <motion.div
            className="absolute -top-16 -left-16 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-16 -right-16 w-40 h-40 bg-purple-300/50 rounded-full opacity-5 blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Quote content */}
          <TextReveal
            text="« You don't have to be great to start, but you have to start to be great. » — Zig Ziglar"
            className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center"
          />
        </div>
      </BlurFade>
    </section>
  );
};

export default Quote;
