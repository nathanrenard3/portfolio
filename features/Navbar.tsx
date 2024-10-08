"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [scrolled, isOpen]);

  return (
    <motion.nav
      className={cn(
        "container fixed top-0 lg:top-5 left-0 lg:rounded-lg md:py-3 right-0 z-50 transition-all duration-300 py-2"
      )}
      initial={{ y: -100, backgroundColor: "rgba(0, 0, 0, 0)" }}
      animate={{
        y: 0,
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Nathan Renard
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#stacks">Stacks</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </div>
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HamburgerIcon isOpen={isOpen} />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && <MobileMenu setIsOpen={setIsOpen} scrolled={scrolled} />}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className="text-white hover:text-indigo-600 transition-colors duration-300 text-2xl md:text-base"
    onClick={onClick}
  >
    {children}
  </Link>
);

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="flex flex-col justify-center items-center w-6 h-6">
    <span
      className={cn(
        "bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
        isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
      )}
    ></span>
    <span
      className={cn(
        "bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5",
        isOpen ? "opacity-0" : "opacity-100"
      )}
    ></span>
    <span
      className={cn(
        "bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
      )}
    ></span>
  </div>
);

const MobileMenu = ({
  setIsOpen,
  scrolled,
}: {
  setIsOpen: (isOpen: boolean) => void;
  scrolled: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, x: "100%" }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: "100%" }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    className="fixed top-0 right-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm z-50 md:hidden flex flex-col"
  >
    <div className="flex justify-end p-4">
      <button onClick={() => setIsOpen(false)} className="text-white p-2">
        <CloseIcon />
      </button>
    </div>
    <div className="flex-grow flex flex-col justify-center items-center space-y-8">
      <NavLink href="#about" onClick={() => setIsOpen(false)}>
        About
      </NavLink>
      <NavLink href="#stacks" onClick={() => setIsOpen(false)}>
        Stacks
      </NavLink>
      <NavLink href="#projects" onClick={() => setIsOpen(false)}>
        Projects
      </NavLink>
    </div>
  </motion.div>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default Navbar;
