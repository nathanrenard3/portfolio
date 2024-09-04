"use client";

import Quote from "@/features/Quote";
import Hero from "@/features/Hero";
import Loading from "@/features/Loading";
import { cn } from "@/lib/utils";
import Stacks from "@/features/Stacks";
import { useState } from "react";
import Navbar from "@/features/Navbar";
import Projects from "@/features/Projects";
import Socials from "@/features/Socials";
import Footer from "@/features/Footer";
import About from "@/features/About";
import DotPattern from "@/components/magicui/dot-pattern";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className={cn("w-full h-full", isLoading && "overflow-hidden")}>
      <Loading setIsLoading={setIsLoading} />
      {!isLoading && (
        <>
          <Navbar />
          <div className="relative">
            <Hero />
            <Socials />
          </div>
          <Quote />
          <About />
          <Stacks />
          <div className="relative bg-gradient-to-b from-gray-900 to-black">
            <DotPattern
              width={30}
              height={30}
              className="absolute inset-0 opacity-20"
            />
            <Projects />
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}
