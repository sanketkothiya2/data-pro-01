"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experience, education } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" kicker="Journey" title="Where I've made an impact." />

        <div ref={ref} className="relative">
          {/* dim spine */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-white/10 md:left-[9px]" />
          {/* animated fill */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[7px] top-2 h-full w-px origin-top bg-gradient-to-b from-amber via-cyan to-violet md:left-[9px]"
          />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.05} className="relative pl-10 md:pl-14">
                <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-cyan shadow-glow-cyan md:h-5 md:w-5">
                  {job.current && (
                    <span className="absolute h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
                  )}
                </span>

                <div className="glass rounded-2xl p-6 transition-colors hover:border-cyan/40">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {job.role}{" "}
                      <span className="text-gradient-cool">@ {job.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-ink-faint">{job.period}</span>
                  </div>
                  <p className="mt-1 flex items-center gap-2 text-sm text-ink-dim">
                    <Briefcase size={14} className="text-cyan" /> {job.location}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.06} className="glass rounded-2xl p-6">
              <GraduationCap className="mb-3 text-amber" size={22} />
              <h4 className="font-display font-semibold text-ink">{e.school}</h4>
              <p className="text-sm text-ink-dim">{e.degree}</p>
              <p className="mt-2 font-mono text-xs text-ink-faint">
                {e.period} · {e.location}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
