"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import Magnetic from "./ui/Magnetic";
import { Github, Linkedin, CanadaFlag } from "./ui/BrandIcons";
import { TechIcon } from "./ui/tech";
import { useMounted } from "@/lib/useMounted";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const floatBadges = [
  { name: "Python", cls: "left-[-7%] top-[12%]", d: 0 },
  { name: "Power BI", cls: "right-[-9%] top-[20%]", d: 0.6 },
  { name: "SQL", cls: "left-[-10%] bottom-[26%]", d: 1.2 },
  { name: "Scikit-learn", cls: "right-[-6%] bottom-[14%]", d: 1.8 },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [imgOk, setImgOk] = useState(true);
  const mounted = useMounted();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const leftStyle = mounted ? { y: textY, opacity: fade } : undefined;
  const photoStyle = mounted ? { y: photoY, opacity: fade } : undefined;
  const fadeStyle = mounted ? { opacity: fade } : undefined;

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center px-6 pt-28 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT — copy */}
        <motion.div
          style={leftStyle}
          variants={container}
          initial="hidden"
          animate="show"
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
            className="mb-4 flex items-center gap-2.5 font-mono text-sm text-ink-dim"
          >
            <CanadaFlag size={14} className="rounded-[2px] ring-1 ring-white/10" />
            {site.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl"
          >
            {site.name.split(" ")[0]}
            <br />
            <span className="text-gradient-duo">{site.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-dim"
          >
            <span className="font-semibold text-cyan">{site.role}</span> ·{" "}
            <span className="text-ink">{site.tagline}</span>
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber via-honey to-ember px-7 py-4 font-display font-semibold text-black shadow-glow transition-transform hover:scale-[1.03] active:scale-95"
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
                  className="grid h-12 w-12 place-items-center rounded-2xl glass text-ink transition-colors hover:text-cyan"
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
                  className="grid h-12 w-12 place-items-center rounded-2xl glass text-ink transition-colors hover:text-cyan"
                >
                  <Linkedin size={20} />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — photo */}
        <motion.div
          style={photoStyle}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="relative mx-auto aspect-square w-[19rem] xl:w-[23rem]">
            {/* glow */}
            <div className="absolute -inset-8 rounded-full bg-[conic-gradient(from_140deg,rgba(255,210,63,0.4),rgba(56,189,248,0.4),rgba(139,108,255,0.3),rgba(255,210,63,0.4))] opacity-70 blur-3xl" />
            {/* rotating dashed rings */}
            <div className="animate-spin-slow absolute -inset-4 rounded-full border border-dashed border-cyan/25" />
            <div className="animate-spin-rev absolute -inset-1 rounded-full border border-amber/20" />

            {/* gradient ring + circular image */}
            <div className="relative h-full w-full rounded-full bg-gradient-to-br from-amber via-cyan/30 to-azure p-[3px] shadow-glow-cyan">
              <div className="h-full w-full overflow-hidden rounded-full glass-strong">
                {imgOk ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={site.photo}
                    alt={site.name}
                    onError={() => setImgOk(false)}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "50% 22%" }}
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center bg-gradient-to-br from-base-2 to-surface">
                    <span className="font-display text-7xl font-bold text-gradient-duo">SK</span>
                  </div>
                )}
              </div>
            </div>

            {/* floating tech badges */}
            {floatBadges.map((b) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + b.d * 0.15, type: "spring", stiffness: 200 }}
                className={`absolute ${b.cls} animate-float-slow z-10`}
                style={{ animationDelay: `${b.d}s` }}
              >
                <div className="flex items-center gap-2 rounded-2xl glass-strong px-3 py-2 shadow-glow-cyan">
                  <TechIcon name={b.name} size={20} />
                  <span className="text-xs font-semibold text-ink">{b.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* name tag below */}
          <div className="mt-7 flex justify-center">
            <span className="flex items-center gap-2 rounded-full glass-strong px-4 py-2 text-xs font-medium text-cyan">
              <Sparkles size={14} /> Data Analyst · Windsor, ON
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        style={fadeStyle}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint md:flex"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-cyan to-transparent" />
      </motion.div>
    </section>
  );
}
