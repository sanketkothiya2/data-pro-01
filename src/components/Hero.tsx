"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDownRight, MapPin, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import Magnetic from "./ui/Magnetic";
import { Github, Linkedin } from "./ui/BrandIcons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center px-6 pt-28 md:px-10"
    >
      <motion.div
        style={{ y: titleY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-amber"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
          </span>
          Open to Data Analyst roles
        </motion.div>

        <motion.p
          variants={item}
          className="mb-4 flex items-center gap-2 font-mono text-sm text-ink-dim"
        >
          <MapPin size={14} className="text-honey" /> {site.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          {site.name.split(" ")[0]}
          <br />
          <span className="text-gradient">{site.name.split(" ")[1]}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-ink-dim md:text-xl"
        >
          {site.role} ·{" "}
          <span className="text-ink">{site.tagline}</span>
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href="#work"
              className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber to-gold px-7 py-4 font-display font-semibold text-black shadow-glow transition-transform hover:scale-[1.03] active:scale-95"
            >
              View my work
              <ArrowDownRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </Magnetic>

          <div className="flex items-center gap-2">
            <Magnetic strength={0.5}>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-12 w-12 place-items-center rounded-2xl glass text-ink transition-colors hover:text-amber"
              >
                <Github size={20} />
              </a>
            </Magnetic>
            <Magnetic strength={0.5}>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-12 w-12 place-items-center rounded-2xl glass text-ink transition-colors hover:text-amber"
              >
                <Linkedin size={20} />
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating monogram orb */}
      <motion.div
        style={{ scale: orbScale, opacity: fade }}
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <div className="relative grid h-64 w-64 place-items-center xl:h-80 xl:w-80">
          <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-amber/30" />
          <div className="absolute inset-6 rounded-full bg-[conic-gradient(from_0deg,rgba(255,210,63,0.5),rgba(255,122,69,0.25),rgba(255,210,63,0.5))] blur-2xl" />
          <div className="glass relative grid h-40 w-40 place-items-center rounded-[2rem] xl:h-48 xl:w-48">
            <span className="font-display text-6xl font-bold text-gradient xl:text-7xl">
              SK
            </span>
            <Sparkles className="absolute -right-3 -top-3 text-amber" size={28} />
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint md:flex"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-amber to-transparent" />
      </motion.div>
    </section>
  );
}
