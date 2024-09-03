"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BoxReveal from "@/components/magicui/box-reveal";
import { FadeText } from "@/components/magicui/fade-text";

const Loading = ({
  setIsLoading,
}: {
  setIsLoading: (isLoading: boolean) => void;
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Light in background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-purple-400 rounded-full opacity-5 blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-pink-400 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute top-1/2 right-1/6 w-56 h-56 bg-green-400 rounded-full opacity-5 blur-3xl"></div>
          </div>

          <div className="mb-8 relative z-10">
            <BoxReveal boxColor={"#ffffff"} duration={0.5}>
              <FadeText
                text="Personal Portfolio"
                className="text-6xl font-bold text-white"
              />
            </BoxReveal>
          </div>

          <BoxReveal boxColor={"#ffffff"} duration={0.5}>
            <FadeText text="Loading..." className="text-2xl text-white" />
          </BoxReveal>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
