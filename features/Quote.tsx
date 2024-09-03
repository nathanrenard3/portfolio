"use client";

import BlurFade from "@/components/magicui/blur-fade";
import TextReveal from "@/components/magicui/text-reveal";
import { motion } from "framer-motion";

const Quote = () => {
  return (
    <section className="mx-auto bg-gradient-to-b from-white to-gray-100 h-screen relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-xl"
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
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-300 rounded-full opacity-20 blur-xl"
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

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-300 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Quote content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <BlurFade delay={0.25 * 2} inView>
          <TextReveal
            text="« Vous n'avez pas besoin d'être excellent pour vous lancer dans quelque chose, mais vous devez vous lancer pour le devenir. » — Zig Ziglar,"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 max-w-3xl text-center"
          />
        </BlurFade>
      </div>
    </section>
  );
};

export default Quote;
