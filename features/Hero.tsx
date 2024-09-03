"use client";

import { motion } from "framer-motion";
import { FadeText } from "@/components/magicui/fade-text";
import BlurFade from "@/components/magicui/blur-fade";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import FloatingIcons from "@/components/customs/FloatingIcons";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-800">
      {/* Light in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-purple-400 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-pink-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/6 w-56 h-56 bg-green-400 rounded-full opacity-5 blur-3xl"></div>
      </div>

      {/* Icons */}
      <FloatingIcons />

      <div className="container mx-auto px-4 text-center z-10 mt-[-10vh]">
        <div className="z-10 flex items-center justify-center mb-8">
          <div
            className={cn(
              "group rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-base text-white transition-all ease-in hover:bg-white/10"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-5 py-2 transition ease-out hover:text-white">
              <span>💻 Full-Stack Developer</span>
              <ArrowRightIcon className="ml-2 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </AnimatedShinyText>
          </div>
        </div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <FadeText
            text="Nathan Renard"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          />
        </motion.div>
        <BlurFade delay={0.6}>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 px-4">
            Crafting elegant and performant solutions for your business.
          </p>
        </BlurFade>
        <BlurFade delay={0.8}>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </BlurFade>
      </div>

      {/* Blob transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden line-height-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[120px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white opacity-10"
          ></path>
        </svg>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px] -mt-[90px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
