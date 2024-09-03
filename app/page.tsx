"use client";

import Quote from "@/features/Quote";
import Hero from "@/features/Hero";
import Loading from "@/features/Loading";
import { cn } from "@/lib/utils";
import Projects from "@/features/Projects";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className={cn("w-full h-full", isLoading && "overflow-hidden")}>
      <Loading setIsLoading={setIsLoading} />
      {!isLoading && (
        <>
          <Hero />
          <Quote />
          <Projects />
        </>
      )}
    </main>
  );
}
