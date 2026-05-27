"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Github } from "./ui/BrandIcons";
import type { Project } from "@/data/projects";

const gradients = [
  "from-amber/30 via-gold/10 to-transparent",
  "from-ember/25 via-honey/10 to-transparent",
  "from-gold/30 via-amber/10 to-transparent",
];

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const grad = gradients[index % gradients.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 md:p-8 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* glow on hover */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${grad} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-honey">
            {project.domain}
          </span>
          <h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            {project.title}
          </h3>
        </div>
        <span className="shrink-0 font-mono text-xs text-ink-faint">{project.year}</span>
      </div>

      <p className="relative mt-4 max-w-2xl leading-relaxed text-ink-dim">
        {project.blurb}
      </p>

      {/* metrics */}
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

      {/* highlights only on featured */}
      {project.featured && (
        <ul className="relative mt-6 grid gap-2 sm:grid-cols-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm leading-relaxed text-ink-dim">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="relative mt-auto flex flex-wrap items-center gap-2 pt-6">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-ink-dim"
          >
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
            className="flex items-center gap-1.5 rounded-xl glass px-4 py-2 text-sm font-medium text-ink transition-colors hover:text-amber"
          >
            <Github size={15} /> Code
          </a>
        )}
        {!project.liveUrl && !project.repoUrl && (
          <span className="flex items-center gap-1.5 text-sm text-ink-faint">
            <ArrowUpRight size={15} className="text-honey" /> Case study
          </span>
        )}
      </div>
    </motion.article>
  );
}
