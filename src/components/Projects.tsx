"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { projects, categories, type Category } from "@/data/projects";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import {
  Layers,
  BrainCircuit,
  Sigma,
  BarChart3,
  Database,
} from "lucide-react";

type Filter = "All" | Category;

const tabs: { label: Filter; icon: React.ElementType }[] = [
  { label: "All", icon: Layers },
  { label: "Machine Learning", icon: BrainCircuit },
  { label: "Statistical Analysis", icon: Sigma },
  { label: "BI & Data Apps", icon: BarChart3 },
  { label: "SQL & EDA", icon: Database },
];

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          kicker="Selected Work"
          title="Eight projects, sorted by craft."
        />

        {/* category tabs */}
        <LayoutGroup>
          <div className="mb-10 flex flex-wrap gap-2">
            {tabs.map(({ label, icon: Icon }) => {
              const isActive = active === label;
              const count =
                label === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === label).length;
              return (
                <button
                  key={label}
                  onClick={() => setActive(label)}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive ? "text-black" : "text-ink-dim hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-tab"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-amber to-gold shadow-glow"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {!isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full glass" />
                  )}
                  <Icon size={15} />
                  {label}
                  <span
                    className={`rounded-full px-1.5 text-xs ${
                      isActive ? "bg-black/15" : "bg-white/10 text-ink-faint"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <motion.div layout className="grid gap-5 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
