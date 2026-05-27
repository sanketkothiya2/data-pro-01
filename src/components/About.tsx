"use client";

import { site, stats } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import CountUp from "./ui/CountUp";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" kicker="About" title="Data with a point of view." />

        <div className="grid gap-12 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <p className="text-xl leading-relaxed text-ink-dim md:text-2xl">
              {site.summary}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-faint">
              I care less about the chart and more about the decision behind it —
              the recommendation a stakeholder can act on tomorrow morning.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className="glass rounded-2xl p-5 transition-colors hover:border-cyan/40"
              >
                <div className={`font-display text-4xl font-bold ${i % 2 ? "text-gradient-cool" : "text-gradient"}`}>
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm text-ink-dim">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
