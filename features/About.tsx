"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import NumberTicker from "@/components/magicui/number-ticker";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const kpis = [
    { value: "3", prefix: "+", label: "Years Experience" },
    { value: "2", prefix: "", label: "Projects Completed" },
    { value: "450", prefix: "€", label: "Daily Rate" },
    { value: "100", prefix: "%", label: "Of Satisfied Clients" },
  ];

  return (
    <section
      ref={ref}
      className="mx-auto bg-gradient-to-b from-white to-gray-100 min-h-screen relative overflow-hidden py-16 sm:py-32"
    >
      {/* Inverted blob transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0 transform rotate-180">
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
            className="fill-gray-100"
          ></path>
        </svg>
      </div>

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
                About Me
              </h3>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                Passionate about{" "}
                <span className="text-indigo-600">Web Development</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                As a freelance developer, I specialize in building custom SaaS
                solutions tailored for startups. With over 3 years of
                experience, I help businesses bring their ideas to life by
                developing scalable, efficient, and user-focused web
                applications. From MVPs to full-scale platforms, my goal is to
                deliver high-quality products that meet your needs and grow with
                your business.
              </p>
            </BlurFade>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 sm:gap-8">
            {kpis.map((kpi, index) => (
              <KPICard key={index} {...kpi} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
            My <span className="text-indigo-600">Goals</span>
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            My primary goal is to empower startups by building scalable and
            efficient SaaS solutions that drive business growth. I achieve this
            by leveraging powerful technologies like Next.js, Vercel, and
            Supabase, ensuring fast development, seamless deployment, and the
            ability to scale as your business evolves.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

interface KPICardProps {
  value: string;
  prefix: string;
  label: string;
}

const KPICard = ({ value, prefix, label }: KPICardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-2xl sm:text-3xl font-bold mb-1">
        <NumberTicker value={parseFloat(value)} className="text-indigo-600" />
        <span className="text-indigo-600">{prefix}</span>
      </h3>
      <p className="text-sm text-gray-600 text-center">{label}</p>
    </motion.div>
  );
};

export default About;
