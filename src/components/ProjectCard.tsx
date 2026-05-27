"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Github } from "./ui/BrandIcons";
import { TechIcon } from "./ui/tech";
import type { Project } from "@/data/projects";

const glows = [
  "from-amber/25 via-honey/10 to-transparent",
  "from-cyan/25 via-azure/10 to-transparent",
  "from-violet/20 via-cyan/10 to-transparent",
];

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const glow = glows[index % glows.length];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl glass p-6 transition-colors duration-300 hover:border-cyan/40 md:p-8 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-cyan">
              {project.category}
            </span>
            <span className="font-mono text-xs text-ink-faint">{project.domain}</span>
          </div>
          <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            {project.title}
          </h3>
        </div>
        <span className="shrink-0 font-mono text-xs text-ink-faint">{project.year}</span>
      </div>

      <p className="relative mt-4 max-w-2xl leading-relaxed text-ink-dim">
        {project.blurb}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-3">
        {project.metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2"
          >
            <div className="font-display text-lg font-bold text-gradient">{m.value}</div>
            <div className="text-[11px] uppercase tracking-wide text-ink-faint">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {project.featured && (
        <ul className="relative mt-6 grid gap-2 sm:grid-cols-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm leading-relaxed text-ink-dim">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="relative mt-auto flex flex-wrap items-center gap-2 pt-6">
        {project.stack.map((s) => (
          <span
            key={s}
            className="flex items-center gap-1.5 rounded-lg bg-white/[0.04] px-2.5 py-1.5 font-mono text-xs text-ink-dim"
          >
            <TechIcon name={s} size={15} />
            {s}
          </span>
        ))}
      </div>

      <div className="relative mt-5 flex items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber to-gold px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.04]"
          >
            Live demo <ExternalLink size={14} />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl glass px-4 py-2 text-sm font-medium text-ink transition-colors hover:text-cyan"
          >
            <Github size={15} /> Code
          </a>
        )}
        {!project.liveUrl && !project.repoUrl && (
          <span className="flex items-center gap-1.5 text-sm text-ink-faint">
            <ArrowUpRight size={15} className="text-cyan" /> Case study
          </span>
        )}
      </div>
    </motion.article>
  );
}
