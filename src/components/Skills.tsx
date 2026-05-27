"use client";

import { skillGroups } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const marquee = [
  "Python", "SQL", "Power BI", "Tableau", "Pandas", "Scikit-learn",
  "PostgreSQL", "Streamlit", "ETL", "Statsmodels", "NumPy", "Seaborn",
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="02" kicker="Toolkit" title="The stack I reach for." />

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 0.06}
              className="glass group rounded-2xl p-6 transition-colors hover:border-amber/40"
            >
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-honey">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-ink-dim transition-colors group-hover:border-white/15"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* infinite marquee */}
      <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-4">
          {[...marquee, ...marquee].map((word, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-3xl font-semibold text-ink-faint md:text-5xl"
            >
              {word}
              <span className="mx-4 text-amber">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
