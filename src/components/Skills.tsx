"use client";

import { skillGroups } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { TechIcon } from "./ui/tech";

const marquee = [
  "Python", "SQL", "Power BI", "Tableau", "Pandas", "Scikit-learn",
  "PostgreSQL", "Streamlit", "ETL Pipelines", "Statsmodels", "NumPy", "Seaborn",
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" kicker="Toolkit" title="The stack I reach for." />

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 0.06}
              className="glass group rounded-2xl p-6 transition-colors hover:border-cyan/40"
            >
              <h3 className="mb-5 font-mono text-sm uppercase tracking-wider text-cyan">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-ink transition-all hover:-translate-y-0.5 hover:border-cyan/30"
                  >
                    <TechIcon name={item} size={18} />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* infinite marquee with icons */}
      <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-10">
          {[...marquee, ...marquee].map((word, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap font-display text-2xl font-semibold text-ink-faint md:text-3xl"
            >
              <TechIcon name={word} size={28} />
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
