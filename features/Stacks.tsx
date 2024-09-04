"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { motion, useInView } from "framer-motion";
import { DotPattern } from "@/components/magicui/dot-pattern";
import Image from "next/image";
import { useRef } from "react";

const Stacks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="mx-auto bg-gradient-to-b from-white to-gray-100 min-h-screen relative overflow-hidden py-16 sm:py-32"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-indigo-300 rounded-full opacity-20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Dot pattern */}
      <DotPattern
        width={40}
        height={40}
        cx={1}
        cy={1}
        cr={1}
        className="absolute inset-0 opacity-30"
      />

      <div className="container mx-auto px-4 py-8 sm:py-16 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between md:space-x-8 lg:space-x-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <BlurFade>
              <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
                My Stack
              </h3>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                Crafting Digital{" "}
                <span className="text-indigo-600">Experiences</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Leveraging cutting-edge technologies to build powerful and
                scalable web applications.
              </p>
            </BlurFade>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-3 gap-4 sm:gap-8">
            <TechLogo src="/next.svg" alt="Next.js" />
            <TechLogo src="/vercel.svg" alt="Vercel" />
            <TechLogo src="/supabase.svg" alt="Supabase" />
            <TechLogo src="/react.svg" alt="React" />
            <TechLogo src="/typescript.svg" alt="TypeScript" />
            <TechLogo src="/tailwind-css.svg" alt="Tailwind CSS" />
            <TechLogo src="/framer-motion.svg" alt="Framer Motion" />
            <TechLogo src="/django.svg" alt="Django" />
            <TechLogo src="/express.svg" alt="Express" />
          </div>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
            <span className="text-indigo-600">Technologies</span> I use to build
            your business
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <TechItem
              icon="next.svg"
              name="Next.js"
              description="Next.js is perfect for fast, SEO-friendly MVPs with Server-Side Rendering and Static Site Generation, ensuring scalability from the start."
            />
            <TechItem
              icon="vercel.svg"
              name="Vercel"
              description="Vercel enables quick deployment and seamless scaling, ideal for MVPs. Its integration with Next.js simplifies the development process."
            />
            <TechItem
              icon="supabase.svg"
              name="Supabase"
              description="Supabase offers an open-source, Firebase-like experience for rapid MVP development, with real-time databases and easy back-end setup."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TechLogo = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-20 sm:h-24"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={src}
        alt={alt}
        width={64}
        height={64}
        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
      />
    </motion.div>
  );
};

interface TechItemProps {
  icon: string;
  name: string;
  description: string;
}

const TechItem = ({ icon, name, description }: TechItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={icon}
        alt={name}
        width={72}
        height={72}
        className="mb-4 sm:mb-6"
      />
      <p className="text-sm sm:text-base text-gray-600 text-center">
        {description}
      </p>
    </motion.div>
  );
};

export default Stacks;
