"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { FadeText } from "@/components/magicui/fade-text";
import BoxReveal from "@/components/magicui/box-reveal";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  ctaText: string;
  ctaUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Iconik",
    description:
      "A full-stack loyalty platform for businesses to manage their loyalty programs.",
    technologies: ["Next.js", "Vercel", "Supabase", "TailwindCSS"],
    image: "/projects/iconik-landing.png",
    ctaText: "View Project",
    ctaUrl: "https://iconik-hub.fr",
  },
  {
    id: 2,
    title: "CountAct",
    description:
      "A SaaS for directors to manage emergency operations and manage her teams.",
    technologies: ["React", "Django", "Postgres", "Docker"],
    image: "/projects/countact.png",
    ctaText: "View Project",
    ctaUrl: "https://countact.fr",
  },
  {
    id: 3,
    title: "Become my next client",
    description: "You can become my next client by clicking the button below.",
    technologies: ["Call me for more info"],
    image: "/projects/you.jpg",
    ctaText: "Become my next client",
    ctaUrl: "https://cal.com/nathan-renard/freelance-rdv",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <BlurFade delay={0.2}>
            <FadeText
              text="My Main Projects"
              className="text-4xl sm:text-5xl font-bold text-white text-center"
            />
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <BoxReveal>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-indigo-600 text-white text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </BoxReveal>
              <motion.div
                className={cn(
                  "absolute inset-0 bg-indigo-600 bg-opacity-80 flex items-center justify-center rounded-lg",
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                )}
                initial={false}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={project.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-opacity-90 transition duration-300"
                >
                  {project.ctaText}
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
